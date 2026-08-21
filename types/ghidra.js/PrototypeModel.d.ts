import { Address } from "./Address";
import type { JavaClass } from "./JavaClass";
import { Varnode } from "./Varnode";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/PrototypeModel.html

export interface PrototypeModel extends JavaClass {
    getExtrapop(): number;
    getInjectName(): string;
    getKilledByCallList(): Varnode[];
    getLikelyTrash(): Varnode[];
    getName(): string;
    getStackParameterAlignment(): number;
    getStackParameterOffset(): number;
    getStackshift(): number;
    getUnaffectedList(): Varnode[];
    hashCode(): number;
    hasInjection(): boolean;
    hasThisPointer(): boolean;
    isConstructor(): boolean;
    isErrorPlaceholder(): boolean;
    isMerged(): boolean;
    isProgramExtension(): boolean;
    toString(): string;
}
