document.addEventListener('DOMContentLoaded', function() {
    const selectMeses = document.getElementById('meses');
    const tableLinks = document.querySelectorAll('table a');

    selectMeses.addEventListener('change', function() {
    });

    tableLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            this.style.backgroundColor = '#f0f0f0';
            this.style.color = '#ff4500';
        });

        link.addEventListener('mouseout', function() {
            this.style.backgroundColor = '';
            this.style.color = '';
        });
    });
});
