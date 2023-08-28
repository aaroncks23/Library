let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read

};

function addBookToLibrary(book) {
  myLibrary.push(book);
};

const showButton = document.getElementById("showDialog");
const addBookDialog = document.getElementById("addBookDialog");
const form = addBookDialog.querySelector("form");
const dialogBookTitle = document.getElementById("book_title");
const dialogBookAuthor = document.getElementById("book_author");
const dialogPages = document.getElementById("book_pages");
const dialogMarkRead = document.getElementById("mark_read");
const confirmBtn = addBookDialog.querySelector("#confirmBtn");

// "Show the dialog" button opens the <dialog> modally
showButton.addEventListener("click", () => {
  addBookDialog.showModal();
});

// Prevent the "confirm" button from the default behavior of submitting the form, and close the dialog with the `close()` method, which triggers the "close" event.
confirmBtn.addEventListener("click", (event) => {
  event.preventDefault(); // We don't want to submit this fake form
  
  addBookToLibrary(new Book(dialogBookTitle.value, dialogBookAuthor.value, dialogPages.value, dialogMarkRead.checked));
  addBookDialog.close();
  const books = document.querySelector('.main');

  const newBook = myLibrary[myLibrary.length-1];

  const div = document.createElement('div');
  div.classList.add('book');
  
  const title = document.createElement('div');
  title.classList.add('title');
  title.textContent = newBook.title;
  div.appendChild(title);
  
  const author = document.createElement('div');
  author.classList.add('author');
  author.textContent = newBook.author;
  div.appendChild(author);
  
  const pagesRead = document.createElement('div');
  pagesRead.classList.add('pages-read');
  
  const pages = document.createElement('div');
  pages.textContent = "Pages: " + newBook.pages;
  pagesRead.appendChild(pages);

  const markRead = document.createElement('div');
  markRead.classList.add('mark-read');
  markRead.textContent = "Mark as Read ";
  
  const markReadCheckbox = document.createElement('input');
  markReadCheckbox.type = "checkbox";
  dialogMarkRead.checked ? markReadCheckbox.checked = true: false;
  markRead.appendChild(markReadCheckbox);
  pagesRead.appendChild(markRead);

  div.appendChild(pagesRead);

  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  removeButton.addEventListener('click', (e) => {
    const bookToRemove = e.target.parentNode;
    const index = Array.from(books.childNodes).indexOf(bookToRemove);
    books.removeChild(bookToRemove);
    myLibrary.splice(index, 1);
  });

    div.appendChild(removeButton);
    
    books.appendChild(div);
    form.reset();
  });
