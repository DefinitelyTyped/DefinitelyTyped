import { RemoteCallbacks } from './remote-callbacks';
import { Strarray } from './str-array';
import { ProxyOptions } from './proxy-options';

export interface PushOptions {
    /**
     *
     *
     * @type {number}
     * @memberof PushOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof PushOptions
     */
    pbParallelism?: number;
    /**
     *
     *
     * @type {RemoteCallbacks}
     * @memberof PushOptions
     */
    callbacks?: RemoteCallbacks;
    /**
     *
     *
     * @type {Strarray}
     * @memberof PushOptions
     */
    customHeaders: Strarray;
    /**
     *
     *
     * @type {ProxyOptions}
     * @memberof PushOptions
     */
    proxyOpts: ProxyOptions;
}
