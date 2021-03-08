import ViewAttributeElement from "../view/attributeelement";
import ConversionHelpers from "./conversionhelpers";

import { DowncastConversionApi } from "./downcastdispatcher";
import Element from "../model/element";
import ViewElement from "../view/element";
import { ElementDefinition } from "../view/elementdefinition";
import { PriorityString } from "@ckeditor/ckeditor5-utils/src/priorities";
import DowncastWriter from "../view/downcastwriter";
import AttributeElement from "../view/attributeelement";

type TriggerByOptions =
    | {
          /**
           * The name of the element's attributes whose change will trigger element reconversion.
           */
          attributes: string[];
      }
    | {
          /**
           * The name of direct children whose adding or removing will trigger element reconversion.
           */
          children: string[];
      }
    | {
          attributes: string[];
          children: string[];
      };

/**
 * Downcast conversion helper functions.
 *
 * @extends module:engine/conversion/conversionhelpers~ConversionHelpers
 */
export default class DowncastHelpers extends ConversionHelpers {
    /**
     * Model element to view element conversion helper.
     *
     * This conversion results in creating a view element. For example, model `<paragraph>Foo</paragraph>` becomes `<p>Foo</p>` in the view.
     *
     *        editor.conversion.for( 'downcast' ).elementToElement( {
     *            model: 'paragraph',
     *            view: 'p'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).elementToElement( {
     *            model: 'paragraph',
     *            view: 'div',
     *            converterPriority: 'high'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).elementToElement( {
     *            model: 'fancyParagraph',
     *            view: {
     *                name: 'p',
     *                classes: 'fancy'
     *            }
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).elementToElement( {
     *            model: 'heading',
     *            view: ( modelElement, conversionApi ) => {
     *                const { writer } = conversionApi;
     *
     *                return writer.createContainerElement( 'h' + modelElement.getAttribute( 'level' ) );
     *            }
     *        } );
     *
     * The element-to-element conversion supports the reconversion mechanism. This is helpful in the conversion to complex view structures
     * where multiple atomic element-to-element and attribute-to-attribute or attribute-to-element could be used. By specifying
     * `triggerBy()` events you can trigger reconverting the model to full view tree structures at once.
     *
     *        editor.conversion.for( 'downcast' ).elementToElement( {
     *            model: 'complex',
     *            view: ( modelElement, conversionApi ) => createComplexViewFromModel( modelElement, conversionApi ),
     *            triggerBy: {
     *                attributes: [ 'foo', 'bar' ],
     *                children: [ 'slot' ]
     *            }
     *        } );
     *
     * See {@link module:engine/conversion/conversion~Conversion#for `conversion.for()`} to learn how to add a converter
     * to the conversion process.
     *
     * You can read more about element-to-element conversion in the
     * {@glink framework/guides/deep-dive/conversion/custom-element-conversion Custom element conversion} guide.
     *
     * @method #elementToElement
     * @param {Object} config Conversion configuration.
     * @param {String} config.model The name of the model element to convert.
     * @param {module:engine/view/elementdefinition~ElementDefinition|Function} config.view A view element definition or a function
     * that takes the model element and {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi downcast conversion API}
     * as parameters and returns a view container element.
     * @param {Object} [config.triggerBy] Reconversion triggers. At least one trigger must be defined.
     * @param {Array.<String>} config.triggerBy.attributes The name of the element's attributes whose change will trigger element
     * reconversion.
     * @param {Array.<String>} config.triggerBy.children The name of direct children whose adding or removing will trigger element
     * reconversion.
     * @returns {module:engine/conversion/downcasthelpers~DowncastHelpers}
     */
    elementToElement(config: {
        model: string;
        view: ElementDefinition | ((el: Element, api: DowncastConversionApi) => ViewElement);
        triggerBy?: TriggerByOptions;
    }): DowncastHelpers;

