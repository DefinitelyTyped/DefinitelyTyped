// Type definitions for less2sass 1.0
// Project: https://github.com/ekryski/less2sass
// Definitions by: William Lohan <https://github.com/gatimus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8

declare class Less2Sass {
    convert(file: string): string;
}

declare const less2sass: Less2Sass;
export = less2sass;
