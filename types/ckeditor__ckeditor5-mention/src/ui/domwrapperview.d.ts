import { View } from '@ckeditor/ckeditor5-ui';
import { Locale } from '@ckeditor/ckeditor5-utils';

/**
 * This class wraps DOM element as a CKEditor5 UI View.
 *
 * It allows to render any DOM element and use it in mentions list.
 */
export default class DomWrapperView<T extends HTMLElement = HTMLElement> extends View {
    /**
     * Creates an instance of {@link module:mention/ui/domwrapperview~DomWrapperView} class.
     */
    constructor(locale: Locale, domElement: T);
    /**
     * Disable template rendering on this view.
     */
    get template(): false;
    /**
     * The DOM element for which wrapper was created.
     */
    readonly domElement: T;
    element?: T;
    get isOn(): boolean;
    protected set isOn(value: boolean);
}
