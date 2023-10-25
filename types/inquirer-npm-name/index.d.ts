import { PromptFunction, Question } from "inquirer";

declare function askName(
    name: string | Question,
    inquirer: { prompt: PromptFunction },
): Promise<{ [key: string]: string }>;
export = askName;
