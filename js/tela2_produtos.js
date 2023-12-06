document.addEventListener("DOMContentLoaded", function () {
    var returnLink = document.querySelector("a[href='tela1_produtos.html']");
  
    function showAlert() {
      alert("Você está retornando aos produtos!");
    }
  
    returnLink.addEventListener("click", showAlert);
});