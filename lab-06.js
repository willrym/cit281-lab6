class Book {
    constructor(title, author, pubDate, isbn) {
      this.title = title;
      this.author = author;
      this.pubDate = pubDate;
      this.isbn = isbn;
    }
  }

  class Library {
    constructor(name) {
      this._name = name;
      this._books = [];
    }
    get books() {
      // Return copy of books
      return JSON.parse(JSON.stringify(this._books));
    }
    get count() {
      return this._books.length;
    }
    addBook(book = {}) {
      const { title = "", author = "", pubDate = "", isbn = "" } = book;
      if (title.length > 0 && author.length > 0) {
        const newBook = { title, author, pubDate, isbn };
        this._books.push(newBook);
      }
    }
    listBooks() {
      for (const book of this._books) {
        const {title, author, pubDate, isbn} = book;
        console.log(`Title: ${title}, Author: ${author}, PubDate: ${pubDate}, ISBN: ${isbn}`)
      }
    }
    deleteBook(isbn) {
      // 1) find the book to remove at isbn from "this._books"
      // a) loop over all books
      // b) filter
      // c) move to step 2 once condtiion has been met
      // 2) remove the book from "this._books"

      // 1) intitialize some varibale to null (or zero)
      // 2) iterate over collection/list/array of objects
      // 3) filter these objects
      // 4) update the variables in (1)
      // 4*) (optionally) break out of the iteration early
      // 5) variable in (1) now good to go

      let indexOfBookToRemove = null; // step 1
      for (let index = 0; index < this._books.length; index++) { // step 2
        let currentBook = this._books[index];
        if (currentBook.isbn == isbn) { // step 3
            indexOfBookToRemove = index; // step 4
            break; // step 4*
        }
      }
      // Move on and use indexOfBookToRemove in the subsequent removal process
      this._books.splice(indexOfBookToRemove, 1);
    }
  }
// Create Book
const myBook = new Book(title="The Infinite Game", author="Simon Sinek", pubDate="10/25/2018", isbn="74273492734");
const atomicHabits = new Book("Atomic Habits", "James Clear", "10/16/2018", "758095739857");
const otherBook = new Book("DaVinci Code", "Dan Brown", "03/18/2003", "7849274");

const uoLibrary = new Library("Knight Library");

uoLibrary.addBook(myBook);
uoLibrary.addBook(atomicHabits);
uoLibrary.addBook(new Book("The Bible", "Unknown", "Unknown", "472984724987"));
uoLibrary.addBook(otherBook);
// uoLibrary.listBooks();

console.log("Deleting Book");
uoLibrary.deleteBook("74273492734");
uoLibrary.listBooks();
/* console.log(myBook);
console.log(atomicHabits); */



