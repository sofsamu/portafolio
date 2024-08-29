document.getElementById('toggle').addEventListener('click', function() {
    const aboutContent = document.getElementById('about-content');
    
    if (aboutContent.classList.contains('show')) {
      aboutContent.classList.remove('show');
      this.textContent = 'Mostrar más';
    } else {
      aboutContent.classList.add('show');
      this.textContent = 'Ocultar';
    }
  });
  
  // Inicializa el botón con el texto adecuado
  document.getElementById('toggle').textContent = 'Mostrar más';

  window.onload = function() {
    const modal = document.getElementById('construction-modal');
    const closeModal = document.getElementById('close-modal');
  
    // Muestra el modal cuando se carga la página
    modal.style.display = 'flex';
  
    // Cierra el modal cuando se hace clic en la "X"
    closeModal.onclick = function() {
      modal.style.display = 'none';
    };
  
    // Cierra el modal si se hace clic fuera del contenido del modal
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = 'none';
      }
    };
  };
  