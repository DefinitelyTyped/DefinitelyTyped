import { Argv } from "yargs";

declare function yargsInteractive(): yargsInteractive.Interactive;

declare namespace yargsInteractive {
    interface OptionData {
        type: "input" | "number" | "confirm" | "list" | "rawlist" | "expand" | "checkbox" | "password" | "editor";
        describe: string;
        default?: string | number | boolean | any[] | undefined;
        prompt?: "always" | "never" | "if-no-arg" | "if-empty" | undefined;
        choices?: string[] | undefined;
    }
    interface Option {
        [key: string]: OptionData | { default: boolean };
    }
    interface Interactive extends Argv {
        usage(usage: string): Interactive;
        interactive(options: Option): Interactive;
        then(callback: (result: any) => any): Interactive;
    }
}

export = yargsInteractive;
