// Type definitions for inquirer-npm-name 3.0
// Project: https://github.com/SBoudrias/inquirer-npm-name
// Definitions by: manuth <https://github.com/manuth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// TypeScript Version: 2.3

import { Inquirer, Answers, Question } from "inquirer";

declare function askName(name: string | Question, inquirer: Inquirer): Promise<{ [key: string]: string }>;
export = askName;
