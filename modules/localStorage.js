import testLocalStorage from './testLocalStorage.js';
import addBooktoHTML from './addHtmlContent.js';

const localStorage = () => {
  if (new testLocalStorage('localStorage')) {
    const dataFromStorage = JSON.parse(localStorage.getItem('storageBooks'));
    const books = (dataFromStorage === null) ? [] : dataFromStorage;
    books.forEach((book) => {
      addBooktoHTML(book.title, book.author);
    });
  }
};

export default localStorage;