import Observable from "@ckeditor/ckeditor5-utils/src/observablemixin";
import DowncastDispatcher from "../conversion/downcastdispatcher";
import Mapper from "../conversion/mapper";
import Model from "../model/model";
import { StylesProcessor } from "../view/stylesmap";
import View from "../view/view";

/**
 * Controller for the editing pipeline. The editing pipeline controls {@link ~EditingController#model model} rendering,
 * including selection handling. It also creates the {@link ~EditingController#view view} which builds a
 * browser-independent virtualization over the DOM elements. The editing controller also attaches default converters.
 *
 */
export default class EditingController extends Observable {
    /**
     * Creates an editing controller instance.
     *
     */
    constructor(model: Model, stylesProcessor: StylesProcessor);

    readonly model: Model;

    readonly view: View;

    readonly mapper: Mapper;

    readonly downcastdispatcher: DowncastDispatcher;

    /**
     * Removes all event listeners attached to the `EditingController`. Destroys all objects created
     * by `EditingController` that need to be destroyed.
     */
    destroy(): void;
}
