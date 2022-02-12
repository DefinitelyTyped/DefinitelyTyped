export = addEventListener;
declare function addEventListener(el: any, eventName: any, listener: any, useCapture: any): any;
declare namespace addEventListener {
    export { removeEventListener };
    export { addEventListener };
}
declare function removeEventListener(el: any, eventName: any, listener: any, useCapture: any): any;
