// Type definitions for draft-js 0.7.0
// Project: https://github.com/facebook/draft-js
// Definitions by: Pavel Evsegneev <https://github.com/Ahineya>
// Definitions extended by: Bob Koerner <https://github.com/bkoerner>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
declare module "draft-js" {
    type BlockMap = any;

    interface DraftBlockRenderConfig {
        element: string,
        wrapper?: any
    }

    type DraftBlockRenderMap = any;

    type DraftBlockType = (
        'unstyled' |
        'paragraph' |
        'header-one' |
        'header-two' |
        'header-three' |
        'header-four' |
        'header-five' |
        'header-six' |
        'unordered-list-item' |
        'ordered-list-item' |
        'blockquote' |
        'code-block' |
        'atomic'
    );

    interface DraftClientRect {
        top: number,
        right: number,
        bottom: number,
        left: number,
        width: number,
        height: number
    }

    interface DraftDecoratorType {
        getDecorations(block: ContentBlock): any,
        getComponentForKey(key: string): Function,
        getPropsForKey(key: string): any
    }

    interface IDraftDecoratorType {
        new(decorators: any): DraftDecoratorType
    }

    type DraftDragType = (
        'internal' | 
        'external'
    );

    type DraftEditorCommand = (
        'undo' |
        'redo' |
        'delete' |
        'delete-word' |
        'backspace' |
        'backspace-word' |
        'backspace-to-start-of-line' |
        'bold' |
        'italic' |
        'underline' |
        'code' |
        'split-block' |
        'transpose-characters' |
        'move-selection-to-start-of-block' |
        'move-selection-to-end-of-block' |
        'secondary-cut' |
        'secondary-paste'
    );

    type DraftInlineStyle = any;

    type DraftRemovalDirection = (
        'backward' |
        'forward'
    );

    type DraftTextAlignment = (
        'left' |
        'center' |
        'right'
    );

    type EditorChangeType = (
        'adjust-depth' |
        'apply-entity' |
        'backspace-character' |
        'change-block-data' |
        'change-block-type' |
        'change-inline-style' |
        'delete-character' |
        'insert-characters' |
        'insert-fragment' |
        'redo' |
        'remove-range' |
        'spellcheck-range' |
        'split-block' |
        'undo'
    );

    interface EditorStateCreationConfig {
        currentContent: any,
        decorator: any
    }

    interface RawBlock {
        key: string,
        text: string,
        type: string,
        depth: number,
        inlineStyleRanges: any,
        entityRanges: any
    }

    interface RawState {
        blocks: Array<RawBlock>
        entityMap: any,
    }

    interface SyntheticEvent {
    }

    interface SyntheticKeyboardEvent {
    }

    interface EditorProps {
        editorState: EditorState,
        onChange: (editorState: EditorState) => void,

        placeholder?: string,
        textAlignment?: DraftTextAlignment,

        blockRendererFn?: (block: ContentBlock) => any,
        blockStyleFn?: (block: ContentBlock) => string,
        keyBindingFn?: (e: SyntheticKeyboardEvent) => string,

        readOnly?: boolean,
        spellCheck?: boolean,
        stripPastedStyles?: boolean,

        tabIndex?: number,
        role?: string,

        ariaActiveDescendantID?: string,
        ariaAutoComplete?: string,
        ariaDescribedBy?: string,
        ariaExpanded?: boolean,
        ariaHasPopup?: boolean,
        ariaLabel?: string,
        ariaOwneeID?: string,
        webDriverTestID?: string,

        handleReturn?: (e: SyntheticKeyboardEvent) => boolean,
        handleKeyCommand?: (command: DraftEditorCommand) => boolean,
        handleBeforeInput?: (chars: string) => boolean,
        handlePastedText?: (text: string, html?: string) => boolean,
        handlePastedFiles?: (files: Array<Blob>) => boolean,
        handleDroppedFiles?: (
            selection: SelectionState, 
            files: Array<Blob>
        ) => boolean,
        handleDrop?: (
            selection: SelectionState, 
            dataTransfer: any, 
            isInternal: DraftDragType
        ) => boolean,

        onEscape?: (e: SyntheticKeyboardEvent) => void,
        onTab?: (e: SyntheticKeyboardEvent) => void,
        onUpArrow?: (e: SyntheticKeyboardEvent) => void,
        onDownArrow?: (e: SyntheticKeyboardEvent) => void,

        onBlur?: (e: SyntheticEvent) => void,
        onFocus?: (e: SyntheticEvent) => void,

        customStyleMap?: any,
        blockRenderMap?: DraftBlockRenderMap
    }

    interface Editor {
        props: EditorProps,
        state: EditorState,
        refs: any,
        context: any,
        setState(): any,
        render(): any,
        forceUpdate(): any
    }

    interface IEditor {
        new(): Editor
    }

