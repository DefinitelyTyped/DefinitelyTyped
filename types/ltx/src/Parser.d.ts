import { EventEmitter } from 'events';
import Element from './Element';

export default class Parser extends EventEmitter {
    static DefaultParser: typeof Parser;
    static DefaultElement: typeof Element;

    constructor(options?: ParserOptions);

    write(data: string | { toString(): string }): void;
    end(data: string | { toString(): string }): void;
}

export interface ParserOptions {
    Parser?: typeof Parser | undefined;
    Element?: typeof Element | undefined;
}
