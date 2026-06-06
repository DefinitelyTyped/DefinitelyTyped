import { CheckinHandler } from "./CheckinHandler";
import { Consumer } from "./Consumer";
import { DomainFolder } from "./DomainFolder";
import { ChangeSet, DomainObject } from "./DomainObject";
import { ItemCheckoutStatus } from "./ItemCheckoutStatus";
import type { JavaClass } from "./JavaClass";
import { ProjectLocator } from "./ProjectLocator";
import { TaskMonitor } from "./TaskMonitor";
import { Version } from "./Version";

/* eslint-disable-next-line @typescript-eslint/no-empty-interface */
export interface File extends JavaClass {
}

// https://ghidra.re/ghidra_docs/api/ghidra/framework/model/DomainFile.html
export interface DomainFile extends JavaClass {
    addToVersionControl(comment: string, keepCheckedOut: boolean, monitor: TaskMonitor): void;
    canAddToRepository(): boolean;
    canCheckin(): boolean;
    canCheckout(): boolean;
    canMerge(): boolean;
    canRecover(): boolean;
    canSave(): boolean;
    checkin(checkinHandler: CheckinHandler, okToUpgrade: boolean, monitor: TaskMonitor): void;
    checkout(exclusive: boolean, monitor: TaskMonitor): void;
    copyTo(newParent: DomainFolder, monitor: TaskMonitor): DomainFile;
    copyVersionTo(version: number, destFolder: DomainFolder, monitor: TaskMonitor): DomainFile;
    delete(): void;
    delete(version: number): void;
    exists(): boolean;
    getChangesByOtherSinceCheckout(): ChangeSet;
    getCheckouts(): ItemCheckoutStatus[];
    getCheckoutStatus(): ItemCheckoutStatus;
    getConsumers(): any[];
    getContentType(): string;
    getDomainObject(consumer: any, okToUpgrade: boolean, okToRecover: boolean, monitor: TaskMonitor): DomainObject;
    getDomainObjectClass(): DomainObject;
    getFileID(): string;
    getIcon(disabled: boolean): string;
    getImmutableDomainObject(consumer: any, version: number, monitor: TaskMonitor): DomainObject;
    getLastModifiedTime(): number;
    getLatestVersion(): number;
    getMetadata(): Map<string, string>;
    getName(): string;
    getOpenedDomainObject(consumer: Consumer): DomainObject;
    getParent(): DomainFolder;
    getPathname(): string;
    getProjectLocator(): ProjectLocator;
    getReadOnlyDomainObject(consumer: Consumer): DomainObject;
    getVersion(): number;
    getVersionHistory(): Version[];
    isBusy(): boolean;
    isChanged(): boolean;
    isCheckedOut(): boolean;
    isCheckedOutExclusive(): boolean;
    isHijacked(): boolean;
    isInWritableProject(): boolean;
    isLatestVersion(): boolean;
    isOpen(): boolean;
    isReadOnly(): boolean;
    isVersionControlSupported(): boolean;
    isVersioned(): boolean;
    length(): number;
    merge(okToUpgrade: boolean, monitor: TaskMonitor): void;
    modifiedSinceCheckout(): boolean;
    moveTo(newParent: DomainFolder): DomainFile;
    packFile(file: File, monitor: TaskMonitor): void;
    save(monitor: TaskMonitor): void;
    setName(newName: string): DomainFile;
    setReadOnly(state: boolean): void;
    takeRecoverySnapshot(): void;
    terminateCheckout(checkoutId: number): void;
    undoCheckout(keep: boolean): void;
}
