function runTimer() {
    remainingTime--;
    if (remainingTime < 0) {
        remainingTime = 0;
        timerEl.innerHTML = remainingTime;
        endQuiz();
    }
    timerEl.innerHTML = remainingTime;
}

let questions = [
    {
        text: 'What does HTML stand for?',
        choices: ['Hypertext Markup Language, Hypertext Mark Language, Hypertest Maskup Language, Hypertoot Makeup Loot '],
        answer: 'Hyper Markup Language'
    },
    {
        text: 'What is the smallest heading in HTML?',
        choices: ['h1, h3, h5, h6,'],
        answer: 'h6'
    },
    {
        text: 'When was Javascript invented?',
        choices: ['1995, 2001, 1991, 2015'],
        answer: '1995'
    },
    {
        text: 'What can you store in a array?',
        choices: ['booleans, all of the above, other arrays, numbers and strings'],
        answer: 'all of the above'
    },
    {
        text: 'What company developed Javascript?',
        choices: ['Facebook, Myspace, Netscape, Elon Musk'],
        answer: 'Netscape'
    },
    {
        text: 'What does is CSS short for?',
        choices: ['Cascading Style Sheets, Cascade Short Sheets, Cascading Super Sheets, Cascade Styiling Sheets'],
        answer: 'Cascading Style Sheets'
    }
]

function beginGame() {
    start.setAttribute('class', 'hidden')
    questionsDiv.removeAttribute('class')

    callQuestion()
    time = setInterval(runTimer, 1000)
}

function savePoints() {
    let initials = '';
    let pointsObj = {
        initials: initials,
        finalScore: score * remainingTime
    }
    scoreArray.push(pointsObj)
    localStorage.setItem('highScores', JSON.stringify(scoreArray))
}

function endQuiz() {
    saveScore();
    clearTime(interval);
    questionsDiv.setAttribute('class', 'hidden')
};

function showQuestion() {
    let question = document.getElementById('main-question')
    question.textContent = questions[questionIndex].text;
    let answers = document.getElementById('answers')
    answers.innerHTML = ''
    question[questionIndex].choices.forEach(function (choice) {
        let button = document.createElement('button');
        button.textContent = choices
        answers.appendChild(button)
        button.setAttribute('data-choice', choice)
        button.onclick = evaluateAnswer; 
    })
}

function checkAnswer() {
    let options = this.getAttribute('data-choice')
    if (options !== questions[questionIndex].answer) {
    timePenalty-=10;
    quiz.classList.add('wrong')
    setTimeout(function() {
        quiz.classList.remove('wrong')
    }, 500)
    if (timeLeft <= 0) {
        timeLeft = 0;
        }
    }
    else {
        score++;
        quiz.classList.add('Nice')
        setTimeout(function() {
            quiz.classList.remove('Nice')
        }, 500)
    }
    questionIndex++;
    if (questionIndex === questions.length) {
        endQuiz()
    }
    else {
        callQuestion()
    }
}

beginQuiz.addEventListener('click', startGame)