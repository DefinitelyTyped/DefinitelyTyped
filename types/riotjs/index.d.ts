/// <reference types="jquery" />
/// <reference path="riotjs-render.d.ts" />

interface JQueryStatic {
    riot: string;
    observable(el: any): any;
    route(to: any): void;
}
