import inquirer = require("inquirer");
import askName = require("inquirer-npm-name");

// $ExpectType Promise<{ [key: string]: string; }>
askName("moduleName", inquirer);

// $ExpectType Promise<{ [key: string]: string; }>
askName(
    {
        name: "moduleName",
        message: "What's the name of your module?"
    },
    inquirer);

askName(
    "", {
    prompt<T extends inquirer.Answers>(questions: inquirer.QuestionCollection<T>): Promise<T> {
        return null as any;
    }
});
