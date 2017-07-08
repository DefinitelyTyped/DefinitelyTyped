// Type definitions for Draft.js v0.10.0
// Project: https://facebook.github.io/draft-js/
// Definitions by: Dmitry Rogozhny <https://github.com/dmitryrogozhny>
//                 Eelco Lempsink <https://github.com/eelco>
//                 Yale Cason <https://github.com/ghotiphud>
//                 Ryan Schwers <https://github.com/schwers>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

import * as React from 'react';
import * as Immutable from 'immutable';

type SyntheticKeyboardEvent = React.KeyboardEvent<{}>;
type SyntheticEvent = React.SyntheticEvent<{}>;
export as namespace Draft;
declare namespace Draft {
    namespace Component {
        namespace Base {
            import DraftEditorCommand = Draft.Model.Constants.DraftEditorCommand;
            import DraftBlockType = Draft.Model.Constants.DraftBlockType;
            import DraftDragType = Draft.Model.Constants.DraftDragType;
            import DraftHandleValue = Draft.Model.Constants.DraftHandleValue;

            import EditorState = Draft.Model.ImmutableData.EditorState;
            import ContentBlock = Draft.Model.ImmutableData.ContentBlock;
            import SelectionState = Draft.Model.ImmutableData.SelectionState;
            import DraftInlineStyle = Draft.Model.ImmutableData.DraftInlineStyle;

            import DraftBlockRenderConfig = Draft.Model.ImmutableData.DraftBlockRenderConfig;

            type DraftBlockRenderMap = Immutable.Map<DraftBlockType, DraftBlockRenderConfig>;

            type EditorCommand = DraftEditorCommand | string;

            /**
             * `DraftEditor` is the root editor component. It composes a `contentEditable`
             * div, and provides a wide variety of useful function props for managing the
             * state of the editor. See `DraftEditorProps` for details.
             */
            class DraftEditor extends React.Component<DraftEditorProps> {
                // Force focus back onto the editor node.
                focus(): void;
                // Remove focus from the editor node.
                blur(): void;
            }

            /**
             * The two most critical props are `editorState` and `onChange`.
             *
             * The `editorState` prop defines the entire state of the editor, while the
             * `onChange` prop is the method in which all state changes are propagated
             * upward to higher-level components.
             *
             * These props are analagous to `value` and `onChange` in controlled React
             * text inputs.
             */
            export interface DraftEditorProps {
                editorState: EditorState;
                onChange(editorState: EditorState): void;

                placeholder?: string;

                // Specify whether text alignment should be forced in a direction
                // regardless of input characters.
                textAlignment?: DraftTextAlignment;

                // For a given `ContentBlock` object, return an object that specifies
                // a custom block component and/or props. If no object is returned,
                // the default `TextEditorBlock` is used.
                blockRendererFn?(block: ContentBlock): any;

                // Function that allows to define class names to apply to the given block when it is rendered.
                blockStyleFn?(block: ContentBlock): string;

                // Provide a map of inline style names corresponding to CSS style objects
                // that will be rendered for matching ranges.
                customStyleMap?: any;

                // Provide a function that will construct CSS style objects given inline
                // style names.
                customStyleFn?: (style: DraftInlineStyle) => Object;

                // A function that accepts a synthetic key event and returns
                // the matching DraftEditorCommand constant, or null if no command should
                // be invoked.
                keyBindingFn?(e: SyntheticKeyboardEvent): EditorCommand | null;

                // Set whether the `DraftEditor` component should be editable. Useful for
                // temporarily disabling edit behavior or allowing `DraftEditor` rendering
                // to be used for consumption purposes.
                readOnly?: boolean;

                // Note: spellcheck is always disabled for IE. If enabled in Safari, OSX
                // autocorrect is enabled as well.
                spellCheck?: boolean;

                // Set whether to remove all style information from pasted content. If your
                // use case should not have any block or inline styles, it is recommended
                // that you set this to `true`.
                stripPastedStyles?: boolean;

                tabIndex?: number;

                ariaActiveDescendantID?: string;
                ariaAutoComplete?: string;
                ariaDescribedBy?: string;
                ariaExpanded?: boolean;
                ariaHasPopup?: boolean;
                ariaLabel?: string;
                ariaOwneeID?: string;

                webDriverTestID?: string;

