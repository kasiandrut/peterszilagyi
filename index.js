// Yellow scroll (top of the page)
window.onscroll = function() {

  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

};

// Horizontal rule when widt of the screen < 576px
if($(window).width()<576) {
  $(".section-next-photography").after("<hr>");
  $(".section-next-speedway").after("<hr>");
}

// When resizing window hr will stay (need to be removed at first to do not duplicate it)
$(window).resize(function() {
  if($(window).width()<576) {
    $("hr").remove();
    $(".section-next-photography").after("<hr>");
    $(".section-next-speedway").after("<hr>");
  } else {
    $("hr").remove();
  }
});
