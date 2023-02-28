export class MessageDispatcher {
    static dispose(): void;
    constructor(checkForStage?: boolean);
    mBindings: {};
    checkForStage: boolean;
    on(name: string, callback: (...params: any[]) => void, context?: any): MessageBinding;
    off(...names: string[]): void;
    once(name: string, callback: (...params: any[]) => void, context?: any): MessageBinding;
    post(name: string, ...params: any[]): void;
    get parent(): MessageDispatcher;
    get stage(): any;
    get path(): string;
    private __on;
    private __off;
    private __invoke;
    private __invokeOverheard;
    private __postBubbles;
    private __draftMessage;
    private __checkPath;
}
export namespace MessageDispatcher {
    const mOverheardHandlers: {
        [x: string]: any[];
    };
}
import { MessageBinding } from './MessageBinding';
