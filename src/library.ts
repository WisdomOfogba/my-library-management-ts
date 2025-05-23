// Simple Library Management System
// Created by Student
// Assignment: Library Management System using OOP

class Book {
  id: number;
  title: string;
  author: string;
  isAvailable: boolean;

  constructor(id: number, title: string, author: string) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.isAvailable = true;
  }

  borrow(): boolean {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`You have borrowed "${this.title}" by ${this.author}.`);
      return true;
    } else {
      console.log(`Sorry, "${this.title}" is currently unavailable.`);
      return false;
    }
  }

  returnBook(): void {
    this.isAvailable = true;
    console.log(`Thank you for returning "${this.title}".`);
  }
}

class Member {
  id: number;
  name: string;
  borrowedBooks: Book[];

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.borrowedBooks = [];
  }

  borrowBook(book: Book): void {
    if (book.borrow()) {
      this.borrowedBooks.push(book);
    }
  }

  returnBook(bookId: number): void {
    // Find index manually instead of findIndex()
    let index = -1;
    for (let i = 0; i < this.borrowedBooks.length; i++) {
      if (this.borrowedBooks[i].id === bookId) {
        index = i;
        break;
      }
    }

    if (index !== -1) {
      this.borrowedBooks[index].returnBook();
      this.borrowedBooks.splice(index, 1);
    } else {
      console.log(`You don't have this book borrowed.`);
    }
  }
}

class Library {
  books: Book[];
  members: Member[];

  constructor() {
    this.books = [];
    this.members = [];
  }

  addBook(book: Book): void {
    this.books.push(book);
    console.log(`Added "${book.title}" to the library.`);
  }

  registerMember(member: Member): void {
    this.members.push(member);
    console.log(`Welcome ${member.name} to the library!`);
  }

  listAvailableBooks(): void {
    console.log("\nAvailable Books:");
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].isAvailable) {
        console.log(`- ${this.books[i].title} by ${this.books[i].author}`);
      }
    }
  }

  // Optional: find book by title without .find()
  findBookByTitle(title: string): Book | undefined {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
        return this.books[i];
      }
    }
    return undefined;
  }

  // Optional: find member by id without .find()
  findMemberById(memberId: number): Member | undefined {
    for (let i = 0; i < this.members.length; i++) {
      if (this.members[i].id === memberId) {
        return this.members[i];
      }
    }
    return undefined;
  }
}

// Example usage:
const myLibrary = new Library();

const book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald");
const book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee");

myLibrary.addBook(book1);
myLibrary.addBook(book2);

const student1 = new Member(101, "Jane Doe");
myLibrary.registerMember(student1);

myLibrary.listAvailableBooks();

student1.borrowBook(book1);
myLibrary.listAvailableBooks();

student1.returnBook(1);
myLibrary.listAvailableBooks();
