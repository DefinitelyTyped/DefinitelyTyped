import { GhidraFunctionTag } from "./GhidraFunctionTag";
import type { JavaClass } from "./JavaClass";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/GhidraFunctionTagManager.html

export interface GhidraFunctionTagManager extends JavaClass {
    createGhidraFunctionTag(name: string, comment: string): GhidraFunctionTag;
    getGhidraFunctionTag(id: number): GhidraFunctionTag;
    getGhidraFunctionTag(name: string): GhidraFunctionTag;
    getUseCount(tag: GhidraFunctionTag): number;
    isTagAssigned(name: string): boolean;
}
