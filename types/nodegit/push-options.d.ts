import { RemoteCallbacks } from './remote-callbacks';
import { Strarray } from './str-array';
import { ProxyOptions } from './proxy-options';

export interface PushOptions {
    version?: number;
    pbParallelism?: number;
    callbacks?: RemoteCallbacks;
    customHeaders?: Strarray;
    proxyOpts?: ProxyOptions;
    [key: string]: any;
}
