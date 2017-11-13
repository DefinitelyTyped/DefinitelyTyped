// Type definitions for easy-x-headers
// Project: https://github.com/DeadAlready/easy-x-headers
// Definitions by: Karl Düüna <https://github.com/DeadAlready>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2




import express = require('express');

export interface BodyAgent {
    send(data: Object): any;
    attach(arg1: any, arg2?: any): any;
}

export interface Agent {
    get(url: string): any;
    delete(url: string): any;
    post(url: string): BodyAgent;
    patch(url: string): BodyAgent;
    put(url: string): BodyAgent;
}

interface getAgent {
    (...args: any[]): Agent
}

export declare function getAgentFactory(app: express.Application, transform?: Function): getAgent;
