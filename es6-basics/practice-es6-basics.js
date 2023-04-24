
//Create two arrays of numbers called numbers1 and numbers
////Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
let numbers1 = [ 4, 9, 16]
let numbers = [...numbers1, 25, 36, 49]

console.log("numbers1:", numbers1)
console.log("using spread: ", numbers);
 

//Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square = (number) => {
    return Math.sqrt(number)
};

console.log("Square Function Result:", square(36))
//Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
const squares = numbers.map(Math.sqrt)

console.log ("square array for let numbers:", squares)
//Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
const isEven = (x) => {
    if (x % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

console.log ("isEven Function result:", isEven(36))


//Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
let evenSquares = squares.filter(function(number) {
    return number % 2 === 0;
});

console.log ("evenSquares array results:", evenSquares)


//Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const [firstEvenSquare] = evenSquares
const [, secondEvenSquare] = evenSquares

console.log("const firstEventSqaure:", firstEvenSquare)
console.log("const firstEventSqaure:", secondEvenSquare)
// //Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`${numbers}`)
console.log (`${squares}`)
console.log (`${evenSquares}`)