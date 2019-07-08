import inquirer = require("inquirer");
import InputPrompt = require("inquirer/lib/prompts/input");
{
    new inquirer.Separator("");
    const promptModule = inquirer.createPromptModule();
    promptModule.prompts[""]; // $ExpectType PromptConstructor
    promptModule.registerPrompt("", InputPrompt); // $ExpectType PromptModule
    promptModule.restoreDefaultPrompts();
}
{
    inquirer.prompt(
        [
            {
                message: "",
                default: ""
            }
        ]);
}
{
    new inquirer.ui.BottomBar();
    new inquirer.ui.Prompt(inquirer.prompt.prompts);
}

interface ChalkQuestionOptions extends inquirer.InputQuestionOptions {
    previewColors: boolean;
}

interface ChalkQuestion extends ChalkQuestionOptions {
    type: "chalk";
}

class ChalkPrompt extends InputPrompt {
    /* stuff */
}

inquirer.registerPrompt("chalk", ChalkPrompt);

declare module "inquirer" {
    interface QuestionMap<T> {
        chalk: ChalkQuestion;
    }
}

inquirer.prompt([
    {
        type: "chalk",
        previewColors: true
    }
]);
