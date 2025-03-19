function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;

    this.printSummary = function() {
        console.log(`${this.title} by ${this.author} has ${this.pages} pages.`);
    };
}

const myBook = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 218);
myBook.printSummary();  

};
function Movie(title, director, duration){ 
    this.title=title;
    this.director=director;
    this.director=director;
    this.printSummary = function() {
        console.log('Inspection', '')
    }
}