// Type definitions for yamljs 0.2.1
// Project: https://github.com/jeremyfa/yaml.js
// Definitions by: Tim Jonischkat <http://www.tim-jonischkat.de>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

declare module "yamljs" {

    export function load(path : string) : any;

    export function stringify(nativeObject : any, inline? : number, spaces? : number) : string;

    export function parse(yamlString : string) : any;

}