                /**
                 * Cancelable event handlers, handled from the top level down. A handler
                 * that returns `handled` will be the last handler to execute for that event.
                 */

                // Useful for managing special behavior for pressing the `Return` key. E.g.
                // removing the style from an empty list item.
                handleReturn?(e: SyntheticKeyboardEvent): DraftHandleValue,

                // Map a key command string provided by your key binding function to a
                // specified behavior.
                handleKeyCommand?(command: EditorCommand): DraftHandleValue,

                // Handle intended text insertion before the insertion occurs. This may be
                // useful in cases where the user has entered characters that you would like
                // to trigger some special behavior. E.g. immediately converting `:)` to an
                // emoji Unicode character, or replacing ASCII quote characters with smart
                // quotes.
                handleBeforeInput?(chars: string): DraftHandleValue,

                handlePastedText?(text: string, html?: string): DraftHandleValue,

                handlePastedFiles?(files: Array<Blob>): DraftHandleValue,

                // Handle dropped files
                handleDroppedFiles?(selection: SelectionState, files: Array<Blob>): DraftHandleValue,

                // Handle other drops to prevent default text movement/insertion behaviour
                handleDrop?(selection: SelectionState, dataTransfer: Object, isInternal: DraftDragType): DraftHandleValue,

                /**
                 * Non-cancelable event triggers.
                 */
                onEscape?(e: SyntheticKeyboardEvent): void,
                onTab?(e: SyntheticKeyboardEvent): void,
                onUpArrow?(e: SyntheticKeyboardEvent): void,
                onDownArrow?(e: SyntheticKeyboardEvent): void,

                onBlur?(e: SyntheticEvent): void,
                onFocus?(e: SyntheticEvent): void,

                // Provide a map of block rendering configurations. Each block type maps to
                // an element tag and an optional react element wrapper. This configuration
                // is used for both rendering and paste processing.
                blockRenderMap?: DraftBlockRenderMap
            }

            type DraftTextAlignment = "left" | "center" | "right";
        }

        namespace Components {
            class DraftEditorBlock extends React.Component<any> {
            }
        }

        namespace Selection {
            interface FakeClientRect {
                left: number,
                width: number,
                right: number,
                top: number,
                bottom: number,
                height: number,
            }

            /**
             * Return the bounding ClientRect for the visible DOM selection, if any.
             * In cases where there are no selected ranges or the bounding rect is
             * temporarily invalid, return null.
            */
            function getVisibleSelectionRect(global: any): FakeClientRect;
        }

        namespace Utils {
            import DraftEditorCommand = Draft.Model.Constants.DraftEditorCommand;

            class KeyBindingUtil {
                /**
                 * Check whether the ctrlKey modifier is *not* being used in conjunction with
                 * the altKey modifier. If they are combined, the result is an `altGraph`
                 * key modifier, which should not be handled by this set of key bindings.
                 */
                static isCtrlKeyCommand(e: SyntheticKeyboardEvent): boolean;

                static isOptionKeyCommand(e: SyntheticKeyboardEvent): boolean;

                static hasCommandModifier(e: SyntheticKeyboardEvent): boolean;
            }

            /**
             * Retrieve a bound key command for the given event.
             */
            function getDefaultKeyBinding(e: SyntheticKeyboardEvent): DraftEditorCommand | null;
        }
    }

    namespace Model {
        namespace Constants {
            /**
             * A set of editor commands that may be invoked by keyboard commands or UI
             * controls. These commands should map to operations that modify content or
             * selection state and update the editor state accordingly.
             */
            type DraftEditorCommand = (
                /**
                 * Self-explanatory.
                 */
                "undo" |
                "redo" |

                /**
                 * Perform a forward deletion.
                 */
                "delete" |

                /**
                 * Perform a forward deletion to the next word boundary after the selection.
                 */
                "delete-word" |

                /**
                 * Perform a backward deletion.
                 */
                "backspace" |

                /**
                 * Perform a backward deletion to the previous word boundary before the
                 * selection.
                 */
                "backspace-word" |

                /**
                 * Perform a backward deletion to the beginning of the current line.
                 */
                "backspace-to-start-of-line" |

                /**
                 * Toggle styles. Commands may be intepreted to modify inline text ranges
                 * or block types.
                 */
                "bold" |
                "italic" |
                "underline" |
                "code" |

                /**
                 * Split a block in two.
                 */
                "split-block" |

                /**
                 * Self-explanatory.
                 */
                "transpose-characters" |
                "move-selection-to-start-of-block" |
                "move-selection-to-end-of-block" |

                /**
                 * Commands to support the "secondary" clipboard provided by certain
                 * browsers and operating systems.
                 */
                "secondary-cut" |
                "secondary-paste"
            );

