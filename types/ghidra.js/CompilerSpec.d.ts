import { Address } from "./Address";
import { AddressSpace } from "./AddressSpace";
import type { JavaClass } from "./JavaClass";
import { PrototypeModel } from "./PrototypeModel";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/CompilerSpecID.html

export interface CompilerSpecID extends JavaClass {
    compareTo(o: CompilerSpecID): number;
    getIdAsString(): string;
    hashCode(): number;
    toString(): string;
}

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/lang/CompilerSpec.html

export interface CompilerSpec extends JavaClass {
    doesCDataTypeConversions(): boolean;
    getAddressSpace(spaceName: string): AddressSpace;
    getAllModels(): PrototypeModel[];
    getCallingConvention(name: string): PrototypeModel;
    getCallingConventions(): PrototypeModel[];
    getCompilerSpecID(): CompilerSpecID;
    getDefaultCallingConvention(): PrototypeModel;
    getProperty(key: string): string;
    getProperty(key: string, defaultString: string): string;
    getPropertyAsBoolean(key: string, defaultBoolean: boolean): boolean;
    getPropertyAsInt(key: string, defaultInt: number): number;
    getStackBaseSpace(): AddressSpace;
    getStackSpace(): AddressSpace;
    hasProperty(key: string): boolean;
    isGlobal(addr: Address): boolean;
    isStackRightJustified(): boolean;
    stackGrowsNegative(): boolean;
}
