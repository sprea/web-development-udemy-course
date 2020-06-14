var secretNumber = 4;
var guess = Number(prompt("Guess the number!"));

while(guess !== secretNumber){
	if(guess < secretNumber){
		alert("Too low, try again!");
		guess = Number(prompt("Try again!"));
	}
	else{
		alert("Too high, try again!");
		guess = Number(prompt("Try again!"));
	}
}

if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!!!");
}