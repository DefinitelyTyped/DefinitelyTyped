// Type definitions for webprogbase-console-view 1.2
// Project: https://github.com/DevInCube/webprogbase-console-view#readme
// Definitions by: Veetaha <https://github.com/veetaha>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

export interface BasicObject<T> {
    [key: string]: T;
}
export interface FormFieldDescriptor {
    description: string;
    default?: string;
    auto?: string;
}

export interface StateLinkDescriptor {
    description: string;
    data: BasicObject<any>;
}

export type FormFields = BasicObject<string | FormFieldDescriptor>;
export type StateLinks = BasicObject<string | StateLinkDescriptor>;

export class InputForm {
    constructor(nextState: string, fieldsObject: FormFields);

    // if  private members aren't defined, typescript allows assigning anything to InputForm
    private members: any;
}

export class Request {
    state: string;
    data: BasicObject<any> | null;

    private constructor();
}

export class Response {
    send(text: string, statesOrForm?: StateLinks | InputForm): void;
    redirect(toState: string, data?: BasicObject<any>): void;

    private constructor();
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
