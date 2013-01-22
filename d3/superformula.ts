
interface ID3superformulaPath
{
    superformulaPath(params: number[], n: number, diameter: number): ID3superformula;
}


interface ID3superformulaType
{
    (any): any;//hans
    m: number;
    n1: number;
    n2: number;
    n3: number;
    a: number;
    b: number;
}

interface ID3superformula
{
    (): any;  
    type(any): any;
    param(name: string, value: number): ID3superformula;
    size(x: number): ID3superformula;
    segments(x: number): ID3superformula;
}
interface ID3Selectors
{

}


interface ID3Base extends ID3Selectors
{
    keys: ID3superformulaType[];
    superformula: ID3superformula;
    superformulaPath: ID3superformulaPath;
    superformulaTypes: ID3superformulaType[];
}
