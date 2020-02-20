// Type definitions for better-bem 1.1
// Project: https://github.com/LuudJacobs/better-bem#readme
// Definitions by: Fernando Mendes <https://github.com/fernando-msj>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type BEMModifier = string | { [key: string]: any };

export interface BEMClass {
    cn: string;
    mod: (modifiers: BEMModifier | BEMModifier[]) => BEMClass;
    el: (element: string | string[]) => BEMClass;
}

declare function BEM(blockName: string | string[], mapping?: { [key: string]: string }): BEMClass;

export default BEM;
