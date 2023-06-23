const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

function numberOfBooksRead(library) {
  // Initialize a variable to keep track of the count of read books
  let count = 0;

  // Iterate over each book in the library
  for (let i = 0; i < library.length; i++) {
    // Check if the readingStatus property of the book is true (indicating it has been read)
    if (library[i].readingStatus === true) {
      // Increment the count if the book has been read
      count++;
    }
  }

  // Return the count of read books
  return count;
}

// Do not change the code below

//alert(numberOfBooksRead());
const countOfReadBooks = numberOfBooksRead(library);
console.log(countOfReadBooks);
