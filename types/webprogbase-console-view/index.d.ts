// Type definitions for webprogbase-console-view 1.0
// Project: https://github.com/DevInCube/webprogbase-console-view#readme
// Definitions by: Veetaha <https://github.com/veetaha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface StringToStringMap {
    [key: string]: string;
}

export type FormFields = StringToStringMap;
export type StateLinks = StringToStringMap;
export type FormData   = StringToStringMap;

// tslint:disable-next-line no-unnecessary-class
export class InputForm {
    constructor(nextState: string, fieldsObject: FormFields);
}

export class Request {
    state: string;
    data?: FormData;

    constructor(stateName: string, formData?: InputForm);
}

export class Response {
    send(text: string, statesOrForm?: StateLinks | InputForm): void;
    redirect(toState: string): void;
}

/************************************************************************************/

export type ServerAppHandler = (req: Request, res: Response) => void;
export class ServerApp {
    constructor();

    /**
     * Register a request handler function for the state
     * @param stateName name of the state
     * @param handler   state request handler function
     */
    use(stateName: string, handler: ServerAppHandler): void;

    /**
     * Start listening for new clients' connections
     * @param port  port number where server will listen for new connections
     */
    listen(port: number): void;
}

/****************************************************************************************/

export class ConsoleBrowser {
    constructor();

    open(serverPort: number): void;
    sendRequest(req: Request): void;
}
