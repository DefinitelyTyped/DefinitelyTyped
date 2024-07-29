import type { Address } from './Address';
import type { AddressSetView } from './AddressSetView';
import { SourceType } from './SourceType';
import { Namespace } from './Namespace';
import { PrototypeModel } from './PrototypeModel';
import { GhidraFunctionIterator } from './GhidraFunctionIterator';
import { Program } from './Program';
import { GhidraFunctionTagManager } from './GhidraFunctionTagManager';
import { Variable } from './Variable';
import { TaskMonitor } from './TaskMonitor';
import { GhidraFunction } from './GhidraFunction';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/GhidraFunctionManager.html
export interface GhidraFunctionManager {
    createGhidraFunction(name: string, entryPoint: Address, body: AddressSetView, source: SourceType): GhidraFunction;
    createGhidraFunction(name: string, nameSpace: Namespace, entryPoint: Address, body: AddressSetView, source: SourceType): GhidraFunction;
    createThunkGhidraFunction(name: string, nameSpace: Namespace, entryPoint: Address, body: AddressSetView, thunkedGhidraFunction: GhidraFunction, source: SourceType): GhidraFunction;
    getCallingConvention(name: string): PrototypeModel;
    getCallingConventionNames(): string[];
    getCallingConventions(): PrototypeModel[];
    getDefaultCallingConvention(): PrototypeModel;
    getExternalGhidraFunctions(): GhidraFunctionIterator;
    getGhidraFunction(key: number): GhidraFunction;
    getGhidraFunctionAt(entryPoint: Address): GhidraFunction;
    getGhidraFunctionContaining(addr: Address): GhidraFunction;
    getGhidraFunctionCount(): number;
    getGhidraFunctions(forward: boolean): GhidraFunctionIterator;
    getGhidraFunctions(start: Address, forward: boolean): GhidraFunctionIterator;
    getGhidraFunctions(asv: AddressSetView, forward: boolean): GhidraFunctionIterator;
    getGhidraFunctionsNoStubs(forward: boolean): GhidraFunctionIterator;
    getGhidraFunctionsNoStubs(start: Address, forward: boolean): GhidraFunctionIterator;
    getGhidraFunctionsNoStubs(asv: AddressSetView, forward: boolean): GhidraFunctionIterator;
    getGhidraFunctionsOverlapping(set: AddressSetView): Iterator<GhidraFunction>;
    getGhidraFunctionTagManager(): GhidraFunctionTagManager;
    getProgram(): Program;
    getReferencedGhidraFunction(address: Address): GhidraFunction;
    getReferencedVariable(instrAddr: Address, storageAddr: Address, size: number, isRead: boolean): Variable;
    invalidateCache(all: boolean): void;
    isInGhidraFunction(addr: Address): boolean;
    moveAddressRange(fromAddr: Address, toAddr: Address, length: number, monitor: TaskMonitor): void;
    removeGhidraFunction(entryPoint: Address): boolean;
}
