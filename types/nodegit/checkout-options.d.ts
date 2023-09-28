import { Index } from "./index";
import { Strarray } from "./str-array";
import { Tree } from "./tree";

export class CheckoutOptions {
    version?: number | undefined;
    checkoutStrategy?: number | undefined;
    disableFilters?: number | undefined;
    dirMode?: number | undefined;
    fileMode?: number | undefined;
    fileOpenFlags?: number | undefined;
    notifyFlags?: number | undefined;
    notifyCb?: any;
    notifyPayload?: undefined;
    progressCb?: any;
    progressPayload?: undefined;
    paths?: Strarray | string | string[] | undefined;
    baseline?: Tree | undefined;
    baselineIndex?: Index | undefined;
    targetDirectory?: string | undefined;
    ancestorLabel?: string | undefined;
    ourLabel?: string | undefined;
    theirLabel?: string | undefined;
    perfdataCb?: any;
    perfdataPayload?: undefined;
    [key: string]: any;
}
