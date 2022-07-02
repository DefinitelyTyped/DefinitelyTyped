declare function Assign(val: object): Assign;

declare class Assign {
    equals(val: unknown): boolean;
    concat(val: Assign): Assign;
    valueOf(): object;
    static empty(): Assign;
}

export default Assign;
