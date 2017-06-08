import { Strarray } from './str-array';
import { Tree } from './tree';
import { Index } from './index';

export class CheckoutOptions {
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    version?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    checkoutStrategy?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    disableFilters?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    dirMode?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    fileMode?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    fileOpenFlags?: number;
    /**
     *
     *
     * @type {number}
     * @memberof CheckoutOptions
     */
    notifyFlags?: number;
    /**
     *
     *
     * @type {*}
     * @memberof CheckoutOptions
     */
    notifyCb?: any;
    /**
     *
     *
     * @type {undefined}
     * @memberof CheckoutOptions
     */
    notifyPayload?: undefined;
    /**
     *
     *
     * @type {*}
     * @memberof CheckoutOptions
     */
    progressCb?: any;
    /**
     *
     *
     * @type {undefined}
     * @memberof CheckoutOptions
     */
    progressPayload?: undefined;
    /**
     *
     *
     * @type {Strarray}
     * @memberof CheckoutOptions
     */
    paths?: Strarray;
    /**
     *
     *
     * @type {Tree}
     * @memberof CheckoutOptions
     */
    baseline?: Tree;
    /**
     *
     *
     * @type {Index}
     * @memberof CheckoutOptions
     */
    baselineIndex?: Index;
    /**
     *
     *
     * @type {string}
     * @memberof CheckoutOptions
     */
    targetDirectory?: string;
    /**
     *
     *
     * @type {string}
     * @memberof CheckoutOptions
     */
    ancestorLabel?: string;
    /**
     *
     *
     * @type {string}
     * @memberof CheckoutOptions
     */
    ourLabel?: string;
    /**
     *
     *
     * @type {string}
     * @memberof CheckoutOptions
     */
    theirLabel?: string;
    /**
     *
     *
     * @type {*}
     * @memberof CheckoutOptions
     */
    perfdataCb?: any;
    /**
     *
     *
     * @type {undefined}
     * @memberof CheckoutOptions
     */
    perfdataPayload?: undefined;
}
