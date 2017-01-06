// Type definitions for Fluid 1.8.5
// Project: http://fluidapp.com
// Definitions by: Chris Long <https://github.com/cglong>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference path="index.d.ts" />

declare namespace FluidApp {
    interface Fluid {
        applicationPath: string;
        resourcePath: string;
        userscriptPath: string;

        activate(): any;
        hide(): any;
        include(path: string): any;
        terminate(): any;
        unhide(): any;
    }
}
