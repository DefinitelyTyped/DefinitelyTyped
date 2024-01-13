declare function isStream(obj: any): boolean;
declare namespace isStream {
    function isReadable(obj: any): boolean;
    function isWritable(obj: any): boolean;
    function isDuplex(obj: any): boolean;
}

export = isStream;
