$("#first").one("inview", function (event, isInView) {
  let pixel = 0;
  let lastScrollTop = 0;

  // Event is triggered once the element becomes visible in the browser's viewport, and once when it becomes invisible
  if (isInView) {
    if (pixel === 0) {
      // document.body.style.overflow = "hidden";
    }
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st > lastScrollTop) {
        // downscroll code
        pixel++;
        if (pixel === 20) {
          $("#nprogress-bar").val("25");
          $(".m-progress").css("height", "25%");
          $(".second").addClass("border-change");
          $("#second").addClass("process-content-active");
        }
        if (pixel === 35) {
          $("#nprogress-bar").val("50");
          $(".m-progress").css("height", "50%");
          $(".third").addClass("border-change");
          $("#third").addClass("process-content-active");
        }
        if (pixel === 40) {
          $("#nprogress-bar").val("75");
          $(".m-progress").css("height", "75%");
          $(".fourth").addClass("border-change");
          $("#fourth").addClass("process-content-active");
        }
        if (pixel === 55) {
          $("#nprogress-bar").val("100");
          $(".m-progress").css("height", "100%");
          $(".five").addClass("border-change");
          $("#five").addClass("process-content-active");
        }
      } else {
      }
      lastScrollTop = st;
    });
  }
});

$(".first").click(() => {
  $("#nprogress-bar").val("0");
  $(".m-progress").css("height", "0%");
  $(".second").removeClass("border-change");
  $(".third").removeClass("border-change");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $("#first").nextAll().removeClass("process-content-active");
});
$(".second").click(() => {
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
});
$(".third").click(() => {
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
});
$(".fourth").click(() => {
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
});
$(".five").click(() => {
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
});

// div
$("#first").click(() => {
  $("#nprogress-bar").val("0");
  $(".m-progress").css("height", "0%");
  $(".second").removeClass("border-change");
  $(".third").removeClass("border-change");
  $(".fourth").removeClass("border-change");
  $(".five").removeClass("border-change");
  $("#first").nextAll().removeClass("process-content-active");
});
$("#second").click(() => {
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
});
$("#third").click(() => {
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
});
$("#fourth").click(() => {
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
});
$("#five").click(() => {
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
});

// mobile progress
