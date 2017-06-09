import { RemoteCallbacks } from './remote-callbacks';
import { Strarray} from './str-array';

export interface FetchOptions {
    /**
     *
     *
     * @type {number}
     * @memberof FetchOptions
     */
    version?: number;
    /**
     *
     *
     * @type {RemoteCallbacks}
     * @memberof FetchOptions
     */
    callbacks?: RemoteCallbacks;
    /**
     *
     *
     * @type {number}
     * @memberof FetchOptions
     */
    prune?: number;
    /**
     *
     *
     * @type {number}
     * @memberof FetchOptions
     */
    updateFetchhead?: number;
    /**
     *
     *
     * @type {number}
     * @memberof FetchOptions
     */
    downloadTags?: number;
    /**
     *
     *
     * @type {Strarray}
     * @memberof FetchOptions
     */
    customHeaders?: Strarray;
    /**
     *
     *
     * @type {*}
     * @memberof FetchOptions
     */
    proxyOpts?: any;
}
