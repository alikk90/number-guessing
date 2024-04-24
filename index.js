#! /usr/bin/env node
import inquirer from "inquirer";
const computer_number = Math.floor(Math.random() * 10 + 1);
const result = await inquirer.prompt([
    {
        name: "guessing_game",
        type: "number",
        message: "Guess the number between 1 and 10",
    },
]);
//condition
if (result.guessing_game === computer_number) {
    console.log("Congrats! You got it!");
}
else {
    console.log("Sorry, try again!");
}
