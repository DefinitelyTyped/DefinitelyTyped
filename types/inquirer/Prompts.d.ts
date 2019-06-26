import inquirer = require(".");

export interface Prompts {
    [name: string]: inquirer.prompts.Base;
}