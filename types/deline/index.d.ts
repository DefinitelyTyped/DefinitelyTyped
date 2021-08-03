// Type definitions for deline 1.0
// Project: https://github.com/airbnb/deline#readme
// Definitions by: Iñaki Arroyo <https://github.com/inakiarroyo>
//                 Tim van der Horst <https://github.com/vdh>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function deline(strings: string | TemplateStringsArray, ...values: any[]): string;
export = deline;
