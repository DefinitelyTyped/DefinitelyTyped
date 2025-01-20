export interface JavaClass {
    toString(): string;
    hashCode(): number;
    equals(other: JavaClass): boolean;
}
