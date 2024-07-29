// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/GhidraFunctionTag.html

export interface GhidraFunctionTag {
  delete(): void;
  getComment(): string;
  getId(): number;
  getName(): string;
  setComment(comment: string): void;
  setName(name: string): void;
}
