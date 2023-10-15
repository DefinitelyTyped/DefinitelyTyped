// Type definitions for vue-scroll-up 3.0
// Project: https://github.com/5SSS/vue-json-compare
// Definitions by: Vít Stanislav <https://github.com/slaweet>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import Vue from "vue";

type JsonObject = Record<string, any> | Array<Record<string, any>>;

declare class VueJsonCompare extends Vue {
    oldData: JsonObject;
    newData: JsonObject;
}

export default VueJsonCompare;
