import { Observable } from '@ckeditor/ckeditor5-utils/src/observablemixin';
import DowncastDispatcher from '../conversion/downcastdispatcher';
import Mapper from '../conversion/mapper';
import Model from '../model/model';
import { StylesProcessor } from '../view/stylesmap';
import View from '../view/view';

// tslint:disable-next-line:no-empty-interface
export default interface EditingController extends Observable {}

/**
 * Controller for the editing pipeline. The editing pipeline controls {@link ~EditingController#model model} rendering,
 * including selection handling. It also creates the {@link ~EditingController#view view} which builds a
 * browser-independent virtualization over the DOM elements. The editing controller also attaches default converters.
 */
export default class EditingController implements Observable {
    /**
     * Creates an editing controller instance.
     */
    constructor(model: Model, stylesProcessor: StylesProcessor);
    /**
     * Editor model.
     */
    readonly model: Model;

    /**
     * Editing view controller.
     */
    readonly view: View;

    /**
     * Mapper which describes the model-view binding.
     */
    readonly mapper: Mapper;

    /**
     * Downcast dispatcher that converts changes from the model to {@link #view the editing view}.
     */
    readonly downcastDispatcher: DowncastDispatcher;

    /**
     * Removes all event listeners attached to the `EditingController`. Destroys all objects created
     * by `EditingController` that need to be destroyed.
     */
    destroy(): void;
}
