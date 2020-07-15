let questions = [
    {
        question: "What does the $ in Jquery represent?",
        answer1: "Money",
        answer2: "Vaseline",
        answer3: "Water",
        answer4: "jQuery",
        correctAnswer: "jQuery"
    }
]
let counter = 0;

let introPage = ` <div class="intropage">
    <h2>This is my intro</h2>
    <p>Some sort of text</p>
    <button id="start">Start</button>
</div>`;

let questionPage = `<div class="question">
    Question: What is the meaning of life
    <input type="radio" value="Clouds" name="meaning">Clouds
    <input type="radio" value="Sunshine" name="meaning">Sunshine
</div>`;


let totalScore = 3;
let closingPage = `<div class="closingpage">
    <h2>Quiz Closing</h2>
    <p> You received a score of ${totalScore}. Would you like to try again?</p> 
</div>`;


function generateQuestion() {
    let question = questions[counter];
    return `<div class="question">
    Question: ${question.question}
    <form>
    <input type="radio" value="${question.answer1}" name="jquery">${question.answer1}
    <input type="radio" value="${question.answer2}" name="jquery">${question.answer2}
    <input type="radio" value="${question.answer3}" name="jquery">${question.answer3}
    <input type="radio" value="${question.answer4}" name="jquery">${question.answer4}
    <input type="submit" value="Submit">
    <form>
</div>`

}

function main() {
    $("main").html(introPage);

}


$("main").on("click", "#start", function () {
    let page = generateQuestion();
    $("main").html(page);
    //$(".question").show();
    //$(".intropage").hide();

})

$("main").on("submit", "form", function (evt) {
    let question = questions[counter];
    evt.preventDefault();
    var radioValue = $("input[name='jquery']:checked"). val();
    console.log(radioValue);
    if(radioValue == question.correctAnswer){
        alert("You are right!");
    } else{
        alert("Wrong!")
    }


});




$(main);