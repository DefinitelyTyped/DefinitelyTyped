// Type definitions for prompt 1.1
// Project: https://github.com/flatiron/prompt#readme
// Definitions by: Florian Imdahl <https://github.com/ffflorian>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

import { EventEmitter } from 'events';
import { ReadStream, WriteStream } from 'tty';
import 'revalidator';

declare namespace prompt {
    type GetCallback<T> = (err: Error | null, result: T) => void;
    type AddCallback = (err: Error | null) => void;
    type AskFunction = () => boolean;

    type RevalidatorSchema = Partial<Revalidator.ISchema<any>> & {
        ask?: AskFunction;
        name?: string;
        raw?: [string, string];
    };

    interface Properties {
        [name: string]: RevalidatorSchema | string;
    }

    interface Schema {
        properties: Properties;
    }

    interface History {
        property: RevalidatorSchema | string;
        value: string;
    }

    interface StartOptions {
        allowEmpty?: boolean;
        colors?: boolean;
        delimiter?: string;
        memory?: number;
        message?: string;
        noHandleSIGINT?: boolean;
        stdin?: ReadStream;
        stdout?: WriteStream;
    }
}

declare class prompt extends EventEmitter {
    on(event: 'invalid', listener: (prop: prompt.RevalidatorSchema | string, line: number) => void): this;
    on(event: 'prompt', listener: (prop: prompt.RevalidatorSchema | string) => void): this;
    on(event: 'pause' | 'resume' | 'SIGINT' | 'start' | 'stop', listener: () => void): this;

    static colors: boolean;
    static delimiter: string;
    static message: string;
    static override?: any;
    static version: string;

    static addProperties(obj: any, values: Array<string | prompt.RevalidatorSchema>): Promise<void>;
    static addProperties(
        obj: any,
        values: Array<string | prompt.RevalidatorSchema>,
        callback: prompt.GetCallback<prompt.Properties>,
    ): void;
    static get<T extends prompt.Properties>(
        values: Array<keyof T | prompt.Schema | prompt.RevalidatorSchema>,
    ): Promise<T>;
    static get<T extends prompt.Properties>(
        values: Array<keyof T | prompt.Schema | prompt.RevalidatorSchema>,
        callback: prompt.GetCallback<T>,
    ): void;
    static history(name?: string | number): prompt.History | null;
    static start(options?: prompt.StartOptions): void;
}

export = prompt;
