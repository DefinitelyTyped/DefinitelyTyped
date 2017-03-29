// Type definitions for title v1.0.0
// Project: https://www.npmjs.com/package/title
// Definitions by: Fahad <https://github.com/fa7ad>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "title"{
    function Title(newtitle: string): void;
    function Title(pattern: string, newtitle?: string): void;
    namespace Title {
        function reset(): void;
    }

    export = Title;
}
