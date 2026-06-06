import { Address } from "./Address";
import type { JavaClass } from "./JavaClass";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/address/AddressSpace.html

export interface AddressSpace extends JavaClass {
    add(addr: Address, displacement: number): Address;
    addNoWrap(addr: Address, displacement: number): Address;
    addWrap(addr: Address, displacement: number): Address;
    addWrapSpace(addr: Address, displacement: number): Address;
    getAddress(byteOffset: number): Address;
    getAddress(offset: number, isAddressableWordOffset: boolean): Address;
    getAddress(addrString: string): Address;
    getAddress(addrString: string, caseSensitive: boolean): Address;
    getAddressableUnitSize(): number;
    getAddressableWordOffset(byteOffset: number): number;
    getAddressInThisSpaceOnly(byteOffset: number): Address;
    getMaxAddress(): Address;
    getMinAddress(): Address;
    getName(): string;
    getOverlayAddress(addr: Address): Address;
    getPhysicalSpace(): AddressSpace;
    getPointerSize(): number;
    getSize(): number;
    getSpaceID(): number;
    getTruncatedAddress(offset: number, isAddressableWordOffset: boolean): Address;
    getType(): number;
    getUnique(): number;
    hasMappedRegisters(): boolean;
    hasSignedOffset(): boolean;
    isConstantSpace(): boolean;
    isExternalSpace(): boolean;
    isHashSpace(): boolean;
    isLoadedMemorySpace(): boolean;
    isMemorySpace(): boolean;
    isNonLoadedMemorySpace(): boolean;
    isOverlaySpace(): boolean;
    isRegisterSpace(): boolean;
    isStackSpace(): boolean;
    isSuccessor(addr1: Address, addr2: Address): boolean;
    isUniqueSpace(): boolean;
    isValidRange(byteOffset: number, length: number): boolean;
    isVariableSpace(): boolean;
    makeValidOffset(offset: number): number;
    showSpaceName(): boolean;
    subtract(addr: Address, displacement: number): Address;
    subtract(addr1: Address, addr2: Address): number;
    subtractNoWrap(addr: Address, displacement: number): Address;
    subtractWrap(addr: Address, displacement: number): Address;
    subtractWrapSpace(addr: Address, displacement: number): Address;
    truncateAddressableWordOffset(wordOffset: number): number;
    truncateOffset(byteOffset: number): number;
}
