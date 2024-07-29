import { Address } from './Address';
import { AddressFactory } from './AddressFactory';
import { AddressSpace } from './AddressSpace';
import { Register } from './Register';
import { CompilerSpec, CompilerSpecID } from './CompilerSpec';
import { TaskMonitor } from './TaskMonitor';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/LanguageID.html

export interface LanguageID {
  compareTo(o: LanguageID): number;
  getIdAsString(): string;
  hashCode(): number;
  toString(): string;
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/Language.html

export interface Language {
  //applyContextSettings(ctx: DefaultProgramContext): void;
  getAddressFactory(): AddressFactory;
  //getCompatibleCompilerSpecDescriptions(): java.util.List<CompilerSpecDescription>;
  getCompilerSpecByID(compilerSpecID: CompilerSpecID): CompilerSpec;
  getContextBaseRegister(): Register;
  //getContextRegisters(): java.util.List<Register>;
  getDefaultCompilerSpec(): CompilerSpec;
  getDefaultDataSpace(): AddressSpace;
  //getDefaultMemoryBlocks(): MemoryBlockDefinition[];
  getDefaultSpace(): AddressSpace;
  //getDefaultSymbols(): java.util.List<AddressLabelInfo>;
  getInstructionAlignment(): number;
  //getLanguageDescription(): LanguageDescription;
  getLanguageID(): LanguageID;
  //getManualEntry(instructionMnemonic: string): ManualEntry;
  //getManualException(): java.lang.Exception;
  //getManualInstructionMnemonicKeys(): java.util.Set<java.lang.String>;
  getMinorVersion(): number;
  getNumberOfUserDefinedOpNames(): number;
  //getParallelInstructionHelper(): ParallelInstructionLanguageHelper;
  //getProcessor(): Processor;
  getProgramCounter(): Register;
  getProperty(key: string): string;
  getProperty(key: string, defaultString: string): string;
  getPropertyAsBoolean(key: string, defaultBoolean: boolean): boolean;
  getPropertyAsInt(key: string, defaultInt: number): number;
  //getPropertyKeys(): java.util.Set<java.lang.String>;
  getRegister(addr: Address, size: number): Register;
  getRegister(addrspc: AddressSpace, offset: number, size: number): Register;
  getRegister(name: string): Register;
  //getRegisterNames(): java.util.List<java.lang.String>;
  //getRegisters(): java.util.List<Register>;
  //getRegisters(address: Address): Register[];
  getSegmentedSpace(): string;
  //getSortedVectorRegisters(): java.util.List<Register>;
  getUserDefinedOpName(index: number): string;
  getVersion(): number;
  //getVolatileAddresses(): AddressSetView;
  hasManual(): boolean;
  hasProperty(key: string): boolean;
  isBigEndian(): boolean;
  isVolatile(addr: Address): boolean;
  //parse(buf: MemBuffer, context: ProcessorContext, inDelaySlot: boolean): InstructionPrototype;
  reloadLanguage(taskMonitor: TaskMonitor): void;
  supportsPcode(): boolean;
}
