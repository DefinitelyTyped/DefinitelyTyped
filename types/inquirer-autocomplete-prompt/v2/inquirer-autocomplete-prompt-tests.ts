import AutocompletePrompt = require("inquirer-autocomplete-prompt");
import inquirer = require("inquirer");

inquirer.registerPrompt("autocomplete", AutocompletePrompt);

declare module "inquirer" {
    interface QuestionMap<T> {
        autocomplete: AutocompletePrompt.AutocompleteQuestionOptions;
    }
}

const choices = ["choice1", "choice2", "choice3", "xyz"];

const search = (input: string | undefined, list: string[]) => {
    if (input === undefined) {
        return new Promise<string[]>(resolve => resolve(list));
    }

    const matches = list
        .map(item => (item.includes(input) ? item : undefined))
        .filter((item): item is string => !!item);
    return new Promise<string[]>(resolve => resolve(matches));
};

inquirer.prompt([
    {
        type: "autocomplete",
        name: "test autocomplete",
        message: "Test question",
        source: (answersSoFar: inquirer.Answers, input: string | undefined) => search(input, choices),
    },
]);
