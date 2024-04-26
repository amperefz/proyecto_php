document.addEventListener('DOMContentLoaded', function() {
    const iconos = document.querySelector('.iconos');
    const listadoNavbar = document.querySelector('.listadoNavbar');

    iconos.addEventListener('click', function() {
        listadoNavbar.style.display = (listadoNavbar.style.display === 'block') ? 'none' : 'block';
    });
});