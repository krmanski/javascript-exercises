const getTheTitles = function(bookArray) {
    const allBooks = [];
    for (let i = 0; i <= bookArray.length; i++){
        allBooks.push((bookArray[i]).title);
        
    }
    console.log(allBooks);
    return allBooks;
};



// Do not edit below this line
module.exports = getTheTitles;
