// Type definitions for less2sass 1.0
// Project: https://github.com/ekryski/less2sass, http://erickryski.com
// Definitions by: William Lohan <https://github.com/gatimus>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare class Less2Sass {
    convert(file: string): string;
}

declare const less2sass: Less2Sass;
export = less2sass;
