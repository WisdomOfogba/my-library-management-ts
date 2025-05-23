// Simple Library Management System
// Created by Student
// Assignment: Library Management System using OOP
var Book = /** @class */ (function () {
    function Book(id, title, author) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.isAvailable = true;
    }
    Book.prototype.borrow = function () {
        if (this.isAvailable) {
            this.isAvailable = false;
            console.log("You have borrowed \"".concat(this.title, "\" by ").concat(this.author, "."));
            return true;
        }
        else {
            console.log("Sorry, \"".concat(this.title, "\" is currently unavailable."));
            return false;
        }
    };
    Book.prototype.returnBook = function () {
        this.isAvailable = true;
        console.log("Thank you for returning \"".concat(this.title, "\"."));
    };
    return Book;
}());
var Member = /** @class */ (function () {
    function Member(id, name) {
        this.id = id;
        this.name = name;
        this.borrowedBooks = [];
    }
    Member.prototype.borrowBook = function (book) {
        if (book.borrow()) {
            this.borrowedBooks.push(book);
        }
    };
    Member.prototype.returnBook = function (bookId) {
        // Find index manually instead of findIndex()
        var index = -1;
        for (var i = 0; i < this.borrowedBooks.length; i++) {
            if (this.borrowedBooks[i].id === bookId) {
                index = i;
                break;
            }
        }
        if (index !== -1) {
            this.borrowedBooks[index].returnBook();
            this.borrowedBooks.splice(index, 1);
        }
        else {
            console.log("You don't have this book borrowed.");
        }
    };
    return Member;
}());
var Library = /** @class */ (function () {
    function Library() {
        this.books = [];
        this.members = [];
    }
    Library.prototype.addBook = function (book) {
        this.books.push(book);
        console.log("Added \"".concat(book.title, "\" to the library."));
    };
    Library.prototype.registerMember = function (member) {
        this.members.push(member);
        console.log("Welcome ".concat(member.name, " to the library!"));
    };
    Library.prototype.listAvailableBooks = function () {
        console.log("\nAvailable Books:");
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].isAvailable) {
                console.log("- ".concat(this.books[i].title, " by ").concat(this.books[i].author));
            }
        }
    };
    // Optional: find book by title without .find()
    Library.prototype.findBookByTitle = function (title) {
        for (var i = 0; i < this.books.length; i++) {
            if (this.books[i].title.toLowerCase() === title.toLowerCase()) {
                return this.books[i];
            }
        }
        return undefined;
    };
    // Optional: find member by id without .find()
    Library.prototype.findMemberById = function (memberId) {
        for (var i = 0; i < this.members.length; i++) {
            if (this.members[i].id === memberId) {
                return this.members[i];
            }
        }
        return undefined;
    };
    return Library;
}());
// Example usage:
var myLibrary = new Library();
var book1 = new Book(1, "The Great Gatsby", "F. Scott Fitzgerald");
var book2 = new Book(2, "To Kill a Mockingbird", "Harper Lee");
myLibrary.addBook(book1);
myLibrary.addBook(book2);
var student1 = new Member(101, "Jane Doe");
myLibrary.registerMember(student1);
myLibrary.listAvailableBooks();
student1.borrowBook(book1);
myLibrary.listAvailableBooks();
student1.returnBook(1);
myLibrary.listAvailableBooks();
