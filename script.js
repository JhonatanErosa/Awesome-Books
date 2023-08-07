const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');
const addBtn = document.getElementById('addBtn');
const bookList = document.getElementById('booksList');
let books = JSON.parse(localStorage.getItem('books'));
function showBooks() {
    bookList.innerHTML = '';
    books.forEach((book, index) => {
        const bookContainer = document.createElement('div');
        bookContainer.innerHTML = `
        <p>${book.title}</p>
        <p>${book.author}</p>
        <button onclick='removeBook(${index})'>Remove</button>
        <hr/>
        `;
        bookList.appendChild(bookContainer);
    });
};