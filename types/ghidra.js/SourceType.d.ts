import type { JavaClass } from "./JavaClass";
export interface SourceType extends JavaClass {
    getDisplayString(): string;
    isHigherPriorityThan(source: SourceType): boolean;
    isLowerPriorityThan(source: SourceType): boolean;
}