            /**
             * A type that allows us to avoid passing boolean arguments
             * around to indicate whether a drag type is internal or external.
             */
            type DraftDragType = "internal" | "external";

            /**
             * The list of default valid block types.
             */
            type DraftBlockType = (
                "unstyled" |
                "paragraph" |
                "header-one" |
                "header-two" |
                "header-three" |
                "header-four" |
                "header-five" |
                "header-six" |
                "unordered-list-item" |
                "ordered-list-item" |
                "blockquote" |
                "code-block" |
                "atomic"
            );

            /**
             * A type that allows us to avoid passing boolean arguments
             * around to indicate whether a deletion is forward or backward.
             */
            type DraftRemovalDirection = "backward" | "forward";

            /**
             * A type that allows us to avoid returning boolean values
             * to indicate whether an event was handled or not.
             */
            type DraftHandleValue = "handled" | "not-handled";
        }

        namespace Decorators {
            import ContentBlock = Draft.Model.ImmutableData.ContentBlock;

            /**
            * An interface for document decorator classes, allowing the creation of
            * custom decorator classes.
            *
            * See `CompositeDraftDecorator` for the most common use case.
            */
            interface DraftDecoratorType {
                /**
                 * Given a `ContentBlock`, return an immutable List of decorator keys.
                 */
                getDecorations(block: ContentBlock): Immutable.List<string>;

                /**
                 * Given a decorator key, return the component to use when rendering
                 * this decorated range.
                 */
                getComponentForKey(key: string): Function;

                /**
                 * Given a decorator key, optionally return the props to use when rendering
                 * this decorated range.
                 */
                getPropsForKey(key: string): any;
            }

            /**
             * A DraftDecorator is a strategy-component pair intended for use when
             * rendering content.
             *
             *   - A "strategy": A function that accepts a ContentBlock object and
             *     continuously executes a callback with start/end values corresponding to
             *     relevant matches in the document text. For example, getHashtagMatches
             *     uses a hashtag regex to find hashtag strings in the block, and
             *     for each hashtag match, executes the callback with start/end pairs.
             *
             *   - A "component": A React component that will be used to render the
             *     "decorated" section of text.
             *
             *   - "props": Props to be passed into the React component that will be used.
             */
            interface DraftDecorator {
                strategy: (block: ContentBlock, callback: (start: number, end: number) => void, contentState: ContentState) => void;
                component: Function;
                props?: Object;
            }

            /**
             * A CompositeDraftDecorator traverses through a list of DraftDecorator
             * instances to identify sections of a ContentBlock that should be rendered
             * in a "decorated" manner. For example, hashtags, mentions, and links may
             * be intended to stand out visually, be rendered as anchors, etc.
             *
             * The list of decorators supplied to the constructor will be used in the
             * order they are provided. This allows the caller to specify a priority for
             * string matching, in case of match collisions among decorators.
             *
             * For instance, I may have a link with a `#` in its text. Though this section
             * of text may match our hashtag decorator, it should not be treated as a
             * hashtag. I should therefore list my link DraftDecorator
             * before my hashtag DraftDecorator when constructing this composite
             * decorator instance.
             *
             * Thus, when a collision like this is encountered, the earlier match is
             * preserved and the new match is discarded.
             */
            class CompositeDraftDecorator {
                constructor(decorators: Array<DraftDecorator>);

                getDecorations(block: ContentBlock): Immutable.List<string>;
                getComponentForKey(key: string): Function;
                getPropsForKey(key: string): Object;
            }
        }

        namespace Encoding {
            import ContentBlock = Draft.Model.ImmutableData.ContentBlock;
            import ContentState = Draft.Model.ImmutableData.ContentState;

            import DraftBlockRenderMap = Draft.Component.Base.DraftBlockRenderMap;
            import DraftBlockType = Draft.Model.Constants.DraftBlockType;

