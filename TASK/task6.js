
function totalAmount(expenses){
let total = 0;
for (const key in expenses){
        total = total + expenses[key]
}
return total
}

module.exports = {totalAmount}
