// Type definitions for Alexa SDK for Node.js v1.0.3
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by: Pete Beegle <https://github.com/petebeegle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'alexa-sdk' {
    export function handler(event: Request, context: Context, callback?: () => void): AlexaHandler;
    export function CreateStateHandler(state: string, obj: any): any;
    export var StateString: string;

    interface AlexaHandler {
        _event: any;
        _context: any;
        _callback: any;
        state: any;
        appId: any;
        response: any;
        dynamoDBTableName: any;
        saveBeforeResponse: boolean;
        registerHandlers: (...handlers: any[]) => any;
        execute: () => void;
    }

    interface Handler {
        on: any;
        emit: any;
        emitWithState: any;
        state: any;
        handler: any;
        event: any;
        attributes: any;
        context: any;
        name: any;
        isOverriden: any;
    }

    interface Request {
        version: string;
        request: any;
        session: any;
    }

    interface Context {
        callbackWaitsForEmptyEventLoop: boolean;
        logGroupName: string;
        logStreamName: string;
        functionName: string;
        memoryLimitInMB: string;
        functionVersion: string;
        invokeid: string;
        awsRequestId: string;
    }
}