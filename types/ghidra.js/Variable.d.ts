import { Varnode } from './Varnode';
import { Address } from './Address';
import { Program } from './Program';
import { DataType } from './DataTypeManager';
import { GhidraFunction } from './GhidraFunction';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/Variable.html

export interface Variable {
  getComment(): string;
  getDataType(): DataType;
  //getFirstStorageVarnode(): Varnode;
  getFirstUseOffset(): number;
  getGhidraFunction(): GhidraFunction;
  getLastStorageVarnode(): Varnode;
  getLength(): number;
  getMinAddress(): Address;
  getName(): string;
  getProgram(): Program;
  //getRegister(): Register;
  //getRegisters(): java.util.List<Register>;
  //getSource(): SourceType;
  getStackOffset(): number;
  //getSymbol(): Symbol;
  //getVariableStorage(): VariableStorage;
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
  //setDataType(type: DataType, alignStack: boolean, force: boolean, source: SourceType): void;
  //setDataType(type: DataType, storage: VariableStorage, force: boolean, source: SourceType): void;
  //setDataType(type: DataType, source: SourceType): void;
  //setName(name: string, source: SourceType): void;
}
