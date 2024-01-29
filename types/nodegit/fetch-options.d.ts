import { RemoteCallbacks } from "./remote-callbacks";
import { Strarray } from "./str-array";

export class FetchOptions {
    version?: number | undefined;
    callbacks?: RemoteCallbacks | undefined;
    prune?: number | undefined;
    updateFetchhead?: number | undefined;
    downloadTags?: number | undefined;
    customHeaders?: Strarray | string | string[] | undefined;
    proxyOpts?: any;
    [key: string]: any;
}
