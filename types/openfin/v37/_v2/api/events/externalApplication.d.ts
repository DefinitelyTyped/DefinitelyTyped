import { RuntimeEvent, BaseEventMap } from './base';
export interface ExternalApplicationEvents extends BaseEventMap {
    connected: RuntimeEvent<'externalapplication', 'connected'>;
    disconnected: RuntimeEvent<'externalapplication', 'disconnected'>;
}