    /**
     * Model attribute to view element conversion helper.
     *
     * This conversion results in wrapping view nodes with a view attribute element. For example, a model text node with
     * `"Foo"` as data and the `bold` attribute becomes `<strong>Foo</strong>` in the view.
     *
     *        editor.conversion.for( 'downcast' ).attributeToElement( {
     *            model: 'bold',
     *            view: 'strong'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToElement( {
     *            model: 'bold',
     *            view: 'b',
     *            converterPriority: 'high'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToElement( {
     *            model: 'invert',
     *            view: {
     *                name: 'span',
     *                classes: [ 'font-light', 'bg-dark' ]
     *            }
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToElement( {
     *            model: {
     *                key: 'fontSize',
     *                values: [ 'big', 'small' ]
     *            },
     *            view: {
     *                big: {
     *                    name: 'span',
     *                    styles: {
     *                        'font-size': '1.2em'
     *                    }
     *                },
     *                small: {
     *                    name: 'span',
     *                    styles: {
     *                        'font-size': '0.8em'
     *                    }
     *                }
     *            }
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToElement( {
     *            model: 'bold',
     *            view: ( modelAttributeValue, conversionApi ) => {
     *                const { writer } = conversionApi;
     *
     *                return writer.createAttributeElement( 'span', {
     *                    style: 'font-weight:' + modelAttributeValue
     *                } );
     *            }
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToElement( {
     *            model: {
     *                key: 'color',
     *                name: '$text'
     *            },
     *            view: ( modelAttributeValue, conversionApi ) => {
     *                const { writer } = conversionApi;
     *
     *                return writer.createAttributeElement( 'span', {
     *                    style: 'color:' + modelAttributeValue
     *                } );
     *            }
     *        } );
     *
     * See {@link module:engine/conversion/conversion~Conversion#for `conversion.for()`} to learn how to add a converter
     * to the conversion process.
     */
    attributeToElement<T extends string>(config: {
        model: string | { key: string; values: Array<T>; name?: string };
        view:
            | ElementDefinition
            | ((value: string, api: DowncastConversionApi) => ViewAttributeElement)
            | Record<T, ElementDefinition>;
        converterPriority?: PriorityString;
    }): DowncastHelpers;

    /**
     * Model attribute to view attribute conversion helper.
     *
     * This conversion results in adding an attribute to a view node, basing on an attribute from a model node. For example,
     * `<image src='foo.jpg'></image>` is converted to `<img src='foo.jpg'></img>`.
     *
     *        editor.conversion.for( 'downcast' ).attributeToAttribute( {
     *            model: 'source',
     *            view: 'src'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToAttribute( {
     *            model: 'source',
     *            view: 'href',
     *            converterPriority: 'high'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToAttribute( {
     *            model: {
     *                name: 'image',
     *                key: 'source'
     *            },
     *            view: 'src'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToAttribute( {
     *            model: {
     *                name: 'styled',
     *                values: [ 'dark', 'light' ]
     *            },
     *            view: {
     *                dark: {
     *                    key: 'class',
     *                    value: [ 'styled', 'styled-dark' ]
     *                },
     *                light: {
     *                    key: 'class',
     *                    value: [ 'styled', 'styled-light' ]
     *                }
     *            }
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).attributeToAttribute( {
     *            model: 'styled',
     *            view: modelAttributeValue => ( {
     *                key: 'class',
     *                value: 'styled-' + modelAttributeValue
     *            } )
     *        } );
     *
     * **Note**: Downcasting to a style property requires providing `value` as an object:
     *
     *        editor.conversion.for( 'downcast' ).attributeToAttribute( {
     *            model: 'lineHeight',
     *            view: modelAttributeValue => ( {
     *                key: 'style',
     *                value: {
     *                    'line-height': modelAttributeValue,
     *                    'border-bottom': '1px dotted #ba2'
     *                }
     *            } )
     *        } );
     *
     * See {@link module:engine/conversion/conversion~Conversion#for `conversion.for()`} to learn how to add a converter
     * to the conversion process.
     *
     * @method #attributeToAttribute
     * @param {Object} config Conversion configuration.
     * @param {String|Object} config.model The key of the attribute to convert from or a `{ key, values, [ name ] }` object describing
     * the attribute key, possible values and, optionally, an element name to convert from.
     * @param {String|Object|Function} config.view A view attribute key, or a `{ key, value }` object or a function that takes
     * the model attribute value and {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi downcast conversion API}
     * as parameters and returns a `{ key, value }` object. If `key` is `'class'`, `value` can be a `String` or an
     * array of `String`s. If `key` is `'style'`, `value` is an object with key-value pairs. In other cases, `value` is a `String`.
     * If `config.model.values` is set, `config.view` should be an object assigning values from `config.model.values` to
     * `{ key, value }` objects or a functions.
     * @param {module:utils/priorities~PriorityString} [config.converterPriority='normal'] Converter priority.
     * @returns {module:engine/conversion/downcasthelpers~DowncastHelpers}
     */
    attributeToAttribute(config: {
        model: string;
        view:
            | string
            | ((
                  modelAttributeValue: string,
                  api: DowncastConversionApi,
              ) =>
                  | { key: "class"; value: string | string[] }
                  | { key: "style"; value: Record<string, string> }
                  | { key: string; value: string });
        converterPriority: PriorityString;
    }): DowncastHelpers;
    attributeToAttribute<T extends string>(config: {
        model: {
            key: string;
            values: T[];
            name?: string;
        };
        view: Record<T, { key: string; value: string[] }>;
    }): DowncastHelpers;

