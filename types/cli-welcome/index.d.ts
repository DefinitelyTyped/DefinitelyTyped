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
