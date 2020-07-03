// Type definitions for cxs 6.2
// Project: https://github.com/cxs-css/cxs
// Definitions by: Daniel Eden <https://github.com/daneden>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// Minimum TypeScript Version 3.9
import * as CSS from 'csstype';

declare namespace cxs {
    type CSSProperties = CSS.Properties<string | number>;
    type CSSPseudos = { [K in CSS.Pseudos]?: CSSObject };

    interface CSSObject extends CSSProperties, CSSPseudos {
        [key: string]: CSSObject | string | number | undefined;
    }
}

declare const cxs: {
    (styles: cxs.CSSObject): string;
    /** Returns cached CSS as a string for server-side rendering */
    css: () => string;
    /** Resets the CSS cache for future renders */
    reset: () => void;
    /** Sets a custom className prefix */
    prefix: (val: string) => void;
};

export = cxs;
