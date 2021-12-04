
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