var questions = [{
    ques: "WHICH COUNTRY  HAS WON THE MOST FIFA WORLD CUPS? ?",
    ans: ["BRASIL", "ITALY", "GERMANY", "ARGENTINA"],
    name: "mostWins",
    correct: "Brasil",
    divClass: ".mostWins"
},
{
    ques: "HOW MANY FIFA WORLD CUPS HAVE BRAZIL WON??",
    ans: ["6", "5", "4", "7"],
    name: "wins",
    correct: "5",
    divClass: ".wins"
},
{
    ques: "FOR HOW MANY TIMES BRAZIL HAVE REACHED FIFA WORLD CUP FINALE??",
    ans: ["10", "6", "7", "8"],
    name: "finale",
    correct: "7",
    divClass: "finale"
},
{
    ques: "NAME THE ONLY PLAYER TO HAVE WON THE WORLD CUP THREE TIMES?",
    ans: ["Pele - Brasil", "Maradona - Argentina", "Ronaldo - Portugual", "David Beckham - England"],
    name: "player",
    correct: "Pele - Brasil",
    divClass: ".player"
},
{
    ques: "NAME THE BALL THAT WAS USED AT THE 2014 WORLD CUP IN BRAZIL?",
    ans: ["Telstar", "tango", "jabulani", "Brazuca"],
    name: "ball",
    correct: "Brazuca",
    divClass: ".ball"
},
{
    ques: "NAME THE ONLY PERSON THAT HAS WON A WORLD CUP MEDAL 4 TIMES?",
    ans: ["GerdMuller - Germany", "PaoloMaldini - Italy", "Zagallo - Brazil", "Hidefumi Hommyo"],
    name: "medals",
    correct: "Zagallo - Brazil",
    divClass: "medals"
},

] // end questions object

var labels = ["first", "second", "third", "forth"];

// click to start then display quesions
var startGame = $("#start-btn").on('click', function() {
$(this).parent().hide();
$('.container').show();
countdown(60);
questionDisplay();
});

// function for displaying questions
var questionDisplay = function() {
$(".questions :not('#sub-but')").empty();
// loops through the 10 questions 
for (var j = 0; j < 10; j++) {
$('.questions').prepend('<div class="' + questions[j].name + '"></div>');
$(questions[j].divClass).append('<div class ="ques-title">' + questions[j].ques + '</div>');
// loops through answers for each radio button
for (var i = 0; i <= 3; i++) {
    $(questions[j].divClass).append('<input type="radio"  name="' + questions[j].name + '" value="' + questions[j].ans[i] + '"/><label for="' + labels[i] + '">' + questions[j].ans[i] + '</label>');
}
$('.questions').prepend('<hr />');
}
}


// function for countdown timer
var countdown = function(seconds) {

var timer = setInterval(function() {
seconds = seconds - 1;
$("#time-remain").html(seconds);

if (seconds <= 0) {
    $('.container').fadeOut(500);
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unAnswered = 0;

    // loop through correctArray & radioName to match html elements & answers
    for (var i = 0; i < 10; i++) {

        if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

            correctAnswers++;
            console.log("this is correct! number:" + i)
        } else {
            wrongAnswers++;
            console.log("this is wrong! number:" + i)
        };
    }
    $('#correctTimesUp').append(correctAnswers);
    // display wrongAnswers
    $('#wrongTimesUp').append(wrongAnswers);
    $('#timesUp').fadeIn(1000).show();

    // alert("Times Up!");
    clearInterval(timer);
    return;
}
}, 1000);

// click event for submit button to stop timer
$('#sub-but').on('click', function() {
clearInterval(timer);
})
}; // end countdown


// function to grade quiz once submit button is clicked
var gradeQuiz = $('#sub-but').on('click', function() {

var correctAnswers = 0;
var wrongAnswers = 0;
var unAnswered = 0;

// loop through correctArray & radioName to match html elements & answers
for (var i = 0; i < 10; i++) {

if ($('input:radio[name="' + questions[i].name + '"]:checked').val() === questions[i].correct) {

    correctAnswers++;
} else {
    wrongAnswers++;
};
};

// once submit is clicked...
// tests
// stop timer
countdown();
// fade out questions
$('.container').fadeOut(500);
// show answerScreen
$('#answerScreen').show();
// display correctAnswers
$('#correctScreen').append(correctAnswers);
// display wrongAnswers
$('#wrongScreen').append(wrongAnswers);

}); // end gradeQuiz