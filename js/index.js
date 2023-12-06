document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.menu a');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            link.classList.add('hovered'); 
        });

        link.addEventListener('mouseout', function() {
            link.classList.remove('hovered');
        });
    });
});