    interface EditorBlockProps {
        block: ContentBlock,
        blockProps: any,
        customStyleMap: any,
        decorator: DraftDecoratorType,
        direction: BlockMap,
        forceSelection: boolean,
        key: string,
        offsetKey: string,
        selection: SelectionState,
        tree: any
    }

    interface EditorBlock {
        props: EditorBlockProps,
        state: any,
        render: (props: any) => any;
    }

    interface EditorState {
        getCurrentContent(): ContentState,
        getSelection(): SelectionState,
        getCurrentInlineStyle(): DraftInlineStyle,
        getBlockTree(blockKey: string): any,

        getAllowUndo(): boolean,
        getDecorator(): DraftDecoratorType,
        getDirectionMap(): BlockMap,
        mustForceSelection(): boolean,
        isInCompositionMode(): boolean,
        getInlineStyleOverride(): DraftInlineStyle,
        getLastChangeType(): EditorChangeType,
        getNativelyRenderedContent(): ContentState,
        getRedoStack(): any,
        getUndoStack(): any,

        isSelectionStateStartOfContent(): boolean,
        isSelectionAtEndOfContent(): boolean,

        toJS(): string
    }

    interface IEditorState {
        new(): EditorState,

        createEmpty(decorator?: any): EditorState,
        createWithContent(contentState: ContentState, decorator?: any): EditorState,
        create(config: EditorStateCreationConfig): EditorState,
        push(editorState: EditorState, contentState: ContentState, changeType: string): EditorState,
        undo(editorState: EditorState): EditorState,
        redo(editorState: EditorState): EditorState,
        acceptSelection(editorState: EditorState, selectionState: SelectionState): EditorState,
        forceSelection(editorState: EditorState, selectionState: SelectionState): EditorState,
        moveSelectionToEnd(editorState: EditorState): EditorState,
        moveFocusToEnd(editorState: EditorState): EditorState,
        setInlineStyleOverride(inlineStyleOverride: DraftInlineStyle): EditorState
    }

    interface Entity {
        create(type: string, mutability: string, data?: any): string,
        add(instance: EntityInstance): string,
        get(key: string): EntityInstance,
        mergeData(key: string, toMerge: {[key: string]: any}): EntityInstance,
        replaceData(key: string, newData: {[key: string]: any}): EntityInstance
    }

    interface EntityInstance {
        getType(): string,
        getMutability(): string,
        getData(): any
    }

    interface BlockMapBuilder {
        createFromArray(blocks: Array<ContentBlock>): BlockMap
    }

    interface CharacterMetadataConfig {
        style?: DraftInlineStyle,
        entity?: string
    }

    interface CharacterMetadata {
        getStyle(): DraftInlineStyle,
        hasStyle(style: string): boolean,

        getEntity(): string
    }

    interface ICharacterMetadata {
        new(): CharacterMetadata,
        create(config?: CharacterMetadataConfig): CharacterMetadata,
        applyStyle(
            record: CharacterMetadata,
            style: string
        ): CharacterMetadata,

        removeStyle(
            record: CharacterMetadata,
            style: string
        ): CharacterMetadata,

        applyEntity(
            record: CharacterMetadata,
            entityKey?: string
        ): CharacterMetadata,
    }

    interface ContentBlock {
        key: string,
        type: DraftBlockType,
        text: string,
        characterList: any,
        depth: number,
        data: any,

        getKey(): string,
        getType(): DraftBlockType,
        getText(): string,
        getCharacterList(): any,
        getLength(): number,
        getDepth(): number,
        getInlineStyleAt(offset: number): DraftInlineStyle,
        getEntityAt(offset: number): string,
        getData(): any,
        findStyleRanges(
            filterFn: (value: CharacterMetadata) => boolean, 
            callback: (start: number, end: number) => void
        ): void,
        findEntityRanges(
            filterFn: (value: CharacterMetadata) => boolean, 
            callback: (start: number, end: number) => void
        ): void,

    }

    interface IContentBlock {
        new(draftContentBlock: any): ContentBlock;
    }

    interface ContentState {
        getBlockMap(): BlockMap,
        getSelectionBefore(): SelectionState,
        getSelectionAfter(): SelectionState,

        getBlockForKey(key: string): ContentBlock,
        getKeyBefore(key: string): string,
        getKeyAfter(key: string): string,

        getBlockBefore(key: string): ContentBlock,
        getBlockAfter(key: string): ContentBlock,

        getBlocksAsArray(): Array<ContentBlock>,
        getFirstBlock(): ContentBlock,
        getLastBlock(): ContentBlock,

        getPlainText(delimiter?: string): string,
        hasText(): boolean,

        set(key: string, value: any): ContentState,
        toJS(): any
    }

    interface IContentState {
        new(): ContentState,
        createFromText(
            text: string,
            delimiter?: string
        ): ContentState,
        createFromBlockArray(blocks: Array<ContentBlock>): ContentState,
    }

    interface SelectionState {
        getStartKey(): string,
        getStartOffset(): number,
        getEndKey(): string,
        getEndOffset(): number,
        getAnchorKey(): string,
        getAnchorOffset(): number,
        getFocusKey(): string,
        getFocusOffset(): number,

