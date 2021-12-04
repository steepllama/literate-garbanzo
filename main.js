
//create html dynamically 

// when the user click start the timer goes off

//we need to show question and answers ( the quiz is 5 questions with 4 answers each)



/** TIMER
 * variable = 60
 * secondsLeft
 */

/** questions
 * create an array of objects
 * five total objects
 * 1 question each object
 * 4 answers in an array
 * 1 correct answer
 *
 *
 * display question randomly
 * if correct ans, answer is green
 * and goes to a different question
 * until questions are all answered
 *
 * else answer is red
 * loose time
 * goes to a different question until questions are all answered
 *
 *
 */

/**
 * Dynamic html
 *
 * classes in css
 * functions to show or display those classes
 * attach classes to html elements
 */


var timerEl = document.querySelector("#timer");
var highScoresEl = document.querySelector("#scores");
var gameRulesEl = document.querySelector("#rules");
var startButtonEl = document.querySelector("#start-button");
var questionEl = document.querySelector("#question");
var answerEl = document.querySelector("#answers");

document.addEventListener("click", function (event) {
    if (event.target === start-button) {
        setupTimer()
        displayQuestions();
    }
})

var timer = 60;
var timeCount;
function setupTimer() {
    timeCount = setInterval(function () {
        timer--;
        var timeReset = timeElement.textContent = "Time" + " " + timer;
        timer = timer;
        if (timer <= 0) {
            clearInterval(timeCount);

            timeElement.textContent = timeReset;
        }
    }, 1000)
}

function onClickHandler(event)