    /**
     * Model marker to view element conversion helper.
     *
     * **Note**: This method should be used only for editing downcast. For data downcast, use
     * {@link #markerToData `#markerToData()`} that produces valid HTML data.
     *
     * This conversion results in creating a view element on the boundaries of the converted marker. If the converted marker
     * is collapsed, only one element is created. For example, model marker set like this: `<paragraph>F[oo b]ar</paragraph>`
     * becomes `<p>F<span data-marker="search"></span>oo b<span data-marker="search"></span>ar</p>` in the view.
     *
     *        editor.conversion.for( 'editingDowncast' ).markerToElement( {
     *            model: 'search',
     *            view: 'marker-search'
     *        } );
     *
     *        editor.conversion.for( 'editingDowncast' ).markerToElement( {
     *            model: 'search',
     *            view: 'search-result',
     *            converterPriority: 'high'
     *        } );
     *
     *        editor.conversion.for( 'editingDowncast' ).markerToElement( {
     *            model: 'search',
     *            view: {
     *                name: 'span',
     *                attributes: {
     *                    'data-marker': 'search'
     *                }
     *            }
     *        } );
     *
     *        editor.conversion.for( 'editingDowncast' ).markerToElement( {
     *            model: 'search',
     *            view: ( markerData, conversionApi ) => {
     *                const { writer } = conversionApi;
     *
     *                return writer.createUIElement( 'span', {
     *                    'data-marker': 'search',
     *                    'data-start': markerData.isOpening
     *                } );
     *            }
     *        } );
     *
     * If a function is passed as the `config.view` parameter, it will be used to generate both boundary elements. The function
     * receives the `data` object and {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi downcast conversion API}
     * as a parameters and should return an instance of the
     * {@link module:engine/view/uielement~UIElement view UI element}. The `data` object and
     * {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi `conversionApi`} are passed from
     * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:addMarker}. Additionally,
     * the `data.isOpening` parameter is passed, which is set to `true` for the marker start boundary element, and `false` to
     * the marker end boundary element.
     *
     * See {@link module:engine/conversion/conversion~Conversion#for `conversion.for()`} to learn how to add a converter
     * to the conversion process.
     */
    markerToElement(config: {
        model: string;
        view: ElementDefinition | ((markerData: unknown, api: DowncastConversionApi) => ViewElement);
    }): DowncastHelpers;

