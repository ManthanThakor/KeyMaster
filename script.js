// Open modal when Ctrl + / is pressed
document.addEventListener("keydown", function (event) {
  if (event.ctrlKey && event.key === "/") {
    document.getElementById("shortcutModal").style.display = "flex";
  }
});

// Close the modal when "Close" button is clicked
document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("shortcutModal").style.display = "none";
});
