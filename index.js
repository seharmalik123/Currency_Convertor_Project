#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellow.bold("\n\tWellcome to my code - Currency Conversion\n")),
    console.log("=".repeat(70));
//Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1,
    "EUR": 0.9,
    "JYP": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.70, // Pakistani Rupee
    //Add more currencies and their exchange rate here
};
//prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into:",
        choices: ["USD", "EUR", "JYP", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert:"
    }
]);
//Currency conversion by using formula
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = user_answer.amount;
//Formula of Conversion Currencies
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
//Display the converted amount
console.log(`Converted Amount = ${chalk.green(converted_amount.toFixed(2))}`);
