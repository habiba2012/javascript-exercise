var quizzes =[
["How many oscars did the Titanic movie got?","Eleven"],
["How many Tomb Raider movies were made?", "Two movies"],
["What is the name of the prison in the film The Rock?", "Alcatraz"]
];

var score = 0

run(quizzes);

    function run(quizzes){
	for(var i=0, questions, answers, max = quizzes.length; i<max; i++){

		questions = quizzes[i][0];
		answers = ask(questions);
		check(answers);
		
	}
	gameOver();


function ask(questions){
	return prompt(questions);
}


function check(answers){
	
	if (answers===quizzes[i][1]){
		alert("Your answer is right." );
		
			if (answers===quizzes[0][1]){
				score+=10;
			}
		
			

			else if(answers===quizzes[1][1]){
				score+=20;
			}

			else if(answers===quizzes[2][1]){
				score+=30;
			}
}
	
	else
		alert('Your answer is wrong');
	
}


function gameOver(){
	
	alert("You are done. " + " You got " + score + " points.");

}
}

   
