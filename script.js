// TODO Declare Variable
// declare a string of questions
// declare objects with the Q and four answers
// connect those objects to html buttons
// dynamically change which questions and answers are showing
// after all of them, show "score"
// have a timer showing which is penalized for every wrong answer


// Declare all of our questions in one array for convinence

var allQuestions = ["What does HTML stand for?", "What does CSS stand for?", "What is the relationship bewteen java and javascript?", "Which best describes bootstrap is terms of coding?", "Which is a self-closing tag?"]

// Declare 5 Objects which will hold questions and answers

var Q1 = {

    question: allQuestions[0],
    answers: ["Hypertext Markup Language", "High Texture Machine Learning", "Hot Type Marker Level", "Hairy Tailors Make Leggings"]

}

var Q2 = {

    question: allQuestions[1],
    answers: ["Cascading Style Sheet", "Computer Synchomatic Sentence", "Cyber System Syllable", "Crazy Shocking Soup"]

}
var Q3 = {

    question: allQuestions[2],
    answers: ["Javascript mooched off of Java's popularity but is completly different", "They are the same", "They had the same creator", "Javascript is java with extra features"]

}
var Q4 = {

    question: allQuestions[3],
    answers: ["A CSS Library", "A method of extrapolating data", "A piece of fabric used for footwear", "Bill Turner's nickname"]

}
var Q5 = {

    question: allQuestions[4],
    answers: ["<img>", "<div>", "<a>", "<p>"]

}


console.log(Q1)


// Declare some more variables

var object;
var Qs = [Q1, Q2, Q3, Q4, Q5];
var counter = -1;
var time = 3000;
var current;
var penalty;
var secondsLeft = 30;
var score = 0;

// Dynamic Functions

// This functions starts the timer
function setTime() {


    timerInterval = setInterval(function () {
        // this is a minus minus, removing one second each interval
        secondsLeft--;
        current = secondsLeft;
        //   this dynamically puts the number of seconds left on the index page
        $("#timer").text(secondsLeft)
        // when they timer hits 0 (or under due to penalties) it calls the endScreen() function
        if (secondsLeft < 1) {
            // stops the time
            endScreen();
        }

        // this is 1000 milleseconds, so there's one second between each interval
    }, 1000);
}

// This is the penalize() funciton. It is called whenever a wrong answer is clicked
function penalize() {
    // 5 seconds are removed from the timer
    secondsLeft = secondsLeft - 5;


}

// This is called when all questions have been answered or time runs out
function endScreen() {

    $("#wrong").append("        Your final score is ", score, " out of 5")
    clearInterval(timerInterval);

}

// These variables are declared, and used for the initials and high scores
var endForm = document.querySelector("#end-form")
var endInput = document.querySelector("#end-text")
var endList = document.querySelector("#end-list");


var initial
var initials = []
var totalScores = []
var highScores = []
var highScoreNumbers = []


// This event listener is supposed to allow a user to enetr their initials, 
// then store those initials in an array in the local storage, then print out the new intitial and score

endForm.addEventListener("submit", function (event) {
    event.preventDefault();
    var endText = endInput.value


    // Return from function early if submitted initials are blank
    if (endText === "") {
        return;
    }


    initials.push(endText)
    totalScores.push(score)

    //   put the new initials and scores on the local storage
    localStorage.setItem("Initials", initials);
    localStorage.setItem("SCORES", totalScores)

    console.log("initials array " + initials)

    // pull the ew initials and score down from local storage
    highScores.push(localStorage.getItem("Initials"))
    highScoreNumbers.push(localStorage.getItem("SCORES"))


    console.log("high score " + highScores)
    endList.innerHTML = "";
    // Render a new li for each set of initials
    for (var i = 0; i < highScores.length; i++) {

        var li = document.createElement("li");

        li.textContent = (highScores[i] + "   " + highScoreNumbers[i]);
        endList.appendChild(li);
    }


    // end of initials event listener
})

// This function is supposed to get all of the initals and scores down from the local storage and print them out
function ListHighScores() {
    // get all of the initials from the local storage
    highScores.push(localStorage.getItem("Initials"))
    // get all of the scores from the local storage
    highScoreNumbers.push(localStorage.getItem("SCORES"))

    console.log("auto " + highScores)
    for (var i = 0; i < highScores.length; i++) {

        var li = document.createElement("li");
        li.textContent = (highScores[i] + "   " + highScoreNumbers[i]);
        endList.appendChild(li);
    }

}
// This calls the above function. In theory, the amove function will run as soon as the browser opens, 
// The current high scores will be printed, and when a new high score is submitted, the previous event listener would add it to the list
ListHighScores();




// Answer Functions: These are the functions reliant on clicking the buttons
// Currently, all of the correct ansers are for button A

// A (The correct answer) function
function answerA() {
    // This makes it so clicking the A button before the Start button does nothing
    if (counter === -1) {
        return;
    }
    // This makes it so cliking the A button after the quiz is over does nothing
    if (counter > 5) {

        return;
    }

    score++
    console.log("A Click")
    counter++

    console.log("COUNTER " + counter)
    // this runs the endScreen function when the quiz ends
    if (counter === 5) {
        // show end screen
        endScreen();
        return;
    }
    // This prints the word "Correct"
    $("#wrong").text("Correct!")


    object = Qs[counter]

    $("#Q").text(object.question)
    console.log("pls " + object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])

}


// B (the wrong answer) function
function AnswerB() {
    if (counter === -1) {
        return;
    }
    object = Qs[counter]
    counter++




    if (counter === 5) {
        // show end screen
        endScreen();

        return;
    }

    if (counter > 5) {

        return;
    }
    $("#wrong").text("Wrong!")

    object = Qs[counter]
    // this calls the penalize function because you clicked the wrong answer
    penalize()
    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])

}





// START event listener
// This starts the quiz by clicking the start button, but does nothing after that
$("#start").on("click", function () {



    if (counter > -1) {
        return;
    }

    counter++

    object = Qs[counter]
    //   This calls the timer function to set the timer
    setTime();

    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])
}
)

// Event listeners for each button
// Currently, clicking the A button will always lead to the correct answer
// clicking any other button leads to a wrong answer
$("#A").on("click", answerA)
$("#B").on("click", AnswerB)
$("#C").on("click", AnswerB)
$("#D").on("click", AnswerB)

