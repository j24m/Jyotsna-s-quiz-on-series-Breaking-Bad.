var readlineSync= require("readline-sync");
var chalk = require('chalk');
userName=readlineSync.question("Hey!!What's your name? ");
console.log(chalk.bgBlue.bold.black.underline("So "+userName.toUpperCase(),"let us see how much of breaking bad series do you remember!!"));
score=0;

function play(question,answer)
{
  userAnswer=readlineSync.question(chalk.bold.blue(question))
  if(userAnswer===answer)
  {
    console.log(chalk.bold.greenBright("Correct answer."));
    score=score+1;
    console.log("You score is:"+score);
  }
  else
  {
    console.log(chalk.bold.redBright("Oops,Wrong answer."));
    console.log("Score:"+score);
  }
}
play("\nWhat disease is Walter White diagnosed with?\n (a). Lou Gehrig's diesease\n (b). Lupus\n (c). Pancreatic cancer\n (d). Lung Cancer\n",  "d")
play("\nWhat is the name of Walt and Skyler's daughter?\n (a). Molly\n (b). Jane\n (c). Holly\n (d). Jackie\n","a")
play("\nWhich famous poet is referenced in the show multiple times?\n (a). Robert Browning\n (b). Walt Whitman\n (c). Robert Frost\n (d). Geoffrey Chauccer\n", "b")
play("\nWhat is the favourite color of Marie?\n (a). Pink\n (b). Purple\n (c). Yellow\n (d). Green\n","b")
play("\nWhat is the name of Gus Fring's restaurant?\n (a). Pollos Hermanos\n (b). Pollo Feliz\n (c). Delicioso Pollos\n (d). Amigos de Pollo\n","a")
console.log("Your final score:"+score);
if(score===5)
{
  console.log("Damn, you are a die hard fan :D");
}
else if(score>=3)
{
  console.log("Looks like you are a casual fan :P")
}
else
{
  console.log("Aww Hell no,have you really ever watched Breaking bad :(");
}


 