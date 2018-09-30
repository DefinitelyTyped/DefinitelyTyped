// Type definitions for webprogbase-console-view 1.1
// Project: https://github.com/DevInCube/webprogbase-console-view#readme
// Definitions by: Veetaha <https://github.com/veetaha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface BasicObject<T> {
    [key: string]: T;
}

export interface DataLink {
    description: string;
    data: any;
}

export type FormFields = BasicObject<string>; /* key: state name, value: description */
export type StateLinks = BasicObject<string | DataLink>;
export type FormResult = BasicObject<string>;

// tslint:disable-next-line no-unnecessary-class
export class InputForm {
    constructor(nextState: string, fieldsObject: FormFields);
}

export class Request {
    state: string;
    data: any;
    /* data may also contain FormResult forwarded from state using InputForm, null by default. */
}

export class Response {
    send(text: string, statesOrForm?: StateLinks | InputForm): void;
    redirect(toState: string, data?: any): void;
}

/************************************************************************************/

export type ServerAppHandler = (req: Request, res: Response) => void;
export class ServerApp {
    constructor();

    /**
     * Register a request handler function for the state
     * @param stateName name of the state
     * @param handler state request handler function
     */
    use(stateName: string, handler: ServerAppHandler): void;

    /**
     * Start listening for new clients' connections
     * @param port port number where server will listen for new connections
     */
    listen(port: number): void;
}

/****************************************************************************************/

export class ConsoleBrowser {
    constructor();

    open(serverPort: number): void;
    sendRequest(req: Request): void;
}
