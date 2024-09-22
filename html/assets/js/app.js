const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 10) + "px; left: " + (e.pageX - 10) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});

// Toggle hiddenCards visibility and change button text
$("#seeMoreServices").click(function () {
  $(".hiddenCards").fadeToggle();
  const text = $(this).find('span');

  if (text.text() === "Load more") {
    text.text("Load less");
  } else {
    text.text("Load more");
  }
});
