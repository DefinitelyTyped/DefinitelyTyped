// Type definitions for yargs-interactive 2.0
// Project: https://github.com/nanovazquez/yargs-interactive#readme
// Definitions by: Steven Zeck <https://github.com/szeck87>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function yargsInteractive(): yargsInteractive.Interactive;

declare namespace yargsInteractive {
    interface OptionData {
        type: string;
        describe: string;
        default?: string | number | boolean;
        prompt?: string;
        options?: string[];
    }
    interface Option {
        [key: string]: OptionData | { default: boolean };
    }
    interface Interactive {
        usage(usage: string): Interactive;
        interactive(options: Option): Interactive;
        then(callback: (result: any) => any): Interactive;
    }
}

export = yargsInteractive;
