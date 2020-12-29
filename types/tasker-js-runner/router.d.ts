export enum ROUTE_TYPE {
    Enter = 'enter',
    Exit = 'exit'
}

export function parseCallerId(callerId: string) : { type: string, route: string }

export interface _errorHandler {
    enter() : void;

    exit() : void;
}

export default class Router {
    context: Window;
    routes: { _errorHandler: _errorHandler };

    constructor(routes: { _errorHandler: _errorHandler }, context: Window);

    dispatch(locals: { [ variableName: string ]: string }) : Promise<void>;
}