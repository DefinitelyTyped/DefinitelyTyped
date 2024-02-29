/// <reference types="node" />

declare namespace XmlPoke { // ghost module
    interface Transform {
        (node: Node, value: string): Value;
    }
    type Value = string | boolean | number | XmlValue | CDataValue | PathToValueMap | Transform;
    type PathToValueMap = {
        [xpath: string]: Value;
    };
    interface API {
        add(xpath: string, value: Value): API;
        add(map: PathToValueMap): API;
        set(xpath: string, value: Value): API;
        set(map: PathToValueMap): API;
        setOrAdd(xpath: string, value: Value): API;
        setOrAdd(map: PathToValueMap): API;
        remove(xpath: string): API;
        clear(xpath: string): API;
        withBasePath(xpath: string): API;
        addNamespace(prefix: string, uri: string): API;
        errorOnNoMatches(): API;
        ensure(xpath: string): API;
    }
    interface CDataValue {
        value: string;
    }
    interface XmlValue {
        value: string;
    }
}

declare module "xmlpoke" {
    const xmlpoke: {
        (xml: string, modify: (api: XmlPoke.API) => void): string;
        CDataValue: new(value: string) => XmlPoke.CDataValue;
        XmlString: new(value: string) => XmlPoke.XmlValue;
    };
    namespace xmlpoke {}
    export = xmlpoke;
}
