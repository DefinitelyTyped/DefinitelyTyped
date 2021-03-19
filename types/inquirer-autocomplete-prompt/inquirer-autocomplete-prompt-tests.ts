import AutocompletePrompt = require("inquirer-autocomplete-prompt");
import inquirer = require("inquirer");

inquirer.registerPrompt("autocomplete", AutocompletePrompt);

declare module "inquirer" {
    interface QuestionMap<T> {
        autocomplete: AutocompletePrompt.AutocompleteQuestionOptions;
    }
}

inquirer.prompt([
    {
        type: "autocomplete",
        name: "test autocomplete",
        message: "Test message",
        source: (answersSoFar: inquirer.Answers, input: string | undefined) => Promise.resolve("ok"),
        suggestOnly: true,
        prefix: "123",
    },
]);
