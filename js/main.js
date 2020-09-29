$(window).scroll(function () {
  var height = $(window).scrollTop();
  if (height > 0) {
    $(".fixed-top").addClass("top-of-page");
  } else {
    $(".fixed-top").removeClass("top-of-page");
  }
});
$(function () {
  $("[data-trigger]").on("click", function () {
    var targeet_id = $(this).attr("data-trigger");
    $(targeet_id).toggleClass("show");
    $("body").toggleClass("offcanvas-active");
  });

  $(".btn-close").click(function (e) {
    $(".navbar-collapse").removeClass("show");
    $("body").removeClass("offcanvas-active");
  });
});
var searchbar = document.querySelector(".search-bar");
function invis() {
  if (searchbar.classList.contains("hide")) {
    searchbar.classList.remove("hide");
  } else {
    searchbar.classList.add("hide");
  }
}
$(function () {
  $(".toggles button").click(function () {
    var get_id = this.id;
    var get_current = $(".project." + get_id);
    $(".project").not(get_current).hide(500);
    get_current.show(500);
  });
  $("#all").click(function () {
    $(".project").show(500);
  });
});
