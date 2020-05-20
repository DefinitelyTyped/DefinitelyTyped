import ES2016Operations = require('./2016');
import ES2017 = require('../es2017');

interface ES2017Operations
    extends Record<keyof ES2017, string>,
        Omit<ES2016Operations, 'EnumerableOwnNames' | 'IterableToArrayLike' | 'NextJob'> {
    AddWaiter: string;
    'agent-order': string;
    AgentCanSuspend: string;
    AgentSignifier: string;
    AllocateSharedArrayBuffer: string;
    AsyncFunctionAwait: string;
    AsyncFunctionCreate: string;
    AsyncFunctionStart: string;
    AtomicLoad: string;
    AtomicReadModifyWrite: string;
    ComposeWriteEventBytes: string;
    CreateSharedByteDataBlock: string;
    EnterCriticalSection: string;
    EventSet: string;
    GetBase: string;
    GetModifySetValueInBuffer: string;
    GetReferencedName: string;
    GetWaiterList: string;
    'happens-before': string;
    HasPrimitiveBase: string;
    'host-synchronizes-with': string;
    HostEnsureCanCompileStrings: string;
    HostEventSet: string;
    IsPropertyReference: string;
    IsSharedArrayBuffer: string;
    IsStrictReference: string;
    IsSuperReference: string;
    IsUnresolvableReference: string;
    LeaveCriticalSection: string;
    'memory-order': string;
    NumberToRawBytes: string;
    OrdinaryToPrimitive: string;
    RawBytesToNumber: string;
    'reads-bytes-from': string;
    'reads-from': string;
    RemoveWaiter: string;
    RemoveWaiters: string;
    RunJobs: string;
    SetImmutablePrototype: string;
    SharedDataBlockEventSet: string;
    StringGetOwnProperty: string;
    Suspend: string;
    'synchronizes-with': string;
    ValidateAtomicAccess: string;
    ValidateSharedIntegerTypedArray: string;
    ValueOfReadEvent: string;
    WakeWaiter: string;
    WordCharacters: string;
}

declare const ES2017Operations: ES2017Operations;
export = ES2017Operations;
