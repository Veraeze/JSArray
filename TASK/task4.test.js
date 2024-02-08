const {keyValues} = require("./task4")

test("key value objects", ()=>{
    let members = ["Emily", "Jack", "Sophia", "Daniel"];
    let books = ["how to train", "flowers", "sleep away", "dietel"];
    let result = keyValues(members, books);
    let value = [
        { Emily: 'how to train' },
        { Jack: 'flowers' },
        { Sophia: 'sleep away' },
        { Daniel: 'dietel' }
      ];
    expect(result).toEqual(value)
})