            import DraftEntityType = Draft.Model.Entity.DraftEntityType;
            import DraftEntityMutability = Draft.Model.Entity.DraftEntityMutability;

            /**
             * A plain object representation of an entity attribution.
             *
             * The `key` value corresponds to the key of the entity in the `entityMap` of
             * a `ComposedText` object, not for use with `DraftEntity.get()`.
             */
            interface EntityRange {
                key: number,
                offset: number,
                length: number,
            }

            /**
             * A plain object representation of an inline style range.
             */
            interface InlineStyleRange {
                style: string;
                offset: number;
                length: number;
            }

            /**
             * A plain object representation of an EntityInstance.
             */
            interface RawDraftEntity {
                type: DraftEntityType;
                mutability: DraftEntityMutability;
                data: { [key: string]: any };
            }

            /**
             * A plain object representation of a ContentBlock, with all style and entity
             * attribution repackaged as range objects.
             */
            interface RawDraftContentBlock {
                key: string;
                type: DraftBlockType;
                text: string;
                depth: number;
                inlineStyleRanges: Array<InlineStyleRange>;
                entityRanges: Array<EntityRange>;
                data?: Object;
            }

            /**
             * A type that represents a composed document as vanilla JavaScript objects,
             * with all styles and entities represented as ranges. Corresponding entity
             * objects are packaged as objects as well.
             *
             * This object is especially useful when sending the document state to the
             * server for storage, as its representation is more concise than our
             * immutable objects.
             */
            interface RawDraftContentState {
                blocks: Array<RawDraftContentBlock>;
                entityMap: { [key: string]: RawDraftEntity };
            }

            function convertFromHTMLtoContentBlocks(html: string, DOMBuilder?: Function, blockRenderMap?: DraftBlockRenderMap): { contentBlocks: Array<ContentBlock>, entityMap: any };
            function convertFromRawToDraftState(rawState: RawDraftContentState): ContentState;
            function convertFromDraftStateToRaw(contentState: ContentState): RawDraftContentState;
        }

        namespace Entity {
            type ComposedEntityType = "LINK" | "TOKEN" | "PHOTO";
            type DraftEntityType = string | ComposedEntityType;

            /**
             * An enum representing the possible "mutability" options for an entity.
             * This refers to the behavior that should occur when inserting or removing
             * characters in a text range with an entity applied to it.
             *
             * `MUTABLE`:
             *   The text range can be modified freely. Generally used in cases where
             *   the text content and the entity do not necessarily have a direct
             *   relationship. For instance, the text and URI for a link may be completely
             *   different. The user is allowed to edit the text as needed, and the entity
             *   is preserved and applied to any characters added within the range.
             *
             * `IMMUTABLE`:
             *   Not to be confused with immutable data structures used to represent the
             *   state of the editor. Immutable entity ranges cannot be modified in any
             *   way. Adding characters within the range will remove the entity from the
             *   entire range. Deleting characters will delete the entire range. Example:
             *   Facebook Page mentions.
             *
             * `SEGMENTED`:
             *   Segmented entities allow the removal of partial ranges of text, as
             *   separated by a delimiter. Adding characters wihin the range will remove
             *   the entity from the entire range. Deleting characters within a segmented
             *   entity will delete only the segments affected by the deletion. Example:
             *   Facebook User mentions.
             */
            type DraftEntityMutability = "MUTABLE" | "IMMUTABLE" | "SEGMENTED";

            /**
             * A "document entity" is an object containing metadata associated with a
             * piece of text in a ContentBlock.
             *
             * For example, a `link` entity might include a `uri` property. When a
             * ContentBlock is rendered in the browser, text that refers to that link
             * entity may be rendered as an anchor, with the `uri` as the href value.
             *
             * In a ContentBlock, every position in the text may correspond to zero
             * or one entities. This correspondence is tracked using a key string,
             * generated via DraftEntity.create() and used to obtain entity metadata
             * via DraftEntity.get().
             */
            class DraftEntity {
                /**
                 * Create a DraftEntityInstance and store it for later retrieval.
                 *
                 * A random key string will be generated and returned. This key may
                 * be used to track the entity's usage in a ContentBlock, and for
                 * retrieving data about the entity at render time.
                 */
                static create(type: DraftEntityType, mutability: DraftEntityMutability, data?: Object): string;

