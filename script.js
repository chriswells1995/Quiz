// TODO Declare Variable
// declare a string of questions
// declare objects with the Q and four answers
// connect those objects to html buttons
// dynamically change which questions and answers are showing
// after all of them, show "score"
// have a timer showing which is penalized for every wrong answer



var Question1="What does HTML stand for?";
var Answer=["Right", "Wrong", "Wrong", "Wrong"]
var allQuestions=["What does HTML stand for?", "What does CSS stand for?", "What is the relationship bewteen java and javascript?", "Which best describes bootstrap is terms of coding?", "Which is a self-closing tag?" ]

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
    answers: ["Javascript mooched off of Java's popularity but is completly different", "They are the same", "They had the same creator","Javascript is java with extra features" ]
 
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


// This function dynamically creates text for the questions and answers whatever object is fed to it
// function ask(object){

// $("#Q").text(object.question)
// console.log(object.question)
// $("#A").text(object.answers[0])
// $("#B").text(object.answers[1])
// $("#C").text(object.answers[2])
// $("#D").text(object.answers[3])
// }

var object;
var Qs=[Q1,Q2,Q3,Q4,Q5];
var counter=0;
var time=3000;
var current;


function setTime(secondsLeft) {
    clearInterval();
    timerInterval = setInterval(function() {
      // this is a minus minus, removing one each interval
      secondsLeft--;
      current=secondsLeft;
      $("#timer").text(secondsLeft)
  
      if(secondsLeft === 0) {
        // stops the time
        clearInterval(timerInterval);
        
      }
  
      // this is 1000 milleseconds
    }, 1000);
  }













$("#start").on("click", function (){
    object=Qs[counter]
    counter++
  setTime(30);
    if (counter > 4){
        // show end screen
        return;
    }

    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])
    }
)


$("#A").on("click", function (){
  
    object=Qs[counter]
    counter++
    $("#wrong").text("Correct!")
    if (counter > 4){
        // show end screen
        return;
    }

    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])
    }
)
$("#B").on("click", function (){
    object=Qs[counter]
    counter++

    $("#wrong").text("Wrong!")

    if (counter > 4){
        // show end screen
        return;
    }

    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])
    }
)
$("#C").on("click", function (){
    object=Qs[counter]
    counter++

    $("#wrong").text("Wrong!")

    if (counter > 4){
        // show end screen
        return;
    }

    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])
    }
)
$("#D").on("click", function (){
    object=Qs[counter]
        counter++   
     
        $("#wrong").text("Wrong!")
    if (counter > 4){
        // show end screen
        return;
    }

    $("#Q").text(object.question)
    console.log(object.question)
    console.log(object.answers[0])
    $("#A").text(object.answers[0])
    $("#B").text(object.answers[1])
    $("#C").text(object.answers[2])
    $("#D").text(object.answers[3])
    }
)




// $("#A").on("click", ask(Q2))
// $("#A").on("click", ask(Q3))
// $("#A").on("click", ask(Q4))
// $("#A").on("click", ask(Q5))


