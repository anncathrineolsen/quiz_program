const quizQuestions = [
    {
q: "Hvor mange fingre har et menneske?", //første plads i arrayet, plads 0 i console.log
a:["10", "7", "5", "14"],
correct: "10",
point: 0
}, 
{ //anden plads i arrayet, plads 1
q: "Er en gris et pattedyr?",
a: ["ja", "nej", "måske", "ved ikke"],
correct: "ja",
point: 0
},
{//tredje plads i arrayet, plads 2
    q: "Hvad hedder kronprinsens bodyguard?",
    a: ["John John", "Roland", "Magrethe"],
    correct: "John John",
    point: 0
}
];

//quizQuestions[0].point = 1;
//console.log(quizQuestions[0].point);


var count = 0;
var qElement = document.querySelector("h1");
var optionsElement = document.querySelector(".options")

function runProgram(){

qElement.innerHTML = quizQuestions[count].q

var aElements = "<form>" //starteb af vores form

quizQuestions[count].a.forEach(answer => {
aElements += `<input type="radio" name="answer" value="`+ answer +`"><label for="male">`+ answer + `</label><br></br>`
})

optionsElement.innerHTML = aElements + `<br><input type="submit" value="Svar" id="svar"> </form>`

checkAnswer();
} // afslutning af vores form med knap

function checkAnswer(){

answerElement = document.querySelector("#svar")

answerElement.addEventListener("click", function(e){

e.preventDefault();

var answer = document.querySelector(`input[name="answer"]:checked`).value

if(answer == quizQuestions[count].correct){
    quizQuestions[count].point = 1;
}
count = count +1;

if(quizQuestions.length == count){
    status();
}else{
    runProgram();
}

})

}

function status(){

qElement.innerHTML = "point status"

optionsElement.innerHTML = "";

var samletPoint = 0;

quizQuestions.forEach(answer => {
    samletPoint += answer.point
})
optionsElement.innerHTML = " Du fik " + samletPoint + " ud af " + quizQuestions.length + " mulige "
}

runProgram();