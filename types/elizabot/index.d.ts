declare class ElizaBot {
    quit: boolean;
    memSize: number;

    constructor(noRandomFlag?: boolean);
    transform(text: string): string;
    getInitial(): string;
    getFinal(): string;
    reset(): void;
}

export = ElizaBot;
