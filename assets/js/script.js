var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');
var quizEl = document.getElementById('quiz-text')
var startBtn = document.getElementById('start');
var playerScore = document.getElementById('score');
var userhighScore = document.getElementById("highScore"); 
var btn1 = document.getElementById("btn-1");
var btn2 = document.getElementById("btn-2");
var btn3 = document.getElementById("btn-3");
var btn4 = document.getElementById("btn-4");
var quizBtnEL = document.getElementById("quiz-buttons");
var timeDiv = document.getElementById("countdown-div");

var timeRemaining = 60;
var currentQuestion = 0;
var currentAnswer = 0;
var questionBank = [
    {
        q: "What country produces the most coffee in the world?",
        a: ["Guatemala", "Brazil", "Ecquador", "Nicaragua"],
        ca: "Brazil"
    },
    {
        q: "What was the first state in the USA",
        a: ["New York", "Vermont", "Delaware", "Massachusetts"],
        ca: "Delaware"
    },
    {
        q: "Pure water has a pH of around what?",
        a: ["6", "7", "8", "9"],
        ca: "7"
    },
    {
        q: "Groups of lions are called what?",
        a: ["Pride", "Herd", "Murder", "Pack"],
        ca: "Pride"
    },
    {
        q: "What is the largest ocean?",
        a: ["Atlantic", "Indian", "Artic", "Pacific"],
        ca: "Pacific"
    },
    {
        q: "Who won best actor in 2020",
        a: ["Joaquin Phoenix", "Antonio Banderas", "Adam Driver", "Leonardo DiCaprio"],
        ca: "Joaquin Phoenix"
    },
    {
        q: "What is the human bodies largest organ?",
        a: ["Heart", "Lungs", "Large Intestine", "Skin"],
        ca: "Skin"
    },
    {
        q: "What country did basketball originate?",
        a: ["Canada", "USA", "France", "Spain"],
        ca: "Canada"
    },
    {
        q: "How many rides are at Disney World?",
        a: ["42", "46", "50", "52"],
        ca: "46"
    },
    {
        q: "Where is the widest highway in the world?",
        a: ["California", "New York", "Texas","Florida"],
        ca: "Texas"
    }
]
// var chosenQuiz = questionBank;



function timer() {
    var timeLeft = setInterval(function() {
        timeRemaining--;
        timerEl.textContent = timeRemaining;

        if(timeRemaining<=0) {
            timerEl.textContent = "";
            timeDiv.textContent = "";
            clearInterval(timeLeft);
            highScore();
            endquiz();
        } else if(timeRemaining === 5){
            timerEl.style.color = "red";
        } 
    }, 1000);
}
//score variable

var playerScore = 0;

function showQuestions(){
    // mainEl.textContent = chosenQuiz[currentQuestion].q
    quizEl.textContent = questionBank[currentQuestion].q
    quizBtnEL.appendChild(btn1)
    quizBtnEL.appendChild(btn2)
    quizBtnEL.appendChild(btn3)
    quizBtnEL.appendChild(btn4)
    btn1.textContent = questionBank[currentAnswer].a[0]
    btn2.textContent = questionBank[currentAnswer].a[1]
    btn3.textContent = questionBank[currentAnswer].a[2]
    btn4.textContent = questionBank[currentAnswer].a[3]
    
    

    document.getElementById("btn-1").onclick = function() 
    {if (btn1.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    }; 
    document.getElementById("btn-2").onclick = function() 
    {if (btn2.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    };
    document.getElementById("btn-3").onclick = function() 
    {if (btn3.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    };   
    document.getElementById("btn-4").onclick = function() 
    {if (btn4.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    };   
};


function nextQuestion() {
    currentQuestion++;
    currentAnswer++;

    if(currentQuestion < questionBank.length && currentAnswer < questionBank.length) {
    quizEl.textContent = questionBank[currentQuestion].q
    quizBtnEL.appendChild(btn1)
    quizBtnEL.appendChild(btn2)
    quizBtnEL.appendChild(btn3)
    quizBtnEL.appendChild(btn4)
    btn1.textContent = questionBank[currentAnswer].a[0]
    btn2.textContent = questionBank[currentAnswer].a[1]
    btn3.textContent = questionBank[currentAnswer].a[2]
    btn4.textContent = questionBank[currentAnswer].a[3]
    } else {
        highScore();
        endquiz();
    }

    document.getElementById("btn-1").onclick = function() 
    {if (btn1.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    }; 
    document.getElementById("btn-2").onclick = function() 
    {if (btn2.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    };
    document.getElementById("btn-3").onclick = function() 
    {if (btn3.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    };   
    document.getElementById("btn-4").onclick = function() 
    {if (btn4.textContent === questionBank[currentQuestion].ca) {
        playerScore++;
        nextQuestion();
    } else {
        timeRemaining -= 5;
        nextQuestion();
    }
    };
};


function startQuiz() {
    timer()
    showQuestions()
}

//end of quiz 
function endquiz(){
    confirm("Would you like to play again?")
    if(true){
        location.reload();
    } else {
        alert("Thanks for playing!");
    }
};




// for loop of questions
// for (var i = 0; i < questionBank.length; i++) {
//     var answer = confirm(questionBank[i]).q;

//     if(questionBank[i].a === questionBank[i].ca) {
//         playerScore++;
//     } else {
//         timeRemaining - 5; 
//     };
// };

function highScore() {
    var highScore = localStorage.getItem("playerScore");

    if(highScore === null){
        highScore = playerScore;
        alert("You set a high score!");
        endquiz;
    } else if(highScore < playerScore){
        highScore = playerScore;
        alert("You set a new high score of " + playerScore + "!");
        localStorage.setItem("playerScore", playerScore);
        endquiz;
    } else {
        alert("You scored " + playerScore + " thanks for playing!");
        endquiz;
    }
    
};

startBtn.addEventListener("click", function(){
    startQuiz();
    document.getElementById("quiz-text").style.display = "flex" ;
    document.getElementById("quiz-start").style.display = "none" ;
    document.getElementById("countdown-div").style.display = "flex";
    document.getElementById("quiz-test-card").style.display = "flex";
});


// pretendBtn.addEventListener("click", function() {
//     chosenQuiz = sportsBank
// })


// const cat = localStorage.getItem('playerScore');