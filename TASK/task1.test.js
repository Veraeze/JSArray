const {highScores} = require("./task1")

test("scores higher than 70", ()=>{
    let testScores = [10, 97, 20, 35, 82, 55, 76, 43, 99, 80];
    let result = highScores(testScores);
    let value = [97, 82, 76, 99, 80];
    expect(result).toEqual(value)
})