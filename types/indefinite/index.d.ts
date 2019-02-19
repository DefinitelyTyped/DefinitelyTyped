// Type definitions for indefinite 2.2
// Project: https://github.com/tandrewnichols/indefinite
// Definitions by: My Self <https://github.com/me>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "indefinite" {
    interface Options {
        capitalize?: boolean;
        caseInsensitive?: boolean;
        numbers?: "colloquial";
    }
    export default function(word: string | number, opts?: Options): string;
}
  