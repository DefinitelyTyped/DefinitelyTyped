// Type definitions for sqs-consumer 3.7
// Project: https://github.com/BBC/sqs-consumer
// Definitions by: Daniel Chao <http://dchao.co/>
//                 Eric Byers <http://github.com/EricByers>
//                 Ezinwa Okpoechi <http://github.com/BrainMaestro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { SQS } from "aws-sdk";

declare namespace Consumer {
    export type ConsumerDone = (error?: Error) => void;

    export interface Options {
        queueUrl: string;
        handleMessage(message: SQS.Message, done: ConsumerDone): any;
        region?: string;
        attributeNames?: string[];
        messageAttributeNames?: string[];
        batchSize?: number;
        visibilityTimeout?: number;
        waitTimeSeconds?: number;
        authenticationErrorTimeout?: number;
        sqs?: SQS;
    }
}

declare class Consumer extends NodeJS.EventEmitter {
    constructor(options: Consumer.Options);
    start(): void;
    stop(): void;
    static create(options: Consumer.Options): Consumer;
}

export = Consumer;
