import { Plugin } from "imagemin";
import { OptimizeOptions as SvgoOptions } from "svgo";

/**
 * SVGO imagemin plugin
 */
declare function imageminSvgo(options?: Options): Plugin;

export type Options = SvgoOptions & {
    /**
     * Pass over SVGs multiple times to ensure all optimizations are applied
     * @default true
     */
    multipass?: boolean | undefined;
};

export default imageminSvgo;
