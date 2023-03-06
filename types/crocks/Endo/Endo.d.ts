declare function Endo(val: (...val: any[]) => any): Endo;

declare class Endo {
    concat(val: Endo): Endo;
    runWith(val: any): any;
    valueOf(): any;
    static empty(): Endo;
    static of(val: (...val: any[]) => any): Endo;
}

export default Endo;
