var questionNumber = 1;
var timePenalty = 5;
var timeRemaining = 60;

// Timer function
document.getElementById("begin-btn").addEventListener("click", function() {
    var start = document.getElementById("intro")
    start.classList.add("hidden")
    displayQuestion()
    timeRemaining = 60;

    var timer = setInterval(function() {
        if(timeRemaining <= 0){
            clearTimer(timer);
            document.getElementById("spareTime").innerHTML = "Game Over!!";
        } else {
            document.getElementById("spareTime").innerHTML = spareTime + "seconds remaining";
        }
        spareTime -= 1;
    }, 1000);
});

// Commence questions
function showQuestions() {
    if(questionDigit <= 6) {
        var presentQuestion = document.getElementById("questions" + questionNumber);
        presentQuestion.classList.remove("hidden");
    } else {
        location.reload();
    }
}

// Hide previous questions
function hiddenQuestion() {
    var previousQuestion = document.getElementById("questions" + (questionNumber -1));
    previousQuestion.classList.add("hidden");
}

// Correct answer/Wrong answer
function answerCheck(isCorrect) {
    if(isCorrect) {
        window.alert("Nicely done!!");
        questionNumber++;
        showQuestions();
        hiddenQuestion();
    }
}