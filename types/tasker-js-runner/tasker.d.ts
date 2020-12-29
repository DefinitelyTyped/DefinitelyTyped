export interface taskerUtilities {
    inspect(target: object) : string;

    makeConsole(context: Window) : void;

    getParams(context: Window) : string[] | object[];

    getLocals(context: Window) : { 
        par: string[] | object[]
        caller: string[] | object[], 
        [ key: string ] : object | string
    } | {
        par: string[] | object[],
        caller: string[] | object[],
        [ key: string ] : object | string
    }
}

export function initializeTaskerJs(context: Window) : Window;
