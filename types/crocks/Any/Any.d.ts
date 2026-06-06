declare function Any(val: unknown): Any;

declare class Any {
    equals(val: unknown): boolean;
    concat(val: Any): Any;
    valueOf(): boolean;
    static empty(): Any;
    static of(val: unknown): Any;
}

export default Any;
