const navLinks = document.querySelectorAll('.header_li');
const booksList = document.querySelector('.display_books');
const addPage = document.querySelector('.new_book');
const contactPage = document.querySelector('.contact_details');

const pageNavigation = () => {
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) {
        booksList.classList.remove('hide_div');
        addPage.classList.add('hide_div');
        contactPage.classList.add('hide_div');
        navLinks[0].classList.add('list_link');
        navLinks[1].classList.remove('list_link');
        navLinks[2].classList.remove('list_link');
      } 
      else if (index === 1) {
        booksList.classList.add('hide_div');
        addPage.classList.remove('hide_div');
        contactPage.classList.add('hide_div');
        navLinks[0].classList.remove('list_link');
        navLinks[1].classList.add('list_link');
        navLinks[2].classList.remove('list_link');
      } 
      else {
        booksList.classList.add('hide_div');
        addPage.classList.add('hide_div');
        contactPage.classList.remove('hide_div');
        navLinks[0].classList.remove('list_link');
        navLinks[1].classList.remove('list_link');
        navLinks[2].classList.add('list_link');
      }
    });
  });
};

export default pageNavigation;
