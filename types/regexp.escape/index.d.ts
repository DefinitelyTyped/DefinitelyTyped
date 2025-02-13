declare module "regexp.escape" {
    function escape(str: string): string;
    export default escape;
}

declare module "regexp.escape/polyfill" {
    function getPolyfill(): typeof RegExp.escape;
    export default getPolyfill;
}

declare module "regexp.escape/implementation" {
    function escape(str: string): string;
    export default escape;
}

declare module "regexp.escape/shim" {
    function shimRegExpEscape(): typeof RegExp.escape;
    export default shimRegExpEscape;
}

declare module "regexp.escape/auto" {
    global {
        interface RegExpConstructor {
            escape(str: string): string;
        }
    }
}
