let count = 0;
let delay = 100;
let timeout = null;
let pixel = 0;

var scrollableElement = document.body; //document.getElementById('scrollableElement');
// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener(
    "test",
    null,
    Object.defineProperty({}, "passive", {
      get: function () {
        supportsPassive = true;
      },
    })
  );
} catch (e) {}

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent =
  "onwheel" in document.createElement("div") ? "wheel" : "mousewheel";

// call this to Disable
function disableScroll() {
  window.addEventListener("DOMMouseScroll", preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener("touchmove", preventDefault, wheelOpt); // mobile
  window.addEventListener("keydown", preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener("DOMMouseScroll", preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener("touchmove", preventDefault, wheelOpt);
  window.removeEventListener("keydown", preventDefaultForScrollKeys, false);
}

function checkScrollDirectionIsUp(event) {
  if (event.wheelDelta) {
    return event.wheelDelta > 0;
  }
  return event.deltaY < 0;
}
function checkScrollDirection(event) {
  if (count === 0) {
    count++;
  }
  if (checkScrollDirectionIsUp(event)) {
    // scroll up
    $(window).bind("wheel", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        count++;
      }, delay);
    });
  } else {
    // scroll down
    $(window).bind("wheel", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        count++;
      }, delay);
    });
  }
  if (count === 1) {
    $("#nprogress-bar").val("25");
    $(".m-progress").css("height", "25%");
    $(".third").removeClass("border-change");
    $(".fourth").removeClass("border-change");
    $(".five").removeClass("border-change");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $("#second").prevAll().addClass("process-content-active");
    $("#second").nextAll().removeClass("process-content-active");
    $("#second").addClass("process-content-active");
  }
  if (count === 2) {
    $("#nprogress-bar").val("50");
    $(".m-progress").css("height", "50%");
    $(".fourth").removeClass("border-change");
    $(".five").removeClass("border-change");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $(".third").addClass("border-change");
    $("#third").prevAll().addClass("process-content-active");
    $("#third").nextAll().removeClass("process-content-active");
    $("#third").addClass("process-content-active");
  }
  if (count === 3) {
    $("#nprogress-bar").val("75");
    $(".m-progress").css("height", "75%");
    $(".five").removeClass("border-change");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $(".third").addClass("border-change");
    $(".fourth").addClass("border-change");
    $("#fourth").prevAll().addClass("process-content-active");
    $("#fourth").nextAll().removeClass("process-content-active");
    $("#fourth").addClass("process-content-active");
  }
  if (count === 4) {
    $("#nprogress-bar").val("100");
    $(".m-progress").css("height", "100%");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $(".third").addClass("border-change");
    $(".fourth").addClass("border-change");
    $(".five").addClass("border-change");
    $("#five").prevAll().addClass("process-content-active");
    $("#five").nextAll().removeClass("process-content-active");
    $("#five").addClass("process-content-active");
  }
  if (count === 5) {
    enableScroll();
    $("#plan").show();
    $("#section-seven").show();
    $("#faq").show();
    $("#footer").show();
  }
}
function faqCheckScrollDirection(event) {
  if (count === 0) {
    count++;
  }
  if (checkScrollDirectionIsUp(event)) {
    // scroll up
    $(window).bind("wheel", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        count++;
      }, delay);
    });
  } else {
    // scroll down
    $(window).bind("wheel", function () {
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        count++;
      }, delay);
    });
  }
  if (count === 1) {
    $("#nprogress-bar").val("25");
    $(".m-progress").css("height", "25%");
    $(".third").removeClass("border-change");
    $(".fourth").removeClass("border-change");
    $(".five").removeClass("border-change");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $("#second").prevAll().addClass("process-content-active");
    $("#second").nextAll().removeClass("process-content-active");
    $("#second").addClass("process-content-active");
  }
  if (count === 2) {
    $("#nprogress-bar").val("50");
    $(".m-progress").css("height", "50%");
    $(".fourth").removeClass("border-change");
    $(".five").removeClass("border-change");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $(".third").addClass("border-change");
    $("#third").prevAll().addClass("process-content-active");
    $("#third").nextAll().removeClass("process-content-active");
    $("#third").addClass("process-content-active");
  }
  if (count === 3) {
    $("#nprogress-bar").val("75");
    $(".m-progress").css("height", "75%");
    $(".five").removeClass("border-change");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $(".third").addClass("border-change");
    $(".fourth").addClass("border-change");
    $("#fourth").prevAll().addClass("process-content-active");
    $("#fourth").nextAll().removeClass("process-content-active");
    $("#fourth").addClass("process-content-active");
  }
  if (count === 4) {
    $("#nprogress-bar").val("100");
    $(".m-progress").css("height", "100%");
    $(".first").addClass("border-change");
    $(".second").addClass("border-change");
    $(".third").addClass("border-change");
    $(".fourth").addClass("border-change");
    $(".five").addClass("border-change");
    $("#five").prevAll().addClass("process-content-active");
    $("#five").nextAll().removeClass("process-content-active");
    $("#five").addClass("process-content-active");
    $("#detect-new-section-2").show();
  }
  if (count === 5) {
    enableScroll();
  }
  if (count === 6) {
    $("#section-4").show();
  }
  if (count === 7) {
    $("#services").show();
  }
  if (count === 8) {
    $("#detect-section-2").show();
  }
  if (count === 9) {
    $("#section1-root").show();
  }
}

$("#dect-box").one("inview", function (event, isInView) {
  if (isInView) {
    disableScroll();
    scrollableElement.addEventListener("wheel", checkScrollDirection);
  }
});

$(".mobile-third").one("inview", function (event, isInView) {
  let lastScrollTop = 0;
  if (isInView) {
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // downscroll code
        pixel++;
        if (pixel === 5) {
          $("#nprogress-bar").val("25");
          $(".m-progress").css("height", "25%");
          $(".third").removeClass("border-change");
          $(".fourth").removeClass("border-change");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $("#second").prevAll().addClass("process-content-active");
          $("#second").nextAll().removeClass("process-content-active");
          $("#second").addClass("process-content-active");
        }
        if (pixel === 30) {
          $("#nprogress-bar").val("50");
          $(".m-progress").css("height", "50%");
          $(".fourth").removeClass("border-change");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $("#third").prevAll().addClass("process-content-active");
          $("#third").nextAll().removeClass("process-content-active");
          $("#third").addClass("process-content-active");
        }
        if (pixel === 60) {
          $("#nprogress-bar").val("75");
          $(".m-progress").css("height", "75%");
          $(".five").removeClass("border-change");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $(".fourth").addClass("border-change");
          $("#fourth").prevAll().addClass("process-content-active");
          $("#fourth").nextAll().removeClass("process-content-active");
          $("#fourth").addClass("process-content-active");
        }
        if (pixel === 90) {
          $("#nprogress-bar").val("100");
          $(".m-progress").css("height", "100%");
          $(".first").addClass("border-change");
          $(".second").addClass("border-change");
          $(".third").addClass("border-change");
          $(".fourth").addClass("border-change");
          $(".five").addClass("border-change");
          $("#five").prevAll().addClass("process-content-active");
          $("#five").nextAll().removeClass("process-content-active");
          $("#five").addClass("process-content-active");
        }
      }
      lastScrollTop = st;
    });
  }
});
