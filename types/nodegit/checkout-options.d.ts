import { Strarray } from './str-array';
import { Tree } from './tree';
import { Index } from './index';

export interface CheckoutOptions {
    version?: number;
    checkoutStrategy?: number;
    disableFilters?: number;
    dirMode?: number;
    fileMode?: number;
    fileOpenFlags?: number;
    notifyFlags?: number;
    notifyCb?: any;
    notifyPayload?: void;
    progressCb?: any;
    progressPayload?: void;
    paths?: Strarray;
    baseline?: Tree;
    baselineIndex?: Index;
    targetDirectory?: string;
    ancestorLabel?: string;
    ourLabel?: string;
    theirLabel?: string;
    perfdataCb?: any;
    perfdataPayload?: void;
}
