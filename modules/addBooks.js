import Book from './bookConstructor.js';
import displayBooks from './displayBooks.js';

const storageData = JSON.parse(localStorage.getItem('storageBooks'));
const books = (storageData === null) ? [] : storageData;
const add_new_btn = document.querySelector('.add_new_btn');
const title = document.getElementById('book_title');
const author = document.getElementById('book_author');

export default () => {
  add_new_btn.addEventListener('click', () => {
    if (title.value !== '' && author.value !== '') {
      const newBook = new Book(title.value, author.value);
      books.push(newBook);
      localStorage.setItem('storageBooks', JSON.stringify(books));
      displayBooks(title.value, author.value);
      title.value = '';
      author.value = '';
    }
  });
};
