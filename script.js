const newArr = [
  { title: 'Clean Code A Handbook of Agile Software Craftsmanship', author: 'Robert C. Martin' },
  { title: 'JavaScript The Good Parts', author: 'Douglas Crockford' },
];

if (localStorage.getItem('Library') == null) {
  localStorage.setItem('Library', JSON.stringify(newArr));
}

const library = JSON.parse(localStorage.getItem('Library'));

function updatelocalStorage() {
  localStorage.setItem('Library', JSON.stringify(library));
}

const title = document.getElementById('title');
const author = document.getElementById('author');
const addBtn = document.getElementById('addBtn');

function createNewBooks(arr) {
  let books = '';
  for (let i = 0; i < arr.length; i += 1) {
    books += `
      <div>
          <p>${arr[i].title}</p>
          <p>${arr[i].author}</p>
          <button class="removeBtn" data-index="${i}">Remove</button>
          <hr/>
      </div>
      `;
  }
  return books;
}

function showBooks() {
  const booksContainer = document.querySelector('#booksContainer');
  booksContainer.innerHTML = `
      <div class='bookWrapper'>
      ${createNewBooks(library)}</div>
  `;
}

function addData(Title, Author) {
  const Book = {
    title: Title,
    author: Author,
  };
  library.push(Book);
  updatelocalStorage();
  showBooks();
}

function removeBook(index) {
  library.splice(index, 1);
  updatelocalStorage();
  showBooks();
}

addBtn.addEventListener('click', (e) => {
  e.preventDefault();
  addData(title.value, author.value);

  title.value = '';
  author.value = '';
});

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('removeBtn')) {
    const index = parseInt(event.target.getAttribute('data-index'), 10);
    if (!Number.isNaN(index)) {
      removeBook(index);
    }
  }
});

window.onload = showBooks;