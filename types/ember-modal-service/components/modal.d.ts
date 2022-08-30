import Component from '@ember/component';
import Evented from '@ember/object/evented';
import Scheduler from 'ember-task-scheduler';
import EmberModalService from '../services/modal';
import ModalModel from "../models/modal";

export default class ModalComponent extends Component {
    declare model: ModalModel;
    /**
     * Modal service inject.
     */
    scheduler: Scheduler;

    /**
     * Modal service inject.
     */
    modal: EmberModalService;

    /**
     * HTML attributes bindings.
     */
    attributeBindings: string[];

    /**
     * HTML role.
     */
    ariaRole: string;

    /**
     * Modal is visible/hidden.
     */
    visible: boolean;

    /**
     * `data-id` attribute of wrapper element
     */
    'data-id': string;

    /**
     * Modal is visible/hidden. This property is read from CSS.
     */
    'data-modal-show': boolean;

    /**
     * On did insert element, set element as visible and set data-id.
     */
    onDidInsertElement: Evented;

    /**
     * Resolve current promise and close modal.
     */
    resolve: (data?: unknown, label?: string) => void;

    /**
     * Reject current promise and close modal.
     */
    reject: (data?: unknown, label?: string) => void;

    actions: {
        /**
         * Action to resolve the underlying modal promise directly from the
         * template, using the passed arguments as resolution values
         */
        resolve: () => void;

        /**
         * Action to reject the underlying modal promise directly from the
         * template, using the passed arguments as rejection values
         */
        reject: () => void;
    };
}
