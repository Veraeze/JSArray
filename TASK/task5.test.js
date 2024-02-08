const {afternoonClasses} = require("./task5")

test("afternoon classes", ()=>{
    let classes = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
    let result = afternoonClasses(classes);
    let value = ["1:00PM", "3:00PM", "5:00PM"];
    expect(result).toEqual(value)
})

