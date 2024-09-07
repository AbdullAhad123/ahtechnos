var xp = 0,
  mouseX = 0;
var yp = 0,
  mouseY = 0;
var xpDot = 0,
  mouseX = 0;
var ypDot = 0,
  mouseY = 0;

const cursorFollowerDot = document.querySelector(".cursorFollowerDot");

document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});

setInterval(function () {
  xpDot += (mouseX - xpDot) / 25;
  ypDot += (mouseY - ypDot) / 25;

  cursorFollowerDot.style.left = xpDot + "px";
  cursorFollowerDot.style.top = ypDot + "px";
}, 1);

// Toggle hiddenCards visibility and change button text
$("#seeMoreServices").click(function () {
  $(".hiddenCards").fadeToggle();

  if ($(this).text() === "Load more") {
    $(this).text("Load less");
  } else {
    $(this).text("Load more");
  }
});
