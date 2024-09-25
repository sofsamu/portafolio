document.addEventListener("DOMContentLoaded", function () {
  const topButton = document.querySelector('.top-button');

  window.onscroll = function () {
      if (window.scrollY > 300) { 
          topButton.classList.add('show');
      } else { 
          topButton.classList.remove('show');
      }
  };


  topButton.addEventListener('click', function (event) {
      event.preventDefault();
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});
