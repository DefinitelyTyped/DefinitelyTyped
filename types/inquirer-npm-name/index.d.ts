import { Inquirer, Answers, Question } from "inquirer";

declare function askName(name: string | Question, inquirer: Inquirer): Promise<{ [key: string]: string }>;
export = askName;