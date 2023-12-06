
document.addEventListener('DOMContentLoaded', function() {
    const mainLinks = document.querySelectorAll('main a');

    mainLinks.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.style.backgroundColor = '#f0f0f0';
            link.style.color = '#ff4500';
        });

        link.addEventListener('mouseout', function() {
            link.style.backgroundColor = '';
            link.style.color = '';
        });
    });
});
