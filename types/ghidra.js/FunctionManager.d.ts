import type { Address } from './Address';
import type { AddressSetView } from './AddressSetView';
import { SourceType } from './SourceType';
import { Namespace } from './Namespace';
import { PrototypeModel } from './PrototypeModel';
import { FunctionIterator } from './FunctionIterator';
import { Program } from './Program';
import { FunctionTagManager } from './FunctionTagManager';
import { Variable } from './Variable';
import { TaskMonitor } from './TaskMonitor';

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/FunctionManager.html
export interface FunctionManager {
    createFunction(name: string, entryPoint: Address, body: AddressSetView, source: SourceType): Function;
    createFunction(name: string, nameSpace: Namespace, entryPoint: Address, body: AddressSetView, source: SourceType): Function;
    createThunkFunction(name: string, nameSpace: Namespace, entryPoint: Address, body: AddressSetView, thunkedFunction: Function, source: SourceType): Function;
    getCallingConvention(name: string): PrototypeModel;
    getCallingConventionNames(): string[];
    getCallingConventions(): PrototypeModel[];
    getDefaultCallingConvention(): PrototypeModel;
    getExternalFunctions(): FunctionIterator;
    getFunction(key: number): Function;
    getFunctionAt(entryPoint: Address): Function;
    getFunctionContaining(addr: Address): Function;
    getFunctionCount(): number;
    getFunctions(forward: boolean): FunctionIterator;
    getFunctions(start: Address, forward: boolean): FunctionIterator;
    getFunctions(asv: AddressSetView, forward: boolean): FunctionIterator;
    getFunctionsNoStubs(forward: boolean): FunctionIterator;
    getFunctionsNoStubs(start: Address, forward: boolean): FunctionIterator;
    getFunctionsNoStubs(asv: AddressSetView, forward: boolean): FunctionIterator;
    getFunctionsOverlapping(set: AddressSetView): Iterator<Function>;
    getFunctionTagManager(): FunctionTagManager;
    getProgram(): Program;
    getReferencedFunction(address: Address): Function;
    getReferencedVariable(instrAddr: Address, storageAddr: Address, size: number, isRead: boolean): Variable;
    invalidateCache(all: boolean): void;
    isInFunction(addr: Address): boolean;
    moveAddressRange(fromAddr: Address, toAddr: Address, length: number, monitor: TaskMonitor): void;
    removeFunction(entryPoint: Address): boolean;
}
