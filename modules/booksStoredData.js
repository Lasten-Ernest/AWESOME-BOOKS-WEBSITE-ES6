import checkLocalStorage from './checkLocalStorage.js';
import addBooktoHTML from './displayBooks.js';

const booksStoredData = () => {
  if (new checkLocalStorage('localStorage')) {
    const storageData = JSON.parse(localStorage.getItem('storageBooks'));
    const books = (storageData === null) ? [] : storageData;
    books.forEach((book) => {
      addBooktoHTML(book.title, book.author);
    });
  }

};

export default booksStoredData;