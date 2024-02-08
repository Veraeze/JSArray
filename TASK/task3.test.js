const {square} = require("./task3")

test("square of numbers", ()=>{
    let numbers = [2, 4, 6, 8, 10];
    let result = square(numbers);
    let value = [4, 16, 36, 64, 100];
    expect(result).toEqual(value)
})