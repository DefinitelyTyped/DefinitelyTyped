import Service from '@ember/service';

/**
 * Service that opens and closes modals.
 */
export default class EmberModalService extends Service {
    /**
     * Array model.
     */
    content: null | unknown[];

    /**
     * Creates new modal object and insert it in the array.
     */
    open(name: string, options: object): Promise<unknown>;

    /**
     * Close all open modals by rejecting each promise.
     */
    close(key: string, value: string): void;

    /**
     * Test by name if a modal is already opened.
     */
    isOpened(name: string): boolean;
}
