import { Address } from "./Address";
import { AddressFactory } from "./AddressFactory";
import { AddressSpace } from "./AddressSpace";
import { CompilerSpec, CompilerSpecID } from "./CompilerSpec";
import type { JavaClass } from "./JavaClass";
import { Register } from "./Register";
import { TaskMonitor } from "./TaskMonitor";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/LanguageID.html

export interface LanguageID extends JavaClass {
    compareTo(o: LanguageID): number;
    getIdAsString(): string;
    hashCode(): number;
    toString(): string;
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/Language.html

export interface Language extends JavaClass {
    getAddressFactory(): AddressFactory;
    getCompilerSpecByID(compilerSpecID: CompilerSpecID): CompilerSpec;
    getContextBaseRegister(): Register;
    getDefaultCompilerSpec(): CompilerSpec;
    getDefaultDataSpace(): AddressSpace;
    getDefaultSpace(): AddressSpace;
    getInstructionAlignment(): number;
    getLanguageID(): LanguageID;
    getMinorVersion(): number;
    getNumberOfUserDefinedOpNames(): number;
    getProgramCounter(): Register;
    getProperty(key: string): string;
    getProperty(key: string, defaultString: string): string;
    getPropertyAsBoolean(key: string, defaultBoolean: boolean): boolean;
    getPropertyAsInt(key: string, defaultInt: number): number;
    getRegister(addr: Address, size: number): Register;
    getRegister(addrspc: AddressSpace, offset: number, size: number): Register;
    getRegister(name: string): Register;
    getSegmentedSpace(): string;
    getUserDefinedOpName(index: number): string;
    getVersion(): number;
    hasManual(): boolean;
    hasProperty(key: string): boolean;
    isBigEndian(): boolean;
    isVolatile(addr: Address): boolean;
    reloadLanguage(taskMonitor: TaskMonitor): void;
    supportsPcode(): boolean;
}
