// Definition taken from:
// https://github.com/LuudJacobs/better-bem#classname-parameter-usage
type Parameter = string | Record<string, any>;

export type BEMParameter = Parameter | Parameter[];

export interface BEMClass {
    cn: string;
    mod: (modifiers: BEMParameter) => BEMClass;
    el: (element: BEMParameter) => BEMClass;
}

declare function bem(
    classNames?: BEMParameter,
    mods?: BEMParameter,
    classNameMap?: Record<string, string>,
    strict?: boolean,
    glue?: Record<string, string>,
): BEMClass;

export default bem;
