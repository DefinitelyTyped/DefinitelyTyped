// Type definitions for ts-nameof 3.2
// Project: https://github.com/dsherret/ts-nameof#readme
// Definitions by: David Sherret <https://github.com/dsherret>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

// tslint:disable-next-line no-unnecessary-generics
declare function nameof<T>(func?: (obj: T) => void): string;
declare function nameof(obj: any): string;
declare namespace nameof {
    // tslint:disable-next-line no-unnecessary-generics
    function full<T>(periodIndex?: number): string;
    // tslint:disable-next-line no-unnecessary-generics
    function full<T>(func: (obj: T) => void, periodIndex?: number): string;
    function full(obj: any, periodIndex?: number): string;
    // tslint:disable-next-line no-unnecessary-generics
    function toArray<T>(func: (obj: T) => any[]): string[];
    function toArray(...args: any[]): string[];
}
