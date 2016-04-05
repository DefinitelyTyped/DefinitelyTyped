// Type definitions for Cldr.js 0.4.4
// Project: https://github.com/rxaviers/cldrjs
// Definitions by: Raman But-Husaim <https://github.com/RamanBut-Husaim>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// The definition file for event module.

declare namespace cldr {
    interface CldrStatic {
        on(event:string, listener:(path:string, value:any) => void): void;
        once(event:string, listener:(path:string, value:any) => void): void;
        off(event:string, listener:(path:string, value:any) => void): void;
    }

    interface CldrFactory {
        on(event:string, listener:(path:string, value:any) => void): void;
        once(event:string, listener:(path:string, value:any) => void): void;
        off(event:string, listener:(path:string, value:any) => void): void;
    }
}

declare module "cldr/event" {
    export = cldr;
}
