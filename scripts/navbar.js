window.onscroll = function() {scrollEffect()};

function scrollEffect() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("navbar").style.backgroundColor = "rgba(20, 20, 20, 1)";
  } else {
    document.getElementById("navbar").style.backgroundColor = "rgba(20, 20, 20, .4)";
  }
}