

//Console log the result and run the function on the following numbers:
//- 2 to the power of 5
//- 7 to the power of 3
//- 12 to the power of 2,
//- 9 to the power of 4,


//Write a recursive function that takes in two parameters, one for the base number, and one for the exponent number, i.e. how many times it will multiply the first number.
function exponential(x, n) {
//Since it is recursive, you must call the function within the function and you must also have a base condition to avoid an infinite loop.
    if (n===0) return 1;
    else return  x * exponential(x, n-1)
    }

console.log (exponential (2,5))
console.log (exponential (7,3))
console.log (exponential (12,2))
console.log (exponential (9,4))