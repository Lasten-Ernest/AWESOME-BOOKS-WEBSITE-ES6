const booksContainer = document.getElementById('books-container');

const displayBook = (title, author) => {
  const bookHTML = document.createElement('div');
  bookHTML.classList.add('book');
  bookHTML.innerHTML = `
        <p class="title">"${title}" By</p>
        <p class="author">${author}</p>
        <button class="remove_button">remove</button>
    `;
  booksContainer.appendChild(bookHTML);

  let bookNodes = Array.from(booksContainer.children);
  if (bookNodes.indexOf(bookHTML) % 2 === 0) {
    bookHTML.classList.add('nthChildCol');
  }

  bookHTML.children[2].addEventListener('click', () => {
    const newBooks = JSON.parse(localStorage.getItem('storageBooks'));
    bookNodes = Array.from(booksContainer.children);
    newBooks.splice(bookNodes.indexOf(bookHTML), 1);
    localStorage.setItem('storageBooks', JSON.stringify(newBooks));
    booksContainer.removeChild(bookHTML);
  });
};
export default displayBook;