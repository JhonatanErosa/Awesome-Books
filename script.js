class Library {
  constructor() {
    this.books = this.getBooksFromLocalStorage() || this.getDefaultBooks();
  }
  getBooksFromLocalStorage() {
    return JSON.parse(localStorage.getItem("Library"));
  }
  getDefaultBooks() {
    return [
      {
        title: "Clean Code A Handbook of Agile Software Craftsmanship",
        author: "Robert C. Martin",
      },
      { title: "JavaScript The Good Parts", author: "Douglas Crockford" },
    ];
  }
  initializeLocalStorage() {
    const storedData = this.getBooksFromLocalStorage();
    if (storedData === null) {
      localStorage.setItem("Library", JSON.stringify(this.getDefaultBooks()));
    }
  }
  updateLocalStorage() {
    localStorage.setItem("Library", JSON.stringify(this.books));
  }
  showBooks() {
    const booksContainer = document.querySelector("#booksContainer");
    booksContainer.innerHTML = "";
    for (let i = 0; i < this.books.length; i += 1) {
      const book = this.books[i];
      const bookWrapper = document.createElement("div");
      bookWrapper.classList.add("bookContent");
      const bookInfo = document.createElement("div");
      bookInfo.classList.add("bookInfo");
      const bookTitle = document.createElement("p");
      bookTitle.classList.add("bookTitle");
      bookTitle.textContent = `${book.title}`;
      const by = document.createElement("p");
      by.classList.add("by");
      by.textContent = "by";
      const bookAuthor = document.createElement("p");
      bookAuthor.classList.add("bookAuthor");
      bookAuthor.textContent = `${book.author}`;
      const buttonContainer = document.createElement("div");
      buttonContainer.classList.add("buttonContainer");
      const removeBtn = document.createElement("button");
      removeBtn.textContent = "Remove";
      removeBtn.classList.add("removeBtn");
      removeBtn.dataset.index = i;
      bookInfo.appendChild(bookTitle);
      bookInfo.appendChild(by);
      bookInfo.appendChild(bookAuthor);
      buttonContainer.appendChild(removeBtn);
      bookWrapper.appendChild(bookInfo);
      bookWrapper.appendChild(buttonContainer);
      booksContainer.appendChild(bookWrapper);
      removeBtn.addEventListener("click", () => this.removeBook(i));
    }
  }

  addData(title, author) {
    const newBook = {
      title: title,
      author: author,
    };
    this.books.push(newBook);
    this.updateLocalStorage();
    this.showBooks();
  }
  removeBook(index) {
    this.books.splice(index, 1);
    this.updateLocalStorage();
    this.showBooks();
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const booksCollection = new Library();
  booksCollection.initializeLocalStorage();
  const addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const titleInput = document.getElementById("title");
    const authorInput = document.getElementById("author");
    booksCollection.addData(titleInput.value, authorInput.value);
    titleInput.value = "";
    authorInput.value = "";
  });
  booksCollection.showBooks();
});
