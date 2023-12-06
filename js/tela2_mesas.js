document.addEventListener("DOMContentLoaded", function () {
    var closeButton = document.querySelector("a[href='tela3_mesas.html']");
  
    function changeButtonColor() {
      closeButton.style.backgroundColor = "#FF6347"; // Light Coral, you can change this color
    }
  
    function resetButtonColor() {
      closeButton.style.backgroundColor = ""; // Reset to default color
    }
  
    closeButton.addEventListener("mouseover", changeButtonColor);
  
    closeButton.addEventListener("mouseout", resetButtonColor);
});