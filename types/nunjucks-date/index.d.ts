// Type definitions for nunjucks-date
// Project: https://github.com/techmsi/nunjucks-date
// Definitions by: kruncher <https://github.com/kruncher>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "nunjucks-date" {

    export function setDefaultFormat(formatString: string): void;
    export function install(env: any, filterName?: string): void;

}
