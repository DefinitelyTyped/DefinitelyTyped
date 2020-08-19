import { Notification } from './Notification';

export class OverlayNotification extends Notification {
    loading: boolean;
    handleEscape(event: JQuery.Event): void;
}
