// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/FunctionTag.html

export interface FunctionTag {
  delete(): void;
  getComment(): string;
  getId(): number;
  getName(): string;
  setComment(comment: string): void;
  setName(name: string): void;
}
