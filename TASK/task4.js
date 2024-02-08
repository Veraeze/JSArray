
function keyValues(members, books){
    let obj = []
    let count = 0;
    for (const key of members){
        obj.push({[members[count]] : books[count]})
        count++;
    }
    return obj
}

module.exports = {keyValues}



