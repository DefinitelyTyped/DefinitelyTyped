import { Strarray } from './str-array';
import { Tree } from './tree';
import { Index } from './index';

export class CheckoutOptions {
    version?: number;
    checkoutStrategy?: number;
    disableFilters?: number;
    dirMode?: number;
    fileMode?: number;
    fileOpenFlags?: number;
    notifyFlags?: number;
    notifyCb?: any;
    notifyPayload?: undefined;
    progressCb?: any;
    progressPayload?: undefined;
    paths?: Strarray | string | string[];
    baseline?: Tree;
    baselineIndex?: Index;
    targetDirectory?: string;
    ancestorLabel?: string;
    ourLabel?: string;
    theirLabel?: string;
    perfdataCb?: any;
    perfdataPayload?: undefined;
    [key: string]: any;
}
