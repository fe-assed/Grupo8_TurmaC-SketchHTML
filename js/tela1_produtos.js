document.addEventListener("DOMContentLoaded", function () {
    function showProductInfo(event) {
      if (event.target.tagName === "TD" && event.target.parentElement.rowIndex !== 0) {
        var clickedRow = event.target.parentElement;
  
        var productName = clickedRow.cells[0].textContent;
        var productCost = parseFloat(clickedRow.cells[1].textContent.replace("R$", "").replace(",", "."));
        var productQuantity = parseInt(clickedRow.cells[2].textContent);
  
        alert(
          "Produto: " + productName +
          "\nCusto Unitário: R$" + productCost.toFixed(2) +
          "\nQuantidade de Itens: " + productQuantity
        );
  
        var userQuantity = prompt("Quantos itens deseja comprar?");
        userQuantity = parseInt(userQuantity);
  
        if (!isNaN(userQuantity) && userQuantity >= 0) {
          var totalCost = userQuantity * productCost;
          alert("Custo total para " + userQuantity + " itens: R$" + totalCost.toFixed(2));
        } else {
          alert("Quantidade inválida. Tente novamente.");
        }
      }
    }
  
    var productsTable = document.querySelector("table");
    productsTable.addEventListener("click", showProductInfo);
});