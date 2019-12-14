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

interface ChalkQuestionOptions<T extends inquirer.Answers = inquirer.Answers> extends inquirer.InputQuestionOptions<T> {
    previewColors: boolean;
}

interface ChalkQuestion<T extends inquirer.Answers = inquirer.Answers> extends ChalkQuestionOptions<T> {
    type: "chalk";
}

class ChalkPrompt extends InputPrompt {
    /* stuff */
}

inquirer.registerPrompt("chalk", ChalkPrompt);

declare module "inquirer" {
    interface QuestionMap<T> {
        chalk: ChalkQuestion<T>;
    }
}

inquirer.prompt([
    {
        type: "chalk",
        previewColors: true
    }
]);
