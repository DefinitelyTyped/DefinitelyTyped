import { Address } from "./Address";
import { AddressRange } from "./AddressRange";
import { AddressRangeIterator } from "./AddressRangeIterator";
import { AddressSetView } from "./AddressSetView";
import type { JavaClass } from "./JavaClass";
import { Register } from "./Register";
import { RegisterValue } from "./RegisterValue";

export interface ProgramContext extends JavaClass {
    getNonFlowingContext(): boolean;
    getFlowValue(value: RegisterValue): RegisterValue;
    getNonFlowValue(value: RegisterValue): RegisterValue;
    getRegister(name: string): Register;
    getRegisters(): Register[];
    getRegistersWithValues(): Register[];
    getValue(register: Register, address: Address, signed: boolean): bigint;
    getRegisterValue(register: Register, address: Address): RegisterValue;
    setRegisterValue(start: Address, end: Address, value: RegisterValue): void;
    getNonDefaultValue(register: Register, address: Address): RegisterValue;
    setValue(register: Register, start: Address, end: Address, value: bigint): void;
    getRegisterValueAddressRanges(register: Register): AddressRangeIterator;
    getRegisterValueAddressRanges(register: Register, start: Address, end: Address): AddressRangeIterator;
    getRegisterValueRangeContaining(register: Register, address: Address): AddressRange;
    hasValueOverRange(reg: Register, value: bigint, addrSet: AddressSetView): boolean;
    remove(start: Address, end: Address, register: Register): void;
    setDefaultDisassemblyContext(value: RegisterValue): void;
}