                /**
                 * Add an existing DraftEntityInstance to the DraftEntity map. This is
                 * useful when restoring instances from the server.
                 */
                static add(instance: DraftEntityInstance): string;

                /**
                 * Retrieve the entity corresponding to the supplied key string.
                 */
                static get(key: string): DraftEntityInstance;

                /**
                 * Entity instances are immutable. If you need to update the data for an
                 * instance, this method will merge your data updates and return a new
                 * instance.
                 */
                static mergeData(key: string, toMerge: { [key: string]: any }): DraftEntityInstance;

                /**
                 * Completely replace the data for a given instance.
                 */
                static replaceData(key: string, newData: { [key: string]: any }): DraftEntityInstance;
            }

            /**
             * An instance of a document entity, consisting of a `type` and relevant
             * `data`, metadata about the entity.
             *
             * For instance, a "link" entity might provide a URI, and a "mention"
             * entity might provide the mentioned user's ID. These pieces of data
             * may be used when rendering the entity as part of a ContentBlock DOM
             * representation. For a link, the data would be used as an href for
             * the rendered anchor. For a mention, the ID could be used to retrieve
             * a hovercard.
             */
            interface DraftEntityInstance {
                getType(): DraftEntityType;
                getMutability(): DraftEntityMutability;
                getData(): any;
            }
        }

        namespace ImmutableData {
            import DraftBlockType = Draft.Model.Constants.DraftBlockType;
            import DraftDecoratorType = Draft.Model.Decorators.DraftDecoratorType;

            import DraftEntityType = Draft.Model.Entity.DraftEntityType;
            import DraftEntityMutability = Draft.Model.Entity.DraftEntityMutability;

            type DraftInlineStyle = Immutable.OrderedSet<string>;
            type BlockMap = Immutable.OrderedMap<string, Draft.Model.ImmutableData.ContentBlock>;

            var Record: Immutable.Record.Class;

            interface DraftBlockRenderConfig {
                element: string;
                wrapper?: React.ReactElement<any>;
            }

            class EditorState extends Record {
                static createEmpty(decorator?: DraftDecoratorType): EditorState;
                static createWithContent(contentState: ContentState, decorator?: DraftDecoratorType): EditorState;
                static create(config: Object): EditorState;
                static set(editorState: EditorState, put: Object): EditorState;

                /**
                 * Incorporate native DOM selection changes into the EditorState. This
                 * method can be used when we simply want to accept whatever the DOM
                 * has given us to represent selection, and we do not need to re-render
                 * the editor.
                 *
                 * To forcibly move the DOM selection, see `EditorState.forceSelection`.
                 */
                static acceptSelection(editorState: EditorState, selection: SelectionState): EditorState;

                /**
                 * At times, we need to force the DOM selection to be where we
                 * need it to be. This can occur when the anchor or focus nodes
                 * are non-text nodes, for instance. In this case, we want to trigger
                 * a re-render of the editor, which in turn forces selection into
                 * the correct place in the DOM. The `forceSelection` method
                 * accomplishes this.
                 *
                 * This method should be used in cases where you need to explicitly
                 * move the DOM selection from one place to another without a change
                 * in ContentState.
                 */
                static forceSelection(editorState: EditorState, selection: SelectionState): EditorState;

                /**
                 * Move selection to the end of the editor without forcing focus.
                 */
                static moveSelectionToEnd(editorState: EditorState): EditorState;

                /**
                 * Force focus to the end of the editor. This is useful in scenarios
                 * where we want to programmatically focus the input and it makes sense
                 * to allow the user to continue working seamlessly.
                 */
                static moveFocusToEnd(editorState: EditorState): EditorState;

                /**
                 * Push the current ContentState onto the undo stack if it should be
                 * considered a boundary state, and set the provided ContentState as the
                 * new current content.
                 */
                static push(editorState: EditorState, contentState: ContentState, changeType: EditorChangeType): EditorState;

                /**
                 * Make the top ContentState in the undo stack the new current content and
                 * push the current content onto the redo stack.
                 */
                static undo(editorState: EditorState): EditorState;

                /**
                 * Make the top ContentState in the redo stack the new current content and
                 * push the current content onto the undo stack.
                 */
                static redo(editorState: EditorState): EditorState;

