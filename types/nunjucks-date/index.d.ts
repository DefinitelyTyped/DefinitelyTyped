declare module "nunjucks-date" {
    export function setDefaultFormat(formatString: string): void;
    export function install(env: any, filterName?: string): void;
}
