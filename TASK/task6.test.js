const {totalAmount} = require("./task6")

test("afternoon classes", ()=>{
    let expenses = {
    "groceries": 150,
    "dining out": 100,
    "transportation": 50,
    "entertainment": 80
}
    let result = totalAmount(expenses);
    let value = 380;
    expect(result).toEqual(value)
})






