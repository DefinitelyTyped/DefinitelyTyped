import { AddressSpace } from './AddressSpace';
import { PrototypeModel } from './PrototypeModel';
import { Address } from './Address';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/CompilerSpecID.html

export interface CompilerSpecID {
  compareTo(o: CompilerSpecID): number;
  getIdAsString(): string;
  hashCode(): number;
  toString(): string;
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/CompilerSpec.html

export interface CompilerSpec {
  //applyContextSettings(ctx: DefaultProgramContext): void;
  doesCDataTypeConversions(): boolean;
  //findBestCallingConvention(params: Parameter[]): PrototypeModel;
  getAddressSpace(spaceName: string): AddressSpace;
  getAllModels(): PrototypeModel[];
  getCallingConvention(name: string): PrototypeModel;
  getCallingConventions(): PrototypeModel[];
  //getCompilerSpecDescription(): CompilerSpecDescription;
  getCompilerSpecID(): CompilerSpecID;
  //getDataOrganization(): DataOrganization;
  //getDecompilerOutputLanguage(): DecompilerLanguage;
  getDefaultCallingConvention(): PrototypeModel;
  //getLanguage(): Language;
  //getPcodeInjectLibrary(): PcodeInjectLibrary;
  getProperty(key: string): string;
  getProperty(key: string, defaultString: string): string;
  getPropertyAsBoolean(key: string, defaultBoolean: boolean): boolean;
  getPropertyAsInt(key: string, defaultInt: number): number;
  //getPropertyKeys(): java.util.Set<java.lang.String>;
  //getPrototypeEvaluationModel(modelType: CompilerSpec.EvaluationModelType): PrototypeModel;
  getStackBaseSpace(): AddressSpace;
  //getStackPointer(): Register;
  getStackSpace(): AddressSpace;
  hasProperty(key: string): boolean;
  isGlobal(addr: Address): boolean;
  isStackRightJustified(): boolean;
  //matchConvention(genericCallingConvention: GenericCallingConvention): PrototypeModel;
  stackGrowsNegative(): boolean;
}