                toJS(): Object;
                getAllowUndo(): boolean;
                getCurrentContent(): ContentState;
                getUndoStack(): Immutable.Stack<ContentState>;
                getRedoStack(): Immutable.Stack<ContentState>;
                getSelection(): SelectionState;
                getDecorator(): DraftDecoratorType;
                isInCompositionMode(): boolean;
                mustForceSelection(): boolean;
                getNativelyRenderedContent(): ContentState;
                getLastChangeType(): EditorChangeType;

                /**
                 * While editing, the user may apply inline style commands with a collapsed
                 * cursor, intending to type text that adopts the specified style. In this
                 * case, we track the specified style as an "override" that takes precedence
                 * over the inline style of the text adjacent to the cursor.
                 *
                 * If null, there is no override in place.
                 */
                getInlineStyleOverride(): DraftInlineStyle;

                static setInlineStyleOverride(editorState: EditorState, inlineStyleOverride: DraftInlineStyle): EditorState;

                /**
                 * Get the appropriate inline style for the editor state. If an
                 * override is in place, use it. Otherwise, the current style is
                 * based on the location of the selection state.
                 */
                getCurrentInlineStyle(): DraftInlineStyle;

                getBlockTree(blockKey: string): Immutable.List<any>;
                isSelectionAtStartOfContent(): boolean;
                isSelectionAtEndOfContent(): boolean;
                getDirectionMap(): Immutable.OrderedMap<any, any>;
            }

            class ContentBlock extends Record {
                getKey(): string;

                getType(): DraftBlockType;
                getType(): string;

                getText(): string;
                getCharacterList(): Immutable.List<CharacterMetadata>;
                getLength(): number;
                getDepth(): number;
                getData(): Immutable.Map<any, any>;
                getInlineStyleAt(offset: number): DraftInlineStyle;
                getEntityAt(offset: number): string;

                /**
                 * Execute a callback for every contiguous range of styles within the block.
                 */
                findStyleRanges(filterFn: (value: CharacterMetadata) => boolean, callback: (start: number, end: number) => void): void;

                /**
                 * Execute a callback for every contiguous range of entities within the block.
                 */
                findEntityRanges(filterFn: (value: CharacterMetadata) => boolean, callback: (start: number, end: number) => void): void;
            }

            class ContentState extends Record {
                static createFromBlockArray(blocks: Array<ContentBlock>, entityMap: any): ContentState;
                static createFromText(text: string, delimiter?: string): ContentState;

                createEntity(type: DraftEntityType, mutability: DraftEntityMutability, data?: Object): ContentState;
                getEntity(key: string): EntityInstance;
                getLastCreatedEntityKey(): string;

                getBlockMap(): BlockMap;
                getSelectionBefore(): SelectionState;
                getSelectionAfter(): SelectionState;
                getBlockForKey(key: string): ContentBlock;

                getKeyBefore(key: string): string;
                getKeyAfter(key: string): string;
                getBlockAfter(key: string): ContentBlock;
                getBlockBefore(key: string): ContentBlock;

                getBlocksAsArray(): Array<ContentBlock>;
                getFirstBlock(): ContentBlock;
                getLastBlock(): ContentBlock;
                getPlainText(delimiter?: string): string;
                hasText(): boolean;
            }

            class SelectionState extends Record {
                static createEmpty(key: string): SelectionState;

                serialize(): string;
                getAnchorKey(): string;
                getAnchorOffset(): number;
                getFocusKey(): string;
                getFocusOffset(): number;
                getIsBackward(): boolean;
                getHasFocus(): boolean;
                /**
                 * Return whether the specified range overlaps with an edge of the
                 * SelectionState.
                 */
                hasEdgeWithin(blockKey: string, start: number, end: number): boolean;
                isCollapsed(): boolean;
                getStartKey(): string;
                getStartOffset(): number;
                getEndKey(): string;
                getEndOffset(): number;
            }

            class CharacterMetadata {
                static applyStyle(record: CharacterMetadata, style: string): CharacterMetadata;
                static removeStyle(record: CharacterMetadata, style: string): CharacterMetadata;
                static applyEntity(record: CharacterMetadata, entityKey: string): CharacterMetadata;
                static applyEntity(record: CharacterMetadata): CharacterMetadata;
                /**
                 * Use this function instead of the `CharacterMetadata` constructor.
                 * Since most content generally uses only a very small number of
                 * style/entity permutations, we can reuse these objects as often as
                 * possible.
                 */
                static create(config?: CharacterMetadataConfig): CharacterMetadata;
                static create(): CharacterMetadata;

