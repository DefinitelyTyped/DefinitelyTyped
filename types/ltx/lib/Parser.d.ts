/// <reference types="node" />
import { EventEmitter } from 'events';
import { Element } from './Element';

export class Parser extends EventEmitter {
    constructor(options?: ParserOptions);

    write(data: string): void;
    end(data: string): void;
}

export interface ParserOptions {
    Parser?: typeof Parser;
    Element?: typeof Element;
}
