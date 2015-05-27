/// <reference path="../d3.d.ts" />


declare module D3 {
    interface SuperformulaPath
    {
        superformulaPath(params: number[], n: number, diameter: number): Superformula;
    }


    interface SuperformulaType
    {
        (any: any): any;//hans
        m: number;
        n1: number;
        n2: number;
        n3: number;
        a: number;
        b: number;
    }

    interface Superformula
    {
        (): any;
        type(any: any): any;
        param(name: string, value: number): Superformula;
        size(x: number): Superformula;
        segments(x: number): Superformula;
    }


    interface Base extends Selectors
    {
        superformula: Superformula;
        superformulaPath: SuperformulaPath;
        superformulaTypes: SuperformulaType[];
    }
}
