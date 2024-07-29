import { FunctionTag } from './FunctionTag';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/FunctionTagManager.html

export interface FunctionTagManager {
  createFunctionTag(name: string, comment: string): FunctionTag;
  //getAllFunctionTags(): java.util.List<? extends FunctionTag>;
  getFunctionTag(id: number): FunctionTag;
  getFunctionTag(name: string): FunctionTag;
  getUseCount(tag: FunctionTag): number;
  isTagAssigned(name: string): boolean;
}
