import { Workbox } from '../Workbox';

export interface WorkboxEvent {
    readonly originalEvent: Event;
    readonly type: string;
    readonly target: Workbox;
}
