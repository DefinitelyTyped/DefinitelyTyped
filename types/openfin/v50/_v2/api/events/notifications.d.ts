import { RuntimeEvent, BaseEventMap } from './base';
export interface NotificationEvents extends BaseEventMap {
    show: RuntimeEvent<'notification', 'show'>;
    close: RuntimeEvent<'notification', 'close'>;
    error: RuntimeEvent<'notification', 'error'>;
    click: RuntimeEvent<'notification', 'click'>;
    message: RuntimeEvent<'notification', 'message'>;
}