    /**
     * Model marker to highlight conversion helper.
     *
     * This conversion results in creating a highlight on view nodes. For this kind of conversion,
     * {@link module:engine/conversion/downcasthelpers~HighlightDescriptor} should be provided.
     *
     * For text nodes, a `<span>` {@link module:engine/view/attributeelement~AttributeElement} is created and it wraps all text nodes
     * in the converted marker range. For example, a model marker set like this: `<paragraph>F[oo b]ar</paragraph>` becomes
     * `<p>F<span class="comment">oo b</span>ar</p>` in the view.
     *
     * {@link module:engine/view/containerelement~ContainerElement} may provide a custom way of handling highlight. Most often,
     * the element itself is given classes and attributes described in the highlight descriptor (instead of being wrapped in `<span>`).
     * For example, a model marker set like this: `[<image src="foo.jpg"></image>]` becomes `<img src="foo.jpg" class="comment"></img>`
     * in the view.
     *
     * For container elements, the conversion is two-step. While the converter processes the highlight descriptor and passes it
     * to a container element, it is the container element instance itself that applies values from the highlight descriptor.
     * So, in a sense, the converter takes care of stating what should be applied on what, while the element decides how to apply that.
     *
     *        editor.conversion.for( 'downcast' ).markerToHighlight( { model: 'comment', view: { classes: 'comment' } } );
     *
     *        editor.conversion.for( 'downcast' ).markerToHighlight( {
     *            model: 'comment',
     *            view: { classes: 'new-comment' },
     *            converterPriority: 'high'
     *        } );
     *
     *        editor.conversion.for( 'downcast' ).markerToHighlight( {
     *            model: 'comment',
     *            view: ( data, converstionApi ) => {
     *                // Assuming that the marker name is in a form of comment:commentType.
     *                const commentType = data.markerName.split( ':' )[ 1 ];
     *
     *                return {
     *                    classes: [ 'comment', 'comment-' + commentType ]
     *                };
     *            }
     *        } );
     *
     * If a function is passed as the `config.view` parameter, it will be used to generate the highlight descriptor. The function
     * receives the `data` object and {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi downcast conversion API}
     * as a parameters and should return a
     * {@link module:engine/conversion/downcasthelpers~HighlightDescriptor highlight descriptor}.
     * The `data` object properties are passed from {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:addMarker}.
     *
     * See {@link module:engine/conversion/conversion~Conversion#for `conversion.for()`} to learn how to add a converter
     * to the conversion process.
     */
    markerToHighlight(config: {
        model: string;
        view: HighlightDescriptor | ((data: unknown, api: DowncastConversionApi) => HighlightDescriptor);
        converterPriority: PriorityString;
    }): DowncastHelpers;

    /**
     * Model marker converter for data downcast.
     *
     * This conversion creates a representation for model marker boundaries in the view:
     *
     * * If the marker boundary is at a position where text nodes are allowed, then a view element with the specified tag name
     * and `name` attribute is added at this position.
     * * In other cases, a specified attribute is set on a view element that is before or after the marker boundary.
     *
     * Typically, marker names use the `group:uniqueId:otherData` convention. For example: `comment:e34zfk9k2n459df53sjl34:zx32c`.
     * The default configuration for this conversion is that the first part is the `group` part and the rest of
     * the marker name becomes the `name` part.
     *
     * Tag and attribute names and values are generated from the marker name:
     *
     * * Templates for attributes are `data-[group]-start-before="[name]"`, `data-[group]-start-after="[name]"`,
     * `data-[group]-end-before="[name]"` and `data-[group]-end-after="[name]"`.
     * * Templates for view elements are `<[group]-start name="[name]">` and `<[group]-end name="[name]">`.
     *
     * Attributes mark whether the given marker's start or end boundary is before or after the given element.
     * Attributes `data-[group]-start-before` and `data-[group]-end-after` are favored.
     * The other two are used when the former two cannot be used.
     *
     * The conversion configuration can take a function that will generate different group and name parts.
     * If such function is set as the `config.view` parameter, it is passed a marker name and it is expected to return an object with two
     * properties: `group` and `name`. If the function returns a falsy value, the conversion will not take place.
     *
     * Basic usage:
     *
     *        // Using the default conversion.
     *        // In this case, all markers whose name starts with 'comment:' will be converted.
     *        // The `group` parameter will be set to `comment`.
     *        // The `name` parameter will be the rest of the marker name (without `:`).
     *        editor.conversion.for( 'dataDowncast' ).markerToData( {
     *            model: 'comment'
     *        } );
     *
     * An example of a view that may be generated by this conversion (assuming a marker with the name `comment:commentId:uid` marked
     * by `[]`):
     *
     *        // Model:
     *        <paragraph>Foo[bar</paragraph>
     *        <image src="abc.jpg"></image>]
     *
     *        // View:
     *        <p>Foo<comment-start name="commentId:uid"></comment-start>bar</p>
     *        <figure data-comment-end-after="commentId:uid" class="image"><img src="abc.jpg" /></figure>
     *
     * In the example above, the comment starts before "bar" and ends after the image.
     *
     * If the `name` part is empty, the following view may be generated:
     *
     *        <p>Foo <myMarker-start></myMarker-start>bar</p>
     *        <figure data-myMarker-end-after="" class="image"><img src="abc.jpg" /></figure>
     *
     * **Note:** A situation where some markers have the `name` part and some do not have it is incorrect and should be avoided.
     *
     * Examples where `data-group-start-after` and `data-group-end-before` are used:
     *
     *        // Model:
     *        <blockQuote>[]<paragraph>Foo</paragraph></blockQuote>
     *
     *         // View:
     *        <blockquote><p data-group-end-before="name" data-group-start-before="name">Foo</p></blockquote>
     *
     * Similarly, when a marker is collapsed after the last element:
     *
     *        // Model:
     *        <blockQuote><paragraph>Foo</paragraph>[]</blockQuote>
     *
     *        // View:
     *        <blockquote><p data-group-end-after="name" data-group-start-after="name">Foo</p></blockquote>
     *
     * When there are multiple markers from the same group stored in the same attribute of the same element, their
     * name parts are put together in the attribute value, for example: `data-group-start-before="name1,name2,name3"`.
     *
     * Other examples of usage:
     *
     *        // Using a custom function which is the same as the default conversion:
     *        editor.conversion.for( 'dataDowncast' ).markerToData( {
     *            model: 'comment'
     *            view: markerName => ( {
     *                group: 'comment',
     *                name: markerName.substr( 8 ) // Removes 'comment:' part.
     *            } )
     *        } );
     *
     *        // Using the converter priority:
     *        editor.conversion.for( 'dataDowncast' ).markerToData( {
     *            model: 'comment'
     *            view: markerName => ( {
     *                group: 'comment',
     *                name: markerName.substr( 8 ) // Removes 'comment:' part.
     *            } ),
     *            converterPriority: 'high'
     *        } );
     *
     * This kind of conversion is useful for saving data into the database, so it should be used in the data conversion pipeline.
     *
     * See {@link module:engine/conversion/conversion~Conversion#for `conversion.for()`} to learn how to add a converter
     * to the conversion process.
     *
     * @method #markerToData
     * @param {Object} config Conversion configuration.
     * @param {String} config.model The name of the model marker (or model marker group) to convert.
     * @param {Function} [config.view] A function that takes the model marker name and
     * {@link module:engine/conversion/downcastdispatcher~DowncastConversionApi downcast conversion API} as a parameters
     * and returns an object with the `group` and `name` properties.
     * @param {module:utils/priorities~PriorityString} [config.converterPriority='normal'] Converter priority.
     * @returns {module:engine/conversion/downcasthelpers~DowncastHelpers}
     */
    markerToData(config: {
        model: string;
        view: (markerName: string) => { group: string; name: string };
        converterPriority: PriorityString;
    }): DowncastHelpers;
}

