
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.botao-quantidade');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const span = this.parentElement.querySelector('span');
            let quantidade = parseInt(span.textContent);

            if (this.textContent === '+') {
                quantidade++;
            } else if (this.textContent === '-') {
                quantidade = quantidade > 0 ? quantidade - 1 : 0;
            }

            span.textContent = quantidade;
        });
    });
});
