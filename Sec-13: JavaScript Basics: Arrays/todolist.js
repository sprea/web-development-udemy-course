var todos = [];

var input = prompt("What would you like to do?");

while(input !== "quit"){
	if(input === "list"){
		console.log("#####################################");
		console.log("TODO LIST");
		console.log(todos);
		console.log("#####################################");
	}
	else if (input === "new"){
		var newTodo = prompt("Enter a new Todo");
		console.log("#####################################");
		todos.push(newTodo);
		console.log("Added a new Todo:");
		console.log(todos);
		console.log("#####################################");
	}
	else if(input === "delete"){
		console.log("#####################################");
		console.log("Specify the number of task to be deleted from this list");
		console.log(todos);
		var num = prompt("Specify the number of task to be deleted");
		todos.splice(num, 1);
		console.log("List after deletion is");
		console.log(todos);
		console.log("#####################################");
	}
	else{
		alert("Invalid action. Try again!");
	}
	input = prompt("What would you like to do?");
}
console.log("Ok, You quit the app. Have a nice day without me!");
alert("Ok, You quit the app. Have a nice day without me!");