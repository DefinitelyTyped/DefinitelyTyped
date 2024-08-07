import type { JavaClass } from './JavaClass';
import { Varnode } from './Varnode';
import { Address } from './Address';
import { Program } from './Program';
import { DataType } from './DataTypeManager';
import { GhidraFunction } from './GhidraFunction';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/Variable.html

export interface Variable extends JavaClass {
  getComment(): string;
  getDataType(): DataType;
  getFirstUseOffset(): number;
  getGhidraFunction(): GhidraFunction;
  getLastStorageVarnode(): Varnode;
  getLength(): number;
  getMinAddress(): Address;
  getName(): string;
  getProgram(): Program;
  getStackOffset(): number;
  hasAssignedStorage(): boolean;
  hasStackStorage(): boolean;
  isCompoundVariable(): boolean;
  isEquivalent(variable: Variable): boolean;
  isMemoryVariable(): boolean;
  isRegisterVariable(): boolean;
  isStackVariable(): boolean;
  isUniqueVariable(): boolean;
  isValid(): boolean;
  setComment(comment: string): void;
}
