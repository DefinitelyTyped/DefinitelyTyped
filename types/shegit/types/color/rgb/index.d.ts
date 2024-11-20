export type RgbArrayTemplate<Component> = [Component?, Component?, Component?];
export interface RgbObjTemplate<Component> {
    r?: Component;
    g?: Component;
    b?: Component;
}
export type RgbComponent = number;
export type RgbFuncComponent = (...args: any[]) => RgbComponent;
export type RgbMultipleComponent = RgbFuncComponent | RgbComponent;
export type RgbArray = RgbArrayTemplate<RgbComponent>;
export type RgbArrayFunc = RgbArrayTemplate<RgbMultipleComponent>;
export type FuncRgbArray = (...args: any[]) => RgbArrayFunc;
export type RgbObj = RgbObjTemplate<RgbComponent>;
export type RgbObjFunc = RgbObjTemplate<RgbMultipleComponent>;
export type FuncRgbObj = (...args: any[]) => RgbObjFunc;
