import { EventEmitter } from "events";

import { Bundle } from "../dependencies";
import Lasso, { LassoConfig } from "../Lasso";
import LassoContext from "../LassoContext";

export default interface Writer extends EventEmitter {
    impl: any;
    lasso: Lasso;
    config: LassoConfig;

    (impl: any): Writer;
    getLasso(): Lasso;
    setLasso(lasso: Lasso): void;
    getInPlaceUrlForFile(path: string, lassoContext: LassoContext): string | null;
    getInPlaceUrlForBundle(bundle: Bundle, lassoContext: LassoContext): string;
    writeBundle(bundle: Bundle, onBundleWrittenCallback: any, lassoContext: LassoContext, callback: any): any;
    writeResource(path: string, lassoContext: LassoContext, callback: any): any;
    checkBundleUpToDate(bundle: Bundle, lassoContext: LassoContext, callback: any): any;
    checkResourceUpToDate(path: string, lassoContext: LassoContext, callback: any): any;
    writeBundles(iteratorFunc: any, onBundleWrittenCallback: any, lassoContext: LassoContext, callback: any): void;
    buildResourceCacheKey(cacheKey: string, lassoContext: LassoContext): string;
}
