import DomConverter from './domconverter';
import DowncastWriter from './downcastwriter';
import Element from './element';

/**
 * The raw element class.
 *
 * The raw elements work as data containers ("wrappers", "sandboxes") but their children are not managed or
 * even recognized by the editor. This encapsulation allows integrations to maintain custom DOM structures
 * in the editor content without, for instance, worrying about compatibility with other editor features.
 * Raw elements are a perfect tool for integration with external frameworks and data sources.
 *
 * Unlike {@link module:engine/view/uielement~UIElement UI elements}, raw elements act like real editor
 * content (similar to {@link module:engine/view/containerelement~ContainerElement} or
 * {@link module:engine/view/emptyelement~EmptyElement}), they are considered by the editor selection and
 * {@link module:widget/utils~toWidget they can work as widgets}.
 *
 * To create a new raw element, use the
 * {@link module:engine/view/downcastwriter~DowncastWriter#createRawElement `downcastWriter#createRawElement()`} method.
 */
export default class RawElement extends Element {
    getFillerOffset(): null;
    render: undefined | ((this: DowncastWriter, domElement: HTMLElement, domConverter: DomConverter) => void);
}
