function toggleH1Colour() {
  const title = document.querySelector("h1");
  //alert(title.style.color.toString());
  title.style.color === "black" || title.style.color.length === 0
    ? (title.style.color = "blue")
    : (title.style.color = "black");
}

function searchBtnClick() {
  const hiddenImg = document.getElementById("hiddenMouse");
  hiddenImg.style.display === "block"
    ? (hiddenImg.style.display = "none")
    : (hiddenImg.style.display = "block");
}
