# NgJobSearch

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


Create an Angular Project without using Zone.JS
Instead the Developers should be forced to use Custom Change Detection
Sample App Setup to Demonstrate the Above:
Books Component is the Parent Component
BookList is the Child Component
Books Component has a property called Collection which is an Array of Objects where each Object represents a book
Books Component also has a section to add new books to the collection
Book Component passes the Collection Array to “books” Input Property of BookList Component
BookList Component has to display the Book Title, Author and Publication Name in a card style list
Candidate need to try adding new books to the collection of books in two cases:
Child Component (BookList) Change Detection Strategy as Default
Child Component (BookList) Change Detection Strategy as OnPush
Both the above cases need to be made working