                getStyle(): DraftInlineStyle;
                getEntity(): string;
                hasStyle(style: string): boolean;
            }

            interface CharacterMetadataConfig {
                style?: DraftInlineStyle;
                entity?: string;
            }

            type EditorChangeType = (
                "adjust-depth" |
                "apply-entity" |
                "backspace-character" |
                "change-block-data" |
                "change-block-type" |
                "change-inline-style" |
                "delete-character" |
                "insert-characters" |
                "insert-fragment" |
                "redo" |
                "remove-range" |
                "spellcheck-change" |
                "split-block" |
                "undo"
            )

            interface BlockMapBuilder {
                createFromArray(blocks: Array<ContentBlock>): BlockMap;
            }

            const DefaultDraftBlockRenderMap: Immutable.Map<any, any>;
            const DefaultDraftInlineStyle: Immutable.Map<any, any>;
        }

        namespace Keys {
            function generateRandomKey(): string;
        }

        namespace Modifier {
            import EditorState = Draft.Model.ImmutableData.EditorState;
            import ContentState = Draft.Model.ImmutableData.ContentState;
            import SelectionState = Draft.Model.ImmutableData.SelectionState;

            import BlockMap = Draft.Model.ImmutableData.BlockMap;
            import DraftInlineStyle = Draft.Model.ImmutableData.DraftInlineStyle;

            import DraftRemovalDirection = Draft.Model.Constants.DraftRemovalDirection;
            import DraftBlockType = Draft.Model.Constants.DraftBlockType;

            import DraftEditorCommand = Draft.Model.Constants.DraftEditorCommand;

            type URI = any;

            class AtomicBlockUtils {
                static insertAtomicBlock(editorState: EditorState, entityKey: string, character: string): EditorState;
            }

            /**
             * `DraftModifier` provides a set of convenience methods that apply
             * modifications to a `ContentState` object based on a target `SelectionState`.
             *
             * Any change to a `ContentState` should be decomposable into a series of
             * transaction functions that apply the required changes and return output
             * `ContentState` objects.
             *
             * These functions encapsulate some of the most common transaction sequences.
             */
            class DraftModifier {
                static replaceText(contentState: ContentState, rangeToReplace: SelectionState, text: string, inlineStyle?: DraftInlineStyle, entityKey?: string): ContentState;
                static insertText(contentState: ContentState, targetRange: SelectionState, text: string, inlineStyle?: DraftInlineStyle, entityKey?: string): ContentState;
                static moveText(contentState: ContentState, removalRange: SelectionState, targetRange: SelectionState): ContentState;
                static replaceWithFragment(contentState: ContentState, targetRange: SelectionState, fragment: BlockMap): ContentState;

                static removeRange(contentState: ContentState, rangeToRemove: SelectionState, removalDirection: DraftRemovalDirection): ContentState;

                static splitBlock(contentState: ContentState, selectionState: SelectionState): ContentState;
                static applyInlineStyle(contentState: ContentState, selectionState: SelectionState, inlineStyle: string): ContentState;
                static removeInlineStyle(contentState: ContentState, selectionState: SelectionState, inlineStyle: string): ContentState;

                static setBlockType(contentState: ContentState, selectionState: SelectionState, blockType: DraftBlockType): ContentState;
                static setBlockType(contentState: ContentState, selectionState: SelectionState, blockType: string): ContentState;

                static setBlockData(contentState: ContentState, selectionState: SelectionState, blockData: Immutable.Map<any, any>): ContentState;
                static mergeBlockData(contentState: ContentState, selectionState: SelectionState, blockData: Immutable.Map<any, any>): ContentState;
                static applyEntity(contentState: ContentState, selectionState: SelectionState, entityKey: string): ContentState;
            }

            class RichTextEditorUtil {
                static currentBlockContainsLink(editorState: EditorState): boolean;
                static getCurrentBlockType(editorState: EditorState): DraftBlockType;
                static getCurrentBlockType(editorState: EditorState): string;
                static getDataObjectForLinkURL(uri: URI): Object;

