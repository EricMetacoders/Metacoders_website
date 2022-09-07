// add padding top to show content behind navbar
$("body").css("padding-top", $(".navbar").outerHeight() + "px");

var timer = null;

// detect scroll top or down
if ($(".smart-scroll").length > 0) {
  // check if element exists
  var last_scroll_top = 0;
  $(window).on("scroll", function () {
    scroll_top = $(this).scrollTop();
    if (scroll_top < 15) {
      $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
      return true;
    }
    if (scroll_top < last_scroll_top) {
      $(".smart-scroll").removeClass("scrolled-down").addClass("scrolled-up");
    } else {
      $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
    }
    last_scroll_top = scroll_top;
  });
}

// scroll to top

$("a[href='#top']").click(function () {
  $("html, body").animate({ scrollTop: 0 }, "smooth");
  $('#five"').off("inview");
  $("body").getNiceScroll().remove();
  return false;
});
$("#navbarSupportedContent a").click(function () {
  const url = $(this).attr("href");
  if (url.indexOf("#") != -1) {
    const hash = url.substring(url.indexOf("#") + 1);
    const element = document.getElementById(hash);
    element.scrollIntoView();
    autoHide();
  }
  return false;
});

function autoHide() {
  if (timer !== null) {
    clearTimeout(timer);
  }
  timer = setTimeout(function () {
    $(".smart-scroll").removeClass("scrolled-up").addClass("scrolled-down");
  }, 500);
}

if (navigator.userAgent.indexOf("Mac OS X") != -1) {
  $("body").addClass("css-mac");
} else {
  $("body").addClass("css-window");
}

const scrollToFAQ = () => {
  enableScroll();
  $("#plan").show();
  $("#section-seven").show();
  $("#faq").show();
  $("#footer").show();
  $("#dect-box").off();
  $(window).scrollTop($("#faq").offset().top);
  $("#faq-header").click(function () {
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500
    );
    return false;
  });
  $("#section1-root").hide();
  $("#detect-section-2").hide();
  $("#detect-new-section-2").hide();
  $("#services").hide();
  $("#section-4").hide();

  setTimeout(() => {
    $("#detect-frist-content").one("inview", function (event, isInView) {
      if (isInView) {
        autoHide();
        disableScroll();
        scrollableElement.addEventListener("wheel", faqCheckScrollDirection);
      }
    });
  }, 2000);
};
