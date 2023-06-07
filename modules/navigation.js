const navLinks = document.querySelectorAll('.links');
const listPage = document.querySelector('.list');
const addPage = document.querySelector('.addBooks');
const contactPage = document.querySelector('.contact_details');

const navigation = () => {
  navLinks.forEach((link, index) => {
    link.addEventListener('click', () => {
      if (index === 0) {
        listPage.classList.remove('hide_div');
        addPage.classList.add('hide_div');
        contactPage.classList.add('hide_div');
        navLinks[0].classList.add('nav_color');
        navLinks[1].classList.remove('nav_color');
        navLinks[2].classList.remove('nav_color');
      } else if (index === 1) {
        listPage.classList.add('hide_div');
        addPage.classList.remove('hide_div');
        contactPage.classList.add('hide_div');
        navLinks[0].classList.remove('nav_color');
        navLinks[1].classList.add('nav_color');
        navLinks[2].classList.remove('nav_color');
      } else {
        listPage.classList.add('hide_div');
        addPage.classList.add('hide_div');
        contactPage.classList.remove('hide_div');
        navLinks[0].classList.remove('nav_color');
        navLinks[1].classList.remove('nav_color');
        navLinks[2].classList.add('nav_color');
      }
    });
  });
};

export default navigation;
