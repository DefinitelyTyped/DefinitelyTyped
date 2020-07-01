// Type definitions for yargs-interactive 2.1
// Project: https://github.com/nanovazquez/yargs-interactive#readme
// Definitions by: Steven Zeck <https://github.com/szeck87>
//                 Nano Vazquez <https://github.com/nanovazquez>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function yargsInteractive(): yargsInteractive.Interactive;

declare namespace yargsInteractive {
    interface OptionData {
        type: 'input' | 'number' | 'confirm' | 'list' | 'rawlist' | 'expand' | 'checkbox' | 'password' | 'editor';
        describe: string;
        default?: string | number | boolean | any[];
        prompt?: 'always' | 'never' | 'if-no-arg' | 'if-empty';
        choices?: string[];
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
