// Type definitions for fsevents 1.1
// Project: https://github.com/strongloop/fsevents
// Definitions by: BendingBender <https://github.com/BendingBender>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />
import { EventEmitter } from 'events';

export = fsevents;

declare function fsevents(path: string): fsevents.Watcher;

declare namespace fsevents {
    function getInfo(path: string, flags: number): BaseEventInfo<BaseEventType | 'moved'>;

    class FSEvents {
        constructor(path: string, handler: (path: string, flags: number, id: number) => void);
        start(): this;
        stop(): this;
    }

    const Constants: {
        kFSEventStreamEventFlagNone: 0x0;
        kFSEventStreamEventFlagMustScanSubDirs: 0x1;
        kFSEventStreamEventFlagUserDropped: 0x2;
        kFSEventStreamEventFlagKernelDropped: 0x4;
        kFSEventStreamEventFlagEventIdsWrapped: 0x8;
        kFSEventStreamEventFlagHistoryDone: 0x10;
        kFSEventStreamEventFlagRootChanged: 0x20;
        kFSEventStreamEventFlagMount: 0x40;
        kFSEventStreamEventFlagUnmount: 0x80;
        kFSEventStreamEventFlagItemCreated: 0x100;
        kFSEventStreamEventFlagItemRemoved: 0x200;
        kFSEventStreamEventFlagItemInodeMetaMod: 0x400;
        kFSEventStreamEventFlagItemRenamed: 0x800;
        kFSEventStreamEventFlagItemModified: 0x1000;
        kFSEventStreamEventFlagItemFinderInfoMod: 0x2000;
        kFSEventStreamEventFlagItemChangeOwner: 0x4000;
        kFSEventStreamEventFlagItemXattrMod: 0x8000;
        kFSEventStreamEventFlagItemIsFile: 0x10000;
        kFSEventStreamEventFlagItemIsDir: 0x20000;
        kFSEventStreamEventFlagItemIsSymlink: 0x40000;
    };

    interface Watcher extends EventEmitter {
        start(): this;
        stop(): this;

        addListener(event: 'fsevent', listener: (path: string, flags: number, id: number) => void): this;
        addListener(event: EventType | 'change', listener: (path: string, info: EventInfo) => void): this;
        on(event: 'fsevent', listener: (path: string, flags: number, id: number) => void): this;
        on(event: EventType | 'change', listener: (path: string, info: EventInfo) => void): this;
        once(event: 'fsevent', listener: (path: string, flags: number, id: number) => void): this;
        once(event: EventType | 'change', listener: (path: string, info: EventInfo) => void): this;
        prependListener(event: 'fsevent', listener: (path: string, flags: number, id: number) => void): this;
        prependListener(event: EventType | 'change', listener: (path: string, info: EventInfo) => void): this;
        prependOnceListener(event: 'fsevent', listener: (path: string, flags: number, id: number) => void): this;
        prependOnceListener(event: EventType | 'change', listener: (path: string, info: EventInfo) => void): this;
        removeListener(event: 'fsevent', listener: (path: string, flags: number, id: number) => void): this;
        removeListener(event: EventType | 'change', listener: (path: string, info: EventInfo) => void): this;
        removeAllListeners(event?: EventType | 'change' | 'fsevent'): this;
        // tslint:disable-next-line ban-types
        listeners(event: EventType | 'change' | 'fsevent'): Function[];
        emit(event: 'fsevent', path: string, flags: number, id: number): boolean;
        emit(event: EventType | 'change', path: string, info: EventInfo): boolean;
        eventNames(): Array<EventType | 'change' | 'fsevent'>;
        listenerCount(type: EventType | 'change' | 'fsevent'): number;
    }

    type EventType = 'moved-out' | 'moved-in' | BaseEventType;

    interface EventInfo extends BaseEventInfo<EventType> {
        id: number;
    }

    type BaseEventType = 'created' | 'deleted' | 'modified' | 'root-changed' | 'unknown';

    interface BaseEventInfo<E extends string> {
        event: E;
        path: string;
        type: 'file' | 'directory' | 'symlink';
        changes: {
            inode: boolean;
            finder: boolean;
            access: boolean;
            xattrs: boolean;
        };
        flags: number;
    }
}
