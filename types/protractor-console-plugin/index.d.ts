export interface Config {
    failOnWarning?: boolean;
    failOnError?: boolean;
    logWarnings?: boolean;
    exclude?: Array<string | RegExp>;
}
