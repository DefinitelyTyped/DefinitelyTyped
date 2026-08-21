import { DomainFile } from "./DomainFile";
import type { JavaClass } from "./JavaClass";
import { TransactionInfo } from "./TransactionInfo";
import { TransactionListener } from "./TransactionListener";

// https://ghidra.re/ghidra_docs/api/ghidra/framework/model/DomainObject.html
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface ChangeSet extends JavaClass {/* Details omitted */}
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface DomainObjectListener extends JavaClass {/* Details omitted */}
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface DomainObjectChangeSet extends JavaClass {/* Details omitted */}
/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface DomainObjectChangedEvent extends JavaClass {/* Details omitted */}

export interface DomainObject extends JavaClass {
    addConsumer(consumer: any): void;
    addListener(listener: DomainObjectListener): void;
    addTransactionListener(listener: TransactionListener): void;
    canLock(): boolean;
    cancelCurrentTransaction(): void;
    checkValidity(): void;
    close(): void;
    createChangeSet(): DomainObjectChangeSet;
    endTransaction(transactionID: number, commit: boolean): void;
    getChangeSet(): DomainObjectChangeSet;
    getChangeSet(name: string): ChangeSet;
    getConsumerList(): any[];
    getCurrentTransactionInfo(): TransactionInfo;
    getDomainFile(): DomainFile;
    getEventQueueSize(): number;
    getLastChangeTime(): number;
    getLastModifiedTime(): number;
    getModificationNumber(): number;
    getName(): string;
    getTransactionID(): number;
    hasExclusiveAccess(): boolean;
    isChangeable(): boolean;
    isChanged(): boolean;
    isClosed(): boolean;
    lock(): void;
    release(consumer: any): void;
    removeListener(listener: DomainObjectListener): void;
    removeTransactionListener(listener: TransactionListener): void;
    setChanged(changed: boolean): void;
    startTransaction(description: string): number;
    unlock(): void;
}
