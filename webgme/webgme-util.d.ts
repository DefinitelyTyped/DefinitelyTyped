

declare namespace Util {

    class Canon {
        stringify(thing: any): string;
        parse(thing: any): string;
    }

    export let CANON: Canon;

    export function ASSERT(condition: boolean): never;
}