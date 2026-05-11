import Vue from "vue";

type JsonObject = Record<string, any> | Array<Record<string, any>>;

declare class VueJsonCompare extends Vue {
    oldData: JsonObject;
    newData: JsonObject;
}

export default VueJsonCompare;
