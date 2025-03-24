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

function Movie(title, director, duration) { 
    this.title = title;
    this.director = director;
    this.duration = duration;

    this.printSummary = function() {
        console.log(`${this.title} directed by ${this.director} lasts for ${this.duration} minutes.`);
    };
}

const myMovie = new Movie('Inception', 'Christopher Nolan', 148);
myMovie.printSummary();  