/**
 * Function factory that creates a default downcast converter for text insertion changes.
 *
 * The converter automatically consumes the corresponding value from the consumables list and stops the event (see
 * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher}).
 *
 *        modelDispatcher.on( 'insert:$text', insertText() );
 */
export function insertText(): () => (...args: unknown[]) => void;

/**
 * Function factory that creates a default downcast converter for node remove changes.
 *
 *        modelDispatcher.on( 'remove', remove() );
 *
 * @returns {Function} Remove event converter.
 */
export function remove(): () => (...args: unknown[]) => void;

/**
 * Creates a `<span>` {@link module:engine/view/attributeelement~AttributeElement view attribute element} from the information
 * provided by the {@link module:engine/conversion/downcasthelpers~HighlightDescriptor highlight descriptor} object. If a priority
 * is not provided in the descriptor, the default priority will be used.
 *
 * @param {module:engine/view/downcastwriter~DowncastWriter} writer
 * @param {module:engine/conversion/downcasthelpers~HighlightDescriptor} descriptor
 * @returns {module:engine/view/attributeelement~AttributeElement}
 */
export function createViewElementFromHighlightDescriptor(
    writer: DowncastWriter,
    descriptor: HighlightDescriptor,
): AttributeElement;

/**
 * Function factory that creates a converter which converts a non-collapsed {@link module:engine/model/selection~Selection model selection}
 * to a {@link module:engine/view/documentselection~DocumentSelection view selection}. The converter consumes appropriate
 * value from the `consumable` object and maps model positions from the selection to view positions.
 *
 *        modelDispatcher.on( 'selection', convertRangeSelection() );
 */
export function convertRangeSelection(): () => (...args: unknown[]) => void;

