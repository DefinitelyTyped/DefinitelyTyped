import { AbortedTransactionListener } from "./AbortedTransactionListener";
import { Address } from "./Address";
import { AddressFactory } from "./AddressFactory";
import { AddressMap } from "./AddressMap";
import { AddressSetPropertyMap } from "./AddressSetPropertyMap";
import { AddressSetView } from "./AddressSetView";
import { BookmarkManager } from "./BookmarkManager";
import { CodeManager } from "./CodeManager";
import { CompilerSpec, CompilerSpecID } from "./CompilerSpec";
import { DataTypeManager } from "./DataTypeManager";
import { DomainObject } from "./DomainObject";
import { EquateTable } from "./EquateTable";
import { ExternalManager } from "./ExternalManager";
import { GhidraFunctionManager } from "./GhidraFunctionManager";
import { IntRangeMap } from "./IntRangeMap";
import type { JavaClass } from "./JavaClass";
import { Language, LanguageID } from "./Language";
import { Listing } from "./Listing";
import { Memory } from "./Memory";
import { MemoryBlock } from "./MemoryBlock";
import { Namespace } from "./Namespace";
import { NamespaceManager } from "./NamespaceManager";
import { Options } from "./Options";
import { ProgramChangeSet } from "./ProgramChangeSet";
import { ProgramContext } from "./ProgramContext";
import { ProgramTreeManager } from "./ProgramTreeManager";
import { ProgramUserData } from "./ProgramUserData";
import { PropertyMapManager } from "./PropertyMapManager";
import { ReferenceManager } from "./ReferenceManager";
import { Register } from "./Register";
import { RegisterValue } from "./RegisterValue";
import { RelocationTable } from "./RelocationTable";
import { SymbolTable } from "./SymbolTable";
import { TaskMonitor } from "./TaskMonitor";
import { Transaction } from "./Transaction";
import { TransactionListener } from "./TransactionListener";
import { Varnode } from "./Varnode";

// https://ghidra.re/ghidra_docs/api/ghidra/program/model/listing/Program.html
export interface Program extends JavaClass, DomainObject {
    createAddressSetPropertyMap(name: string): AddressSetPropertyMap;
    createIntRangeMap(name: string): IntRangeMap;
    deleteAddressSetPropertyMap(name: string): void;
    deleteIntRangeMap(name: string): void;
    getAddressFactory(): AddressFactory;
    getAddressMap(): AddressMap;
    getAddressSetPropertyMap(name: string, create: boolean): AddressSetPropertyMap;
    getBookmarkManager(): BookmarkManager;
    getChanges(): ProgramChangeSet;
    getCompiler(): string;
    getCompilerSpec(): CompilerSpec;
    getCreationDate(): Date;
    getDataTypeManager(): DataTypeManager;
    getDefaultPointerSize(): number;
    getEquateTable(): EquateTable;
    getExecutableFormat(): string;
    getExecutableMD5(): string;
    getExecutablePath(): string;
    getExecutableSHA256(): string;
    getExternalManager(): ExternalManager;
    getGhidraFunctionManager(): GhidraFunctionManager;
    getGlobalNamespace(): Namespace;
    getImageBase(): Address;
    getIntRangeMap(name: string): IntRangeMap;
    getLanguage(): Language;
    getLanguageID(): LanguageID;
    getListing(): Listing;
    getMaxAddress(): Address;
    getMemory(): Memory;
    getMinAddress(): Address;
    getProgramContext(): ProgramContext;
    getProgramUserData(): ProgramUserData;
    getReferenceManager(): ReferenceManager;
    getRegister(addr: Address): Register;
    getRegister(addr: Address, size: number): Register;
    getRegister(varnode: Varnode): Register;
    getRegister(name: string): Register;
    getRegisters(addr: Address): Register[];
    getRelocationTable(): RelocationTable;
    getSymbolTable(): SymbolTable;
    getUniqueProgramID(): number;
    getUsrPropertyManager(): PropertyMapManager;
    invalidate(): void;
    parseAddress(addrStr: string): Address[];
    parseAddress(addrStr: string, caseSensitive: boolean): Address[];
    restoreImageBase(): void;
    setCompiler(compiler: string): void;
    setExecutableFormat(format: string): void;
    setExecutableMD5(md5: string): void;
    setExecutablePath(path: string): void;
    setExecutableSHA256(sha256: string): void;
    setImageBase(base: Address, commit: boolean): boolean;
    setLanguage(language: Language): void;
    // inherited from Undoable
    // https://ghidra.re/ghidra_docs/api/ghidra/framework/model/Undoable.html
    addTransactionListener(listener: TransactionListener): void;
    canRedo(): boolean;
    canUndo(): boolean;
    clearUndo(): void;
    getRedoName(): string;
    getUndoName(): string;
    redo(): void;
    removeTransactionListener(listener: TransactionListener): void;
    undo(): void;
    // inherited from UndoableDomainObject
    // https://ghidra.re/ghidra_docs/api/ghidra/framework/model/UndoableDomainObject.html
    addSynchronizedDomainObject(domainObj: DomainObject): void;
    getCurrentTransaction(): Transaction;
    getSynchronizedDomainObjects(): DomainObject[];
    hasTerminateTransaction(): boolean;
    releaseSynchronizedDomainObjects(): void;
    startTransaction(description: string): number;
    startTransaction(description: string, listener: AbortedTransactionListener): number;
    startTransaction(
        description: string,
        compilerSpecID: CompilerSpecID,
        forceRedisassembly: boolean,
        monitor: TaskMonitor,
    ): number;
}
