let members = ["Emily", "Jack", "Sophia", "Daniel"];
let books = ["how to train", "flowers", "sleep away", "dietel"];
let obj = []
let count = 0;
for (const key of members){
     obj.push({[members[count]] : books[count]})
     count++;
}

console.log(obj)




