


const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {

    const menu = dropdown.querySelector('.dropdown-menu');

    const movieLink = dropdown.querySelector('ul > li > a');

    
    movieLink.addEventListener('click', (event) => {
      event.preventDefault();
      menu.classList.toggle('show');
    });
  });







