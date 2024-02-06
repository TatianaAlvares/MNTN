
// When the user scrolls the page, execute myFunction 
window.onscroll = function() {Scroller()};

function Scroller() {
  var winScroll = document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height);
  if (document.documentElement.scrollWidth < 1199) {
    document.getElementById("slider").style.marginLeft = "calc(" + scrolled + " * 210px";
  }
  else {
    document.getElementById("slider").style.marginTop = "calc(" + scrolled + " * 210px";
  }
  if (document.documentElement.scrollTop > 266) {
    document.getElementById("progress_container").classList.add("fixed-pc");
  } else {
    document.getElementById("progress_container").classList.remove("fixed-pc");
  }
}