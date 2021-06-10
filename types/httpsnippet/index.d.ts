// Type definitions for httpsnippet 1.23
// Project: https://github.com/Kong/httpsnippet
// Definitions by: Marcell Toth <https://github.com/marcelltoth>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { Har, Request } from 'har-format';

/*~ This declaration specifies that the class constructor function
 *~ is the exported object from the file
 */
export = HTTPSnippet;

/*~ Write your module's methods and properties in this class */
declare class HTTPSnippet {
    constructor(data: HTTPSnippet.Data);

    convert(target: string, options?: HTTPSnippet.Options): string | false;

    convert(target: string, client?: string, options?: HTTPSnippet.Options): string | false;

    static addTarget(target: HTTPSnippet.Target): void;

    static addTargetClient(target: string, client: HTTPSnippet.TargetClient): void;

    static availableTargets: string[];

    static extName(target: string): string;
}

declare namespace HTTPSnippet {
    type Data = Har | Request;

    type Options = object;

    interface TargetClientInfo {
        key: string;
        title: string;
        link?: string;
        description?: string;
    }

    interface TargetClient {
        (source: Request, options: Options): string;
        info: TargetClientInfo;
    }

    interface TargetInfo<C extends string> {
        key: string;
        title: string;
        extname: string;
        default: C;
    }

    type Target<C extends string = string> = {
        info: TargetInfo<C>;
    } & Record<C, TargetClient>;
}
