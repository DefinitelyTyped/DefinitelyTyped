// Type definitions for merge-descriptors
// Project: https://github.com/component/merge-descriptors
// Definitions by: Zhiyuan Wang <https://github.com/danny8002/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module 'merge-descriptors' {

    function merge(destination: Object, source: Object): Object;

    function merge(destination: Object, source: Object, redefine: boolean): Object;

    export = merge;
}