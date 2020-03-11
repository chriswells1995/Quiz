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
var penalty;
var secondsLeft=30;
var score=0;

// Dynamic Functions

function setTime() {
   
    timerInterval = setInterval(function() {
      // this is a minus minus, removing one each interval
      secondsLeft--;
      current=secondsLeft;
      $("#timer").text(secondsLeft)
  
      if(secondsLeft < 1) {
        // stops the time
        endScreen();
      }
  
      // this is 1000 milleseconds
    }, 1000);
  }


function penalize(){
    secondsLeft=secondsLeft-5;
    console.log("penal")


}


function endScreen(){

    $("#wrong").append("        Your final score is ", score, " out of 5")
    clearInterval(timerInterval);

}

// function postInitials(){
var endForm=document.querySelector("#end-form")
var endInput=document.querySelector("#end-text")
var endList = document.querySelector("#end-list");

// make initials bar appear

// When form is submitted...
// endForm.addEventListener("submit", function(event) {
//     event.preventDefault();
  
//     var endText = endInput.value.trim();

//       // Return from function early if submitted initials are blank
//   if (endText === "") {
//     return;
//   }

//   var initials=[]
//   initials.push(endText)

// })

var initials=[]
endForm.addEventListener("submit", function(event){
    event.preventDefault();
    var endText = endInput.value

      // Return from function early if submitted initials are blank
  if (endText === "") {
    return;
  }

  
  initials.push(endText)
console.log("initials array "+ initials)


endList.innerHTML = "";
  // Render a new li for each set of initials
  for (var i = 0; i < initials.length; i++) {
    var initial = initials[i];

    var li = document.createElement("li");
    li.textContent = (initial + "   "+ score);
    endList.appendChild(li);
  }



})

// }
// postInitials();


// Answer Functions

// A (The correct answer) function
 function answerA(){
  console.log("A Click")
counter++
        
        console.log("COUNTER " +counter) 

        if (counter === 5){
            // show end screen
            endScreen();
            return;
        }
        if (counter > 5){

            return;
        }
        $("#wrong").text("Correct!")

        score++
        object=Qs[counter]

        $("#Q").text(object.question)
        console.log("pls "+object.question)
        console.log(object.answers[0])
        $("#A").text(object.answers[0])
        $("#B").text(object.answers[1])
        $("#C").text(object.answers[2])
        $("#D").text(object.answers[3])
        
        }
    

// B (the wrong answer) function
function AnswerB(){
object=Qs[counter]
counter++




if (counter === 5){
    // show end screen
    endScreen();

    return;
}

if (counter > 5){

    return;
}
$("#wrong").text("Wrong!")

object=Qs[counter]
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
$("#start").on("click", function (){
    object=Qs[counter]
    
  setTime();
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

// Event listeners for each button
$("#A").on("click", answerA)
$("#B").on("click", AnswerB)
$("#C").on("click", AnswerB)
$("#D").on("click", AnswerB)

  
//     object=Qs[counter]
//     counter++
//     $("#wrong").text("Correct!")
//     if (counter > 4){
//         // show end screen
//         return;
//     }

//     $("#Q").text(object.question)
//     console.log(object.question)
//     console.log(object.answers[0])
//     $("#A").text(object.answers[0])
//     $("#B").text(object.answers[1])
//     $("#C").text(object.answers[2])
//     $("#D").text(object.answers[3])
//     }
// )

// $("#B").on("click", AnswerB)


// $("#B").on("click", function (){
    // object=Qs[counter]
    // counter++
    // penalize()

    // $("#wrong").text("Wrong!")

    // if (counter > 4){
    //     // show end screen
    //     return;
    // }

    // $("#Q").text(object.question)
    // console.log(object.question)
    // console.log(object.answers[0])
    // $("#A").text(object.answers[0])
    // $("#B").text(object.answers[1])
    // $("#C").text(object.answers[2])
    // $("#D").text(object.answers[3])
    // }
// )

// $("#C").on("click", function (){
//     object=Qs[counter]
//     counter++
//     // setTime(penalty)

//     $("#wrong").text("Wrong!")

//     if (counter > 4){
//         // show end screen
//         return;
//     }

//     $("#Q").text(object.question)
//     console.log(object.question)
//     console.log(object.answers[0])
//     $("#A").text(object.answers[0])
//     $("#B").text(object.answers[1])
//     $("#C").text(object.answers[2])
//     $("#D").text(object.answers[3])
//     }
// )
// $("#D").on("click", function (){
//     object=Qs[counter]
//         counter++   
     
//         $("#wrong").text("Wrong!")
//     if (counter > 4){
//         // show end screen
//         return;
//     }

//     $("#Q").text(object.question)
//     console.log(object.question)
//     console.log(object.answers[0])
//     $("#A").text(object.answers[0])
//     $("#B").text(object.answers[1])
//     $("#C").text(object.answers[2])
//     $("#D").text(object.answers[3])
//     }
// )




// $("#A").on("click", ask(Q2))
// $("#A").on("click", ask(Q3))
// $("#A").on("click", ask(Q4))
// $("#A").on("click", ask(Q5)  
