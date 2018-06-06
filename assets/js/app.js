var questions = [{
    ques: "WHICH COUNTRY  HAS WON THE MOST FIFA WORLD CUPS?",
    ans: ["BRASIL", "ITALY", "GERMANY", "ARGENTINA"],
    name: "mostWins",
    correct: "BRASIL",
    divClass: ".mostWins"
},
{
    ques: "HOW MANY FIFA WORLD CUPS HAVE BRAZIL WON?",
    ans: ["6", "5", "4", "7"],
    name: "wins",
    correct: "5",
    divClass: ".wins"
},
{
    ques: "FOR HOW MANY TIMES BRAZIL HAVE REACHED FIFA WORLD CUP FINALE?",
    ans: ["10", "6", "7", "8"],
    name: "finale",
    correct: "7",
    divClass: ".finale"
    
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
    ans: ["GerdMuller - Germany", "PaoloMaldini - Italy", "Zagallo - Brazil", "Pele - Brasil"],
    name: "medals",
    correct: "Zagallo - Brazil",
    divClass: "medals"
}]


var wrongAnswers = 0
var correctAnswers = 0


$(".hiddenShow").hide()
  
$("#start-btn").on("click", function () {
  $(".hiddenShow").show()
  $("#start-btn").hide()
});


var index = 0
$("#questions").text(questions[index].ques)
$("#questions").append("<hr>"+questions[index].ans[0]+"<button class='answer-button' info='"+questions[index].ans[0]+"'>select</button>")
$("#questions").append("<hr>"+questions[index].ans[1]+"<button class='answer-button' info='"+questions[index].ans[1]+"'>select</button>")
$("#questions").append("<hr>"+questions[index].ans[2]+"<button class='answer-button' info='"+questions[index].ans[2]+"'>select</button>")
$("#questions").append("<hr>"+questions[index].ans[3]+"<button class='answer-button' info='"+questions[index].ans[3]+"'>select</button>")


$(document).on("click", ".answer-button", function() {
var buttonClicked = $(this).attr("info")
console.log(buttonClicked)

if (buttonClicked == questions[index].correct) {
alert("you are right")
correctAnswers++
}

else {
  alert("you are wrong")
  wrongAnswers++
}

index++
if (index < 6) {
  


$("#questions").empty ()
$("#questions").text(questions[index].ques)
$("#questions").append("<hr>"+questions[index].ans[0]+"<button class='answer-button' info='"+questions[index].ans[0]+"'>select</button>")
$("#questions").append("<hr>"+questions[index].ans[1]+"<button class='answer-button' info='"+questions[index].ans[1]+"'>select</button>")
$("#questions").append("<hr>"+questions[index].ans[2]+"<button class='answer-button' info='"+questions[index].ans[2]+"'>select</button>")
$("#questions").append("<hr>"+questions[index].ans[3]+"<button class='answer-button' info='"+questions[index].ans[3]+"'>select</button>")

}
else {
  if (index == questions.length) {
   console.log("thishappens")
  $(".hiddenShow").hide()  
 }

}
$("#wrong").text(wrongAnswers)
$("#correct").text(correctAnswers) 
 


})

var timeleft = 10;
  var downloadTimer = setInterval(function(){
  document.getElementById("progressBar").value = 10 - --timeleft;
  if(timeleft <= 0)
  $(".hiddenShow").hide()  


},3000); 