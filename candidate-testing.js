const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName;
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let questions = ["Who was the first American woman in space? ","True or false: 5 kilometer == 5000 meters?","(5 + 3)/2 * 10 = ?","Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?","What is the minimum crew size for the ISS?"];
let correctAnswers = ["Sally Ride","true","40","Trajectory", 	"3"];
let candidateAnswers=[];
let question;
let correctAnswer;
let candidateAnswer ;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("enter the candidate's name? ");
}

function askQuestion() {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
  //console.log("1) " + question);
   
   for (let i = 0 ; i < questions.length ;i++){
    
    candidateAnswers[i] = input.question(i+1 + ") " +questions[i] +"\n");
    console.log("Your Answer: "+candidateAnswers[i]);
    console.log("Correct Answer: "+correctAnswers[i]+"\n");
  }
  //console.log(candidateAnswers);
 // candidateAnswer = input.question("1) " + question);
 // console.log("Your Answer: " + candidateAnswer);
  
}
  
function gradeQuiz(candidateAnswers) {
let correct =0;
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
  for(let i=0;i<candidateAnswers.length;i++){
   if(candidateAnswers[i] === correctAnswers[i])
   {
     //console.log("Answer is correct");
    correct++;
   }
  }

  let grade=(correct/questions.length)*100;
  let status ;
  if(grade>=80){
    status =  'PASSED';

  }else{
    status ='FAILED'
  }
  
let mystring=`>>> Overall Grade:  ${grade}% (${correct} of ${questions.length} responses correct) <<< `;
console.log(mystring);

let mynewstring1=`>>> Status: ${status} <<<`;
console.log(mynewstring1);
  

  return grade;
}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  console.log("Candidate Name: " +candidateName);

  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};