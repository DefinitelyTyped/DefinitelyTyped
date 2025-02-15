declare function escape(str: string): string;
declare namespace escape {
    function implementation(str: string): string;
    function getPolyfill(): typeof implementation;
    function shim(): typeof implementation;
}

export = escape;
