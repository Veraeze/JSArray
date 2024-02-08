function afternoonClasses(array){

    const times = array.filter((time) => time.slice(-2)=="PM" && 1 < time.charAt(0) < 5)
    return times
}


module.exports = {afternoonClasses}