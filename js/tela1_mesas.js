document.addEventListener("DOMContentLoaded", function () {
    function abrirMesa() {
      var inputNumber = document.getElementById("nova_mesa").value;
      var selectedCell = document.querySelector("td.selected");
  
      if (selectedCell) {
        selectedCell.classList.remove("selected");
      }
  
      var selectedTable = document.querySelector(
        'td:nth-child(' + inputNumber + ')'
      );
  
      if (selectedTable) {
        selectedTable.classList.add("selected");
        alert("Mesa " + inputNumber + " aberta com sucesso!");
      } else {
        alert("Mesa não encontrada. Por favor, insira um número válido.");
      }
    }
  
    var abrirButton = document.querySelector("button");
    abrirButton.addEventListener("click", abrirMesa);
});