        getIsBackward(): boolean,
        getHasFocus(): boolean,
        isCollapsed(): boolean,

        hasEdgeWithin(blockKey: string, start: number, end: number): boolean,
        serialize(): string,

        //  Immutable Map API
        merge(iterables: any) : SelectionState
    }

    interface ISelectionState {
        new(draftSelectionState: any): SelectionState;
        createEmpty(blockKey: string): SelectionState;
    }

    interface AtomicBlockUtils {
        insertAtomicBlock(
            editorState: EditorState,
            entityKey: string,
            character: string
        ): EditorState
    }

    interface KeyBindingUtil {
        isCtrlKeyCommand(e: SyntheticKeyboardEvent): boolean,
        isOptionKeyCommand(e: SyntheticKeyboardEvent): boolean,
        hasCommandModifier(e: SyntheticKeyboardEvent): boolean
    }

    interface Modifier {
        replaceText(
            contentState: ContentState,
            rangeToReplace: SelectionState,
            text: string,
            inlineStyle?: DraftInlineStyle,
            entityKey?: string
        ): ContentState,

        insertText(
            contentState: ContentState,
            targetRange: SelectionState,
            text: string,
            inlineStyle?: DraftInlineStyle,
            entityKey?: string
        ): ContentState,

        moveText(
            contentState: ContentState,
            removalRange: SelectionState,
            targetRange: SelectionState
        ): ContentState,

        replaceWithFragment(
            contentState: ContentState,
            targetRange: SelectionState,
            fragment: BlockMap
        ): ContentState,

        removeRange(
            contentState: ContentState,
            rangeToRemove: SelectionState,
            removalDirection: DraftRemovalDirection
        ): ContentState,

        splitBlock(
            contentState: ContentState,
            selectionState: SelectionState
        ): ContentState,

        applyInlineStyle(
            contentState: ContentState,
            selectionState: SelectionState,
            inlineStyle: string
        ): ContentState,

        removeInlineStyle(
            contentState: ContentState,
            selectionState: SelectionState,
            inlineStyle: string
        ): ContentState,

        setBlockType(
            contentState: ContentState,
            selectionState: SelectionState,
            blockType: DraftBlockType
        ): ContentState,

        //  Note:  These functions are documented but do not appear in the
        //  draft-js source code:
        // setBlockData(
        //     contentState: ContentState,
        //     selectionState: SelectionState,
        //     blockData: Map<any, any>
        // ): ContentState,

        // mergeBlockData(
        //     contentState: ContentState,
        //     selectionState: SelectionState,
        //     blockData: Map<any, any>
        // ): ContentState,

        applyEntity(
            contentState: ContentState,
            selectionState: SelectionState,
            entityKey?: string
        ): ContentState
    }

    interface RichUtils {
        currentBlockContainsLink(editorState: EditorState): boolean,
        getCurrentBlockType(editorState: EditorState): string,
        handleKeyCommand(editorState: EditorState, command: string): EditorState,
        insertSoftNewline(editorState: EditorState): EditorState,
        onBackspace(editorState: EditorState): EditorState,
        onDelete(editorState: EditorState): EditorState,
        onTab(
            event: SyntheticEvent, 
            editorState: EditorState, 
            maxDepth: number
        ): EditorState,
        toggleBlockType(editorState: EditorState, blockType: string): EditorState,
        toggleCode(editorState: EditorState): EditorState,
        toggleInlineStyle(editorState: EditorState, inlineStyle: string): EditorState,
        toggleLink(
            editorState: EditorState, 
            targetSelection: SelectionState, 
            entityKey: string
        ): EditorState,
        tryToRemoveBlockStyle(editorState: EditorState): EditorState
    }

    var Editor: IEditor;
    var EditorBlock: EditorBlock;
    var EditorState: IEditorState;

    var CompositeDecorator: IDraftDecoratorType;
    var Entity: Entity;
    var EntityInstance: EntityInstance;

    var BlockMapBuilder: BlockMapBuilder;
    var CharacterMetadata: ICharacterMetadata;
    var ContentBlock: IContentBlock;
    var ContentState: IContentState;
    var SelectionState: ISelectionState;

    var AtomicBlockUtils : AtomicBlockUtils;
    var KeyBindingUtil: KeyBindingUtil;

    var Modifier: Modifier;
    var RichUtils: RichUtils;

    var DefaultDraftBlockRenderMap: any;
    var DefaultDraftInlineStyle: DraftInlineStyle;

    function convertFromHTML(html: string) : Array<ContentBlock>;

    function convertFromRaw(rawState: RawState): ContentState;

    function convertToRaw(contentState: ContentState): RawState;

    function genKey(): string;

    function getDefaultKeyBinding(e: SyntheticKeyboardEvent) : string;

    function getVisibleSelectionRect(global: any) : DraftClientRect;
}
