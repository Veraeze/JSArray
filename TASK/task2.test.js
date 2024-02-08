const {addToScores} = require("./task2")

test("add 5 points to scores", ()=>{
    let grades = [85, 92, 78, 88, 95];
    let result = addToScores(grades);
    let value = [90, 97, 83, 93, 100];
    expect(result).toEqual(value)
})