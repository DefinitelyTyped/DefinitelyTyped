import { RgbComponent, RgbMultipleComponent } from "../..";
export type RgbaArrayTemplate<Component, ComponentAlfa> = [
    Component?,
    Component?,
    Component?,
    ComponentAlfa?,
];
export interface RgbaObjTemplate<Component, ComponentAlfa> {
    r?: Component;
    g?: Component;
    b?: Component;
    a?: ComponentAlfa;
}
export type RgbaComponentAlfa = number;
export type RgbaFuncComponentAlfa = (...args: any[]) => RgbaComponentAlfa;
export type RgbaMultipleComponentAlfa = RgbaComponentAlfa | RgbaFuncComponentAlfa;
export type RgbaArray = RgbaArrayTemplate<RgbComponent, RgbaComponentAlfa>;
export type RgbaArrayFunc = RgbaArrayTemplate<RgbMultipleComponent, RgbaMultipleComponentAlfa>;
export type FuncRgbaArray = (...args: any[]) => RgbaArrayFunc;
export type RgbaObj = RgbaObjTemplate<RgbComponent, RgbaComponentAlfa>;
export type RgbaObjFunc = RgbaObjTemplate<RgbMultipleComponent, RgbaMultipleComponentAlfa>;
export type FuncRgbaObj = (...args: any[]) => RgbaObjFunc;
