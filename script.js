/*
1. Exploring JavaScript Objects

Objective: The aim of this assignment is to deepen understanding and proficiency in manipulating JavaScript objects,
including creating objects, accessing properties and methods, using constructors, and working with prototypes.

Problem Statement: You are tasked with creating a JavaScript program that simulates a digital library system.
The program should allow users to add new books, search for books by title or author, and display information about the library's collection.

Task 1: Create a class for the Book object with properties for title, author, and pages.

Task 2: Implement a method within the Book object to display book information.
*/

class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
    };

    getInfo = () => {
        console.log(`Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`);
    };
};

const hobbit = new Book("The Hobbit", "J.R.R. Tolkien", 3412)

hobbit.getInfo()

/*
2. Exploring Objects and Math in JavaScript

Objective: The objective of this assignment is to enhance proficiency in working
with JavaScript objects and utilizing the Math class for mathematical operations.

Problem Statement: You are tasked with developing a JavaScript program that simulates a simple banking application.
The program should allow users to create accounts, deposit funds, withdraw funds, and calculate interest based on specified rates.

Task 1: Create a class for the Account object with properties for accountNumber, balance, and owner.

Task 2: Implement methods within the Account object to deposit and withdraw funds.

Task 3: Create a method to calculate compound interest based on the balance and specified interest rate.
Allow users to pass a year parameter to your method that represents the # of years the money has been invested.
The output should be rounded up to the nearest whole number (perhaps using the Math.ceil()). The formula for compound interest is...

A=P(1+nr​)^nt

Where:

A
 is the amount of money accumulated after n years, including interest.
P
 is the principal amount (the initial sum of money).
r
 is the annual interest rate (in decimal form).
n
 is the number of times interest is compounded per year (you can use 1 for this example).
t
 is the number of years the money is invested or borrowed for (this will be your parameter passed into the method).
*/

class Account {
    constructor(accountNumber, balance, owner) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.owner = owner;
    };

    getInfo = () => {
        console.log(`Account Number: ${this.accountNumber}, Balance: $${this.balance}, Owner: ${this.owner}`);
    }

    deposit = (amount) => {
        this.balance += amount;
    }

    withdraw = (amount) => {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds...");
        };
    };

    // Formula in problem is incorrect, should be:
    // A = P(1 + r/n​)^nt
    compInterest = (rate, freq, years) =>{
        this.balance = Math.ceil(this.balance * (1 + rate/freq) ** (freq * years));
    };
};

const acc = new Account(1, 1000, "Andy")

acc.deposit(100)
acc.getInfo()
acc.withdraw(2000)
acc.compInterest(.07, 4, 10)
acc.getInfo()
