import { WorkboxEvent } from "../types/WorkboxEvent";

export interface WorkboxEventMap {
    message: WorkboxMessageEvent;
    installed: WorkboxUpdatableEvent;
    waiting: WorkboxWaitingEvent;
    controlling: WorkboxEvent;
    activated: WorkboxUpdatableEvent;
    redundant: WorkboxEvent;
    externalinstalled: WorkboxExtendableEvent;
    externalwaiting: WorkboxExtendableEvent;
    externalactivated: WorkboxExtendableEvent;
}

export interface WorkboxMessageEvent extends WorkboxEvent {
    readonly data: any;
}

export interface WorkboxExtendableEvent extends WorkboxEvent {
    readonly sw: ServiceWorker;
}

export interface WorkboxUpdatableEvent extends WorkboxExtendableEvent {
    readonly isUpdate?: boolean;
}

export interface WorkboxWaitingEvent extends WorkboxUpdatableEvent {
    readonly wasWaitingBeforeRegister?: boolean;
}
