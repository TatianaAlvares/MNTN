if ($(window).width() < 1200) {
  window.onscroll = function() {MinScroller()};
} else {
  window.onscroll = function() {Scroller()};
}

function Scroller() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height);
  document.getElementById("slider").style.marginTop = "calc(" + scrolled + " * 210px";
  if (document.documentElement.scrollTop > 266) {
    document.getElementById("progress_container").classList.add("fixed-pc");
  } else {
    document.getElementById("progress_container").classList.remove("fixed-pc");
  }
}

function MinScroller() {
  document.getElementById("progress_container").classList.add("fixed-pc");
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height);
  document.getElementById("slider").style.marginLeft = "calc(" + scrolled + " * 210px";
}