                static handleKeyCommand(editorState: EditorState, command: DraftEditorCommand): EditorState;
                static handleKeyCommand(editorState: EditorState, command: string): EditorState;

                static insertSoftNewline(editorState: EditorState): EditorState;

                /**
                 * For collapsed selections at the start of styled blocks, backspace should
                 * just remove the existing style.
                 */
                static onBackspace(editorState: EditorState): EditorState;
                static onDelete(editorState: EditorState): EditorState;
                static onTab(event: SyntheticKeyboardEvent, editorState: EditorState, maxDepth: number): EditorState;

                static toggleBlockType(editorState: EditorState, blockType: DraftBlockType): EditorState;
                static toggleBlockType(editorState: EditorState, blockType: string): EditorState;

                static toggleCode(editorState: EditorState): EditorState;

                /**
                 * Toggle the specified inline style for the selection. If the
                 * user's selection is collapsed, apply or remove the style for the
                 * internal state. If it is not collapsed, apply the change directly
                 * to the document state.
                 */
                static toggleInlineStyle(editorState: EditorState, inlineStyle: string): EditorState;

                static toggleLink(editorState: EditorState, targetSelection: SelectionState, entityKey: string): EditorState;

                /**
                 * When a collapsed cursor is at the start of an empty styled block, allow
                 * certain key commands (newline, backspace) to simply change the
                 * style of the block instead of the default behavior.
                 */
                static tryToRemoveBlockStyle(editorState: EditorState): ContentState;
            }
        }
    }
}

import Editor = Draft.Component.Base.DraftEditor;
import EditorBlock = Draft.Component.Components.DraftEditorBlock;
import EditorState = Draft.Model.ImmutableData.EditorState;

import CompositeDecorator = Draft.Model.Decorators.CompositeDraftDecorator;
import Entity = Draft.Model.Entity.DraftEntity;
import EntityInstance = Draft.Model.Entity.DraftEntityInstance;

import BlockMapBuilder = Draft.Model.ImmutableData.BlockMapBuilder;
import CharacterMetadata = Draft.Model.ImmutableData.CharacterMetadata;
import ContentBlock = Draft.Model.ImmutableData.ContentBlock;
import ContentState = Draft.Model.ImmutableData.ContentState;
import SelectionState = Draft.Model.ImmutableData.SelectionState;
import DraftInlineStyle = Draft.Model.ImmutableData.DraftInlineStyle;

import AtomicBlockUtils = Draft.Model.Modifier.AtomicBlockUtils;
import KeyBindingUtil = Draft.Component.Utils.KeyBindingUtil;
import Modifier = Draft.Model.Modifier.DraftModifier;
import RichUtils = Draft.Model.Modifier.RichTextEditorUtil;

import DefaultDraftBlockRenderMap = Draft.Model.ImmutableData.DefaultDraftBlockRenderMap;
import DefaultDraftInlineStyle = Draft.Model.ImmutableData.DefaultDraftInlineStyle;

import RawDraftContentState = Draft.Model.Encoding.RawDraftContentState;
import convertFromRaw = Draft.Model.Encoding.convertFromRawToDraftState;
import convertToRaw = Draft.Model.Encoding.convertFromDraftStateToRaw;
import convertFromHTML = Draft.Model.Encoding.convertFromHTMLtoContentBlocks;

import genKey = Draft.Model.Keys.generateRandomKey;
import getDefaultKeyBinding = Draft.Component.Utils.getDefaultKeyBinding;
import getVisibleSelectionRect = Draft.Component.Selection.getVisibleSelectionRect;

export {
    Editor,
    EditorBlock,
    EditorState,

    CompositeDecorator,
    Entity,
    EntityInstance,

    BlockMapBuilder,
    CharacterMetadata,
    ContentBlock,
    ContentState,
    SelectionState,
    DraftInlineStyle,

    AtomicBlockUtils,
    KeyBindingUtil,
    Modifier,
    RichUtils,

    DefaultDraftBlockRenderMap,
    DefaultDraftInlineStyle,

    RawDraftContentState,
    convertFromRaw,
    convertToRaw,
    convertFromHTML,

    genKey,
    getDefaultKeyBinding,
    getVisibleSelectionRect
};
