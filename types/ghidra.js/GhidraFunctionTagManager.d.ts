import { GhidraFunctionTag } from './GhidraFunctionTag';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/GhidraFunctionTagManager.html

export interface GhidraFunctionTagManager {
  createGhidraFunctionTag(name: string, comment: string): GhidraFunctionTag;
  //getAllGhidraFunctionTags(): java.util.List<? extends GhidraFunctionTag>;
  getGhidraFunctionTag(id: number): GhidraFunctionTag;
  getGhidraFunctionTag(name: string): GhidraFunctionTag;
  getUseCount(tag: GhidraFunctionTag): number;
  isTagAssigned(name: string): boolean;
}
