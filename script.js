document.addEventListener('DOMContentLoaded', function () {
    var button = document.getElementById('MenuDesplegable');
    var dropdown = document.getElementById('dropdownMenu');
  
    button.addEventListener('click', function () {
      dropdown.style.display = (dropdown.style.display === 'block') ? 'none' : 'block';
    });
  
    // Cerrar el menú si se hace clic fuera de él
    window.addEventListener('click', function (event) {
      if (event.target !== button && event.target.parentNode !== dropdown) {
        dropdown.style.display = 'none';
      }
    });
  });
  