// ES5 Map Callback
// (arr) => {
//     return arr.map(val => val * 2);
// }

// answer
const double = arr => arr.map(val => val * 2);

//Refactor the following function to use arrow functions
(numbers) =>{
    var squares = numbers.map(num=>num **2);
    var even = squares.filter((square)=> square%2===0);
    return even;
}

const squareAndFindEvens = numbers.map(num=>num**2).filter(square => square%2 === 0)

