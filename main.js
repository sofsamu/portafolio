document.getElementById('about-toggle').addEventListener('click', function() {
  var content = document.getElementById('about-content');
  content.classList.toggle('open');
  this.textContent = content.classList.contains('open') ? 'Ver menos' : 'Ver más';
});