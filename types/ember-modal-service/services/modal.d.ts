import Service from '@ember/service';
import type EmberArray from '@ember/array';
import ModalModel from '../models/modal';

/**
 * Service that opens and closes modals.
 */
export default class EmberModalService extends Service {
    /**
     * Array model.
     */
    content: EmberArray<ModalModel> & { removeObject: (model: ModalModel) => void; };

    /**
     * Creates new modal object and insert it in the array.
     */
    open(name: string, options: Record<string, unknown>): Promise<unknown>;

    /**
     * Remove from DOM
     */
    _closeByModel(model: ModalModel): void;

    /**
     * Close all open modals by rejecting each promise.
     */
    close(key: string, value: string): void;

    /**
     * Test by name if a modal is already opened.
     */
    isOpened(name: string): boolean;
}
