export class Launcher {
    static generateId(): string;

    constructor(emitter: NodeJS.EventEmitter, injector: any);

    // TODO: Can this return value ever be typified?
    launch(names: string[], protocol: string, hostname: string, port: number, urlRoot: string): any[];
    kill(id: string, callback: () => void): boolean;
    restart(id: string): boolean;
    killAll(callback: () => void): void;
    areAllCaptured(): boolean;
    markCaptured(id: string): void;
}
