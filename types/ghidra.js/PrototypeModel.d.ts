import { Varnode } from './Varnode';
import { Address } from './Address';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/PrototypeModel.html

export interface PrototypeModel {
  //equals(obj: java.lang.Object): boolean;
  //getArgLocation(argIndex: number, params: Parameter[], dataType: DataType, program: Program): VariableStorage;
  getExtrapop(): number;
  //getGenericCallingConvention(): GenericCallingConvention;
  getInjectName(): string;
  //getInputListType(): InputListType;
  getKilledByCallList(): Varnode[];
  getLikelyTrash(): Varnode[];
  getName(): string;
  //getNextArgLocation(params: Parameter[], dataType: DataType, program: Program): VariableStorage;
  //getPotentialInputRegisterStorage(prog: Program): VariableStorage[];
  //getReturnAddress(): Varnode[];
  //getReturnLocation(dataType: DataType, program: Program): VariableStorage;
  getStackParameterAlignment(): number;
  getStackParameterOffset(): number;
  getStackshift(): number;
  //getStorageLocations(program: Program, dataTypes: DataType[], addAutoParams: boolean): VariableStorage[];
  getUnaffectedList(): Varnode[];
  hashCode(): number;
  hasInjection(): boolean;
  hasThisPointer(): boolean;
  isConstructor(): boolean;
  isErrorPlaceholder(): boolean;
  isMerged(): boolean;
  isProgramExtension(): boolean;
  //possibleInputParamWithSlot(loc: Address, size: number, res: ParamList.WithSlotRec): boolean;
  //possibleOutputParamWithSlot(loc: Address, size: number, res: ParamList.WithSlotRec): boolean;
  //restoreXml(parser: XmlPullParser, cspec: CompilerSpec): void;
  //saveXml(buffer: java.lang.StringBuilder, injectLibrary: PcodeInjectLibrary): void;
  toString(): string;
}
