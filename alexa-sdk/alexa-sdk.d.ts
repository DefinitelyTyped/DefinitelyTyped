// Type definitions for Alexa SDK for Node.js v1.0.3
// Project: https://github.com/alexa/alexa-skills-kit-sdk-for-nodejs
// Definitions by: Pete Beegle <https://github.com/petebeegle>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module 'alexa-sdk' {
    var handler: (event: any, context: any, callback?: any) => AlexaHandler;

    interface AlexaHandler {
        _event: any;
        _context: any;
        _callback: any;
        state: any;
        appId: any;
        response: any;
        dynamoDBTableName: any;
        saveBeforeResponse: any;
        registerHandlers: any;
        execute: any;
    }
}