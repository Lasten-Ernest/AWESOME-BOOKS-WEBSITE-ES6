import Book from './bookConstructor.js';
import displayBook from './displayBooks.js';

const storageData = JSON.parse(localStorage.getItem('storageBooks'));
const books = (storageData === null) ? [] : storageData;
const addBtn = document.querySelector('.add_book');
const title = document.getElementById('title');
const author = document.getElementById('author');

export default () => {
  addBtn.addEventListener('click', () => {
    if (title.value !== '' && author.value !== '') {
      const newBook = new Book(title.value, author.value);
      books.push(newBook);
      localStorage.setItem('storageBooks', JSON.stringify(books));
      displayBook(title.value, author.value);
      title.value = '';
      author.value = '';
    }
  });
};
