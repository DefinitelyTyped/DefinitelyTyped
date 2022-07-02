// Type definitions for cli-welcome 2.2
// Project: https://github.com/ahmadawais/cli-welcome
// Definitions by: Max Programming <https://github.com/max-programming>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface WelcomeOptions {
    title: string;
    tagLine: string;
    description?: string;
    version?: string;
    bgColor?: string;
    color?: string;
    clear?: boolean;
    bold?: boolean;
}

declare function welcome(options: WelcomeOptions): void;

export = welcome;
