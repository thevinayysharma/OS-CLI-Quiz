var readlineSync = require("readline-sync");
var chalk = require("chalk");
var score = 0;

//highscorer list
var leaderBoard = [
  {
    name : "vinay",
    score: "5",
  },
  {
    name:"Avdesh",
    score: "4",
  }
]

//arrays of objects
var questionList = [
  {
    question: "Google is working on which operating system? Fuchsia or Linux ? ",
    answer: "Fuchsia"
  },
  {
    question:"Seamphores are used in IPC, interprocess communcation? Y/N ",
    answer:"Y"
  },
  {
    question :"Is Android an operating System? Y/N ",
    answer :"N",
  },
  {
    question: "Monolithic OS provides more security vs flexibility? Y/N  ",
    answer:"Y"
  },
  {
    question:"Linux uses Copy on write command? Y/N",
    answer:"Y"
  }
];

function welcome() {
  var username = readlineSync.question(chalk.bold.blueBright("Hola! May I have your name, please ? " + "\n"));
  console.log("Hi "  + username + "! Get Ready for 5 questions quiz on Opearating system? " + "\n");
}



function game(question, answer) {
  var currentAnswer = readlineSync.question(chalk.redBright.bold(question)+ "\n");
  if( answer.toUpperCase() == currentAnswer.toUpperCase()) {
    score++;
    console.log(chalk.green("You are Right"));
  }
  else {
    console.log(chalk.bold.grey("Oops!Try next one to score more." + "\n"));
  }
  console.log(chalk.bold.greenBright("Current score:" + chalk.red(score) + "\n"));
};



function gameProcessor() {
   for( var i = 0 ; i < questionList.length ; i++) {
    var currentQuestion = questionList[i];
    game(currentQuestion.question, currentQuestion.answer );
   }

}

function showScore() {
  if(score < 4) {
  
    console.log("You have scored: "+  score + " give another try!");
  }
  else {
    console.log(chalk.underline("Cograts! you are a high scorer. please share the your score with the quizmaker to have your name on the LeaderBoard lihe these guys!"));
    leaderBoard.map(score => console.log(score.name + ":"+ score.score));
  }
  console.log("---------Game Ends!---------");
}


//function calls
welcome();
gameProcessor();
showScore();