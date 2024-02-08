function square(numbers){
    const squareNumbers = numbers.map((number) => number * number )
    return squareNumbers;
}

module.exports = {square}