/**
 * Function factory that creates a converter which converts a collapsed {@link module:engine/model/selection~Selection model selection} to
 * a {@link module:engine/view/documentselection~DocumentSelection view selection}. The converter consumes appropriate
 * value from the `consumable` object, maps the model selection position to the view position and breaks
 * {@link module:engine/view/attributeelement~AttributeElement attribute elements} at the selection position.
 *
 *        modelDispatcher.on( 'selection', convertCollapsedSelection() );
 *
 * An example of the view state before and after converting the collapsed selection:
 *
 *           <p><strong>f^oo<strong>bar</p>
 *        -> <p><strong>f</strong>^<strong>oo</strong>bar</p>
 *
 * By breaking attribute elements like `<strong>`, the selection is in a correct element. Then, when the selection attribute is
 * converted, broken attributes might be merged again, or the position where the selection is may be wrapped
 * with different, appropriate attribute elements.
 *
 * See also {@link module:engine/conversion/downcasthelpers~clearAttributes} which does a clean-up
 * by merging attributes.
 */
export function convertCollapsedSelection(): () => (...args: unknown[]) => void;

/**
 * Function factory that creates a converter which clears artifacts after the previous
 * {@link module:engine/model/selection~Selection model selection} conversion. It removes all empty
 * {@link module:engine/view/attributeelement~AttributeElement view attribute elements} and merges sibling attributes at all start and end
 * positions of all ranges.
 *
 *           <p><strong>^</strong></p>
 *        -> <p>^</p>
 *
 *           <p><strong>foo</strong>^<strong>bar</strong>bar</p>
 *        -> <p><strong>foo^bar<strong>bar</p>
 *
 *           <p><strong>foo</strong><em>^</em><strong>bar</strong>bar</p>
 *        -> <p><strong>foo^bar<strong>bar</p>
 *
 * This listener should be assigned before any converter for the new selection:
 *
 *        modelDispatcher.on( 'selection', clearAttributes() );
 *
 * See {@link module:engine/conversion/downcasthelpers~convertCollapsedSelection}
 * which does the opposite by breaking attributes in the selection position.
 */
export function clearAttributes(): () => (...args: unknown[]) => void;

/**
 * An object describing how the marker highlight should be represented in the view.
 *
 * Each text node contained in a highlighted range will be wrapped in a `<span>`
 * {@link module:engine/view/attributeelement~AttributeElement view attribute element} with CSS class(es), attributes and a priority
 * described by this object.
 *
 * Additionally, each {@link module:engine/view/containerelement~ContainerElement container element} can handle displaying the highlight
 * separately by providing the `addHighlight` and `removeHighlight` custom properties. In this case:
 *
 *  * The `HighlightDescriptor` object is passed to the `addHighlight` function upon conversion and should be used to apply the highlight to
 *  the element.
 *  * The descriptor `id` is passed to the `removeHighlight` function upon conversion and should be used to remove the highlight with the
 *  given ID from the element.
 *
 * @typedef {Object} module:engine/conversion/downcasthelpers~HighlightDescriptor
 *
 * @property {String|Array.<String>} classes A CSS class or an array of classes to set. If the descriptor is used to
 * create an {@link module:engine/view/attributeelement~AttributeElement attribute element} over text nodes, these classes will be set
 * on that attribute element. If the descriptor is applied to an element, usually these classes will be set on that element, however,
 * this depends on how the element converts the descriptor.
 *
 * @property {String} [id] Descriptor identifier. If not provided, it defaults to the converted marker's name.
 *
 * @property {Number} [priority] Descriptor priority. If not provided, it defaults to `10`. If the descriptor is used to create
 * an {@link module:engine/view/attributeelement~AttributeElement attribute element}, it will be that element's
 * {@link module:engine/view/attributeelement~AttributeElement#priority priority}. If the descriptor is applied to an element,
 * the priority will be used to determine which descriptor is more important.
 *
 * @property {Object} [attributes] Attributes to set. If the descriptor is used to create
 * an {@link module:engine/view/attributeelement~AttributeElement attribute element} over text nodes, these attributes will be set on that
 * attribute element. If the descriptor is applied to an element, usually these attributes will be set on that element, however,
 * this depends on how the element converts the descriptor.
 */

interface HighlightDescriptor {
    classes: string | string[];
    id?: string;
    priority?: number;
    attributes?: Record<string, string>;
}

export {};
