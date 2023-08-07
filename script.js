const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('booksList');
const books = JSON.parse(localStorage.getItem('books'));

function showBooks() {
  bookList.innerHTML = '';
  books.forEach((book, index) => {
    const bookContainer = document.createElement('div');
    bookContainer.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button class='removeButton' data-index='${index}'>Remove</button>
        <hr/>
        `;
    bookList.appendChild(bookContainer);
  });
}

function addBook() {
  const title = titleInput.value;
  const author = authorInput.value;
  if (title && author) {
    books.push({ title, author });
    localStorage.setItem('books', JSON.stringify(books));
    showBooks();
    titleInput.value = '';
    authorInput.value = '';
  }
}

function removeBook(index) {
  books.splice(index, 1);
  localStorage.setItem('books', JSON.stringify(books));
  showBooks();
}

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeButton')) {
    const index = parseInt(event.target.dataset.index, 10);
    removeBook(index);
  }
});

addBtn.addEventListener('click', addBook);

showBooks();
