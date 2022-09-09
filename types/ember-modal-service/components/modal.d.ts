import Component from '@ember/component';
import EmberModalService from '../services/modal';
import ModalModel from "../models/modal";

export default class ModalComponent extends Component {
    declare model: ModalModel;

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
     * Modal is visible/hidden.
     */
    'data-modal-show': string;

    /**
     * Resolve current promise and close modal.
     */
    resolve: (data?: unknown) => void;

    /**
     * Reject current promise and close modal.
     */
    reject: (error?: unknown) => void;
}
