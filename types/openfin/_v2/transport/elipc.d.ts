/// <reference types="node" />
import { EventEmitter } from 'events';
import { Wire, READY_STATE } from './wire';
export default class ElIPCTransport extends EventEmitter implements Wire {
    protected wire: any;
    onmessage: (data: any) => void;
    constructor(onmessage: (data: any) => void);
    connectSync: () => any;
    connect: (address: string) => Promise<any>;
    send: (data: any, flags?: any) => Promise<any>;
    shutdown: () => Promise<void>;
    static READY_STATE: typeof READY_STATE;
}
