import inquirer = require("inquirer");
import askName = require("inquirer-npm-name");

// $ExpectType Promise<{ [key: string]: string; }>
askName("moduleName", inquirer);

// $ExpectType Promise<{ [key: string]: string; }>
askName(
    {
        name: "moduleName",
        message: "Whar's the name of your module?"
    },
    inquirer);
