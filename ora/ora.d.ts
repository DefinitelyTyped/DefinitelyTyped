// Type definitions for ora
// Project: https://github.com/sindresorhus/ora
// Definitions by: Basarat Ali Syed <https://github.com/basarat/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'ora' {
    type Color = 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan' | 'white' | 'gray';
    type Text = string;
    interface Options {
        text?: Text;
        spinner?: string | { interval?: number; frames: string[]; }
        color?: Color;
        stream?: any;
    }
    interface Instance {
        start(): void;
        stop(): void;
        clear(): void;
        frame(): void;
        render(): void;
        text: Text;
        color: Color;
    }
    function ora(options: Options | Text): Instance;
    export = ora;
}
