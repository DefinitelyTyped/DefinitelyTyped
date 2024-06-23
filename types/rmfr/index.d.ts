import rimraf = require("rimraf");

declare namespace rmfr {
    type Options = rimraf.Options & {
        glob?: rimraf.Options["glob"] | true | undefined;
        disableGlob?: never | undefined;
    };
}
declare function rmfr(path: string, options?: rmfr.Options): Promise<void>;

export = rmfr;
