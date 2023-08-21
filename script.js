let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
}

const book1 = new Book("title112301238dsdsdsd","author1", 12, true);
const book2 = new Book("title2","author2", 23, false);

function addBookToLibrary(book) {
    myLibrary.push(book);
}
addBookToLibrary(book1);
addBookToLibrary(book2);

const books = document.querySelector('.main');
const fragment = new DocumentFragment();

myLibrary.forEach(book => {
    const div = document.createElement('div');
    div.classList.add('book');
    
    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = book.title;
    div.appendChild(title);
    
    const author = document.createElement('div');
    author.classList.add('author');
    author.textContent = book.author;
    div.appendChild(author);
    
    const pagesRead = document.createElement('div');
    pagesRead.classList.add('pages-read');
    
    const pages = document.createElement('div');
    // pages.classList.add('pages');
    pages.textContent = "Pages: " + book.pages;
    pagesRead.appendChild(pages);

    const markRead = document.createElement('div');
    markRead.classList.add('mark-read');
    markRead.textContent = "Mark as Read ";
    pagesRead.appendChild(markRead);

    div.appendChild(pagesRead);

    fragment.appendChild(div);

});

books.appendChild(fragment);



// 1) addBookToLibrary() -> takes user input and store new book objects in myLibrary array

// 2) write a fn that loops through myLibrary and display each book on page.
// display can be in a table, or a card (or both)
// might help to manually add few books to array to see display

// 3) add "NEW BOOK" button that brings up a form for user input.
// user input -> author, title, number of pages, whether it's been read, anything else.
// form display is up to you. e.g.:
// - form show in a sidebar
// - explore https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog
// using <dialog> tag

// 4) might encounter issue -> submitting form might not do what is expected.
// This might be because submit input tries to send data to a server by default.
// check up on event.preventDefault() https://developer.mozilla.org/en-US/docs/Web/API/Event/preventDefault

// 5) add button on each book display to remove book from library.
// need to associate DOM elements with the actual book objects in some way.
// solution is giving them a data-attribute that corresponds to the index of the library array.

// 6) Add button on each book display to change its read status.
// to facilitate this, you will want to create the function that toggles a book's read status on the Book prototype instance.
// NOTE: not required to add any type of storage now.