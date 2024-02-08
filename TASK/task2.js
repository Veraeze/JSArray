function addToScores(grades){
    const newGrades = grades.map((score) => score + 5)
    return newGrades;
}

module.exports = {addToScores}