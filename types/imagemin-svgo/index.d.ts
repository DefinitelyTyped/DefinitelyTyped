import { Plugin } from "imagemin";
import { Config as SvgoConfig } from "svgo";

/**
 * SVGO imagemin plugin
 */
declare function imageminSvgo(options?: Options): Plugin;

export type Options = SvgoConfig & {
    /**
     * Pass over SVGs multiple times to ensure all optimizations are applied
     * @default true
     */
    multipass?: boolean | undefined;
};

export default imageminSvgo;
