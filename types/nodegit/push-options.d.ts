import { ProxyOptions } from "./proxy-options";
import { RemoteCallbacks } from "./remote-callbacks";
import { Strarray } from "./str-array";

export interface PushOptions {
    version?: number | undefined;
    pbParallelism?: number | undefined;
    callbacks?: RemoteCallbacks | undefined;
    customHeaders?: Strarray | string | string[] | undefined;
    proxyOpts?: ProxyOptions | undefined;
    [key: string]: any;
}
