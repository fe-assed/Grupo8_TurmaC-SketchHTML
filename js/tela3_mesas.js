document.addEventListener("DOMContentLoaded", function () {
    var paymentMethods = document.getElementById("paymentMethods");
  
    function selectPaymentMethod(event) {
      if (event.target.tagName === "A" && event.target.dataset.method) {
        document.querySelectorAll("#paymentMethods a").forEach(function (method) {
          method.classList.remove("selected");
        });
  
        event.target.classList.add("selected");
      }
    }
  
    paymentMethods.addEventListener("click", selectPaymentMethod);
  });