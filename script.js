document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.show-more');
    
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const projectDescription = this.nextElementSibling;
            if (projectDescription.style.display === 'none' || projectDescription.style.display === '') {
                projectDescription.style.display = 'block';
                this.textContent = 'Ver menos';
            } else {
                projectDescription.style.display = 'none';
                this.textContent = 'Ver más';
            }
        });
    });
});
