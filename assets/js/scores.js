let highScoresArray = JSON.parse(localStorage.getItem('high-score'));
let scoreList = document.getElementById('scoreOl')

let orderedArray = highScoresArray.sort(function(a,b){
    return b.finalScore - a.finalScore
})
sortedArray.forEach(function(score){
    let li = document.createElement('li');
    li.textContent = score.initials + ' ' + score.finalScore
    scoreList.appendChild(li)
})