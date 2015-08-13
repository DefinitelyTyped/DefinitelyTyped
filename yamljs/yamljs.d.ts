// Type definitions for yamljs 0.2.3
// Project: https://github.com/jeremyfa/yaml.js
// Definitions by: Tim Jonischkat <http://www.tim-jonischkat.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare var YAML: {
    load(path : string) : any;

    stringify(nativeObject : any, inline? : number, spaces? : number) : string;

    parse(yamlString : string) : any;
};

declare module "yamljs" {
    export = YAML;
}
