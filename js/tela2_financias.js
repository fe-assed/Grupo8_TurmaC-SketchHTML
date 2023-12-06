document.addEventListener("DOMContentLoaded", function () {
    function calculateTotalProfit() {
      var rows = document.querySelectorAll("table tr:not(:first-child)");
  
      rows.forEach(function (row) {
        var sales = parseInt(row.cells[1].textContent);
        var unitProfit = parseFloat(row.cells[2].textContent.replace("R$", "").replace(",", "."));
  
        var totalProfit = sales * unitProfit;
  
        var totalProfitCell = document.createElement("td");
        totalProfitCell.textContent = "R$" + totalProfit.toFixed(2);
        row.appendChild(totalProfitCell);
      });
    }
  
    calculateTotalProfit();
});