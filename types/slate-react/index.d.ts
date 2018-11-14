// Type definitions for slate-react 0.20
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Patrick Sachs <https://github.com/PatrickSachs>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Irwan Fario Subastian <https://github.com/isubasti>
//                 Sebastian Greaves <https://github.com/sgreav>
//                 Francesco Agnoletto <https://github.com/Kornil>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
    Document,
    Editor as Controller,
    Mark,
    Node,
    Block,
    Inline,
    Operations,
    Schema,
    Stack,
    Value,
    Operation,
    MarkProperties,
    BlockProperties,
    InlineProperties,
    Path,
    RangeProperties,
    NodeProperties,
    Commandable,
    Range
} from "slate";
import * as Immutable from "immutable";
import * as React from "react";

// Values prefixed with "data-..." (Used for spellchecking according to docs)
export interface RenderAttributes {
    [key: string]: any;
}

export interface RenderMarkProps {
    attributes: RenderAttributes;
    children: React.ReactNode;
    editor: Controller;
    mark: Mark;
    marks: Immutable.Set<Mark>;
    node: Node;
    offset: number;
    text: string;
}

export interface RenderNodeProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: Controller;
  isFocused: boolean;
  isSelected: boolean;
  key: string;
  node: Block | Inline;
  parent: Node;
  readOnly: boolean;
}

export interface RenderPlaceholderProps {
    editor: Controller;
    readOnly: boolean;
}

export type EventHook = (
    event: Event,
    editor: Controller,
    next: () => any
) => any;

export interface Plugin {
    decorateNode?: (node: Node, editor: Controller, next: () => any) => any;
    renderEditor?: (props: EditorProps, editor: Controller, next: () => any) => any;
    renderMark?: (props: RenderMarkProps, editor: Controller, next: () => any) => any;
    renderNode?: (props: RenderNodeProps, editor: Controller, next: () => any) => any;
    renderPlaceholder?: (props: RenderPlaceholderProps, editor: Controller, next: () => any) => any;
    shouldNodeComponentUpdate?: (previousProps: RenderNodeProps, props: RenderNodeProps, editor: Controller, next: () => any) => any;

    onBeforeInput?: EventHook;
    onBlur?: EventHook;
    onClick?: EventHook;
    onCompositionEnd?: EventHook;
    onCompositionStart?: EventHook;
    onCopy?: EventHook;
    onCut?: EventHook;
    onDragEnd?: EventHook;
    onDragEnter?: EventHook;
    onDragExit?: EventHook;
    onDragLeave?: EventHook;
    onDragOver?: EventHook;
    onDragStart?: EventHook;
    onDrop?: EventHook;
    onFocus?: EventHook;
    onInput?: EventHook;
    onKeyDown?: EventHook;
    onPaste?: EventHook;
    onSelect?: EventHook;
}

export interface BasicEditorProps {
    value: Value;
    autoCorrect?: boolean;
    autoFocus?: boolean;
    className?: string;
    onChange?: (change: { operations: Immutable.List<Operation>, value: Value }) => any;
    placeholder?: any;
    plugins?: Plugin[];
    readOnly?: boolean;
    role?: string;
    schema?: Schema;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
}

export type EditorProps = BasicEditorProps & Plugin;

export interface EditorState {
    schema: Schema;
    value: Value;
    stack: Stack;
}

export class Editor extends React.Component<EditorProps, EditorState> implements Commandable {
    controller: Controller;
    schema: Schema;
    stack: Stack;

    readonly plugins: Plugin[];
    readonly operations: Immutable.List<Operation>;
    readonly readOnly: boolean;
    readonly value: Value;

    // Instance methods
    blur(): void;
    focus(): void;
    resolveController(plugins: Plugin[], schema: Schema, commands: any[], queries: any[]): void;

    // Commandable
    applyOperation(operation: Operation): Editor;
    flush(): Editor;
    command(name: string, ...args: any[]): void;
    query(query: string, ...args: any[]): any;
    registerCommand(command: string): void;
    registerQuery(query: string): void;
    run(key: string, ...args: any[]): any;
    setReadOnly(readOnly: boolean): Editor;
    setValue(value: Value, options?: { normalize: boolean }): Editor;
    addMark(mark: Mark | MarkProperties | string): Editor;
    delete(): Editor;
    deleteBackward(n: number): Editor;
    deleteForward(n: number): Editor;
    insertBlock(block: Block | BlockProperties | string): Editor;
    insertFragment(fragment: Document): Editor;
    insertInline(inline: Inline | InlineProperties): Editor;
    insertText(text: string): Editor;
    setBlocks(properties: BlockProperties | string): Editor;
    setInlines(properties: InlineProperties | string): Editor;
    splitBlock(depth: number): Editor;
    splitInline(depth: number): Editor;
    removeMark(mark: Mark | MarkProperties | string): Editor;
    replaceMark(
        mark: Mark | MarkProperties | string,
        newMark: Mark | MarkProperties | string
    ): Editor;
    toggleMark(mark: Mark | MarkProperties | string): Editor;
    unwrapBlock(properties: BlockProperties | string): Editor;
    unwrapInline(properties: InlineProperties | string): Editor;
    wrapBlock(properties: BlockProperties | string): Editor;
    wrapInline(properties: InlineProperties | string): Editor;
    wrapText(prefix: string, suffix?: string): Editor;
    blur(): Editor;
    deselect(): Editor;
    flip(): Editor;
    focus(): Editor;
    moveAnchorBackward(n?: number): Editor;
    moveAnchorForward(n?: number): Editor;
    moveAnchorTo(path: Path, offset?: number): Editor;
    moveAnchorToEndOfBlock(): Editor;
    moveAnchorToEndOfInline(): Editor;
    moveAnchorToEndOfDocument(): Editor;
    moveAnchorToEndOfNextBlock(): Editor;
    moveAnchorToEndOfNextInline(): Editor;
    moveAnchorToEndOfNextText(): Editor;
    moveAnchorEndOfNode(node: Node): Editor;
    moveAnchorToEndOfPreviousBlock(): Editor;
    moveAnchorToEndOfPreviousInline(): Editor;
    moveAnchorToEndOfPreviousText(): Editor;
    moveAnchorToEndOfText(): Editor;
    moveAnchorToStartOfBlock(): Editor;
    moveAnchorToStartOfDocument(): Editor;
    moveAnchorToStartOfInline(): Editor;
    moveAnchorToStartOfNextBlock(): Editor;
    moveAnchorToStartOfNextInline(): Editor;
    moveAnchorToStartOfNextText(): Editor;
    moveAnchorToStartOfNode(node: Node): Editor;
    moveAnchorToStartOfPreviousBlock(): Editor;
    moveAnchorToStartOfPreviousInline(): Editor;
    moveAnchorToStartOfPreviousText(): Editor;
    moveAnchorToStartOfText(): Editor;
    moveEndBackward(n?: number): Editor;
    moveEndForward(n?: number): Editor;
    moveEndTo(path: Path, offset?: number): Editor;
    moveEndToEndOfBlock(): Editor;
    moveEndToEndOfDocument(): Editor;
    moveEndToEndOfInline(): Editor;
    moveEndToEndOfNextBlock(): Editor;
    moveEndToEndOfNextInline(): Editor;
    moveEndToEndOfNextText(): Editor;
    moveEndToEndOfNode(node: Node): Editor;
    moveEndToEndOfPreviousBlock(): Editor;
    moveEndToEndOfPreviousInline(): Editor;
    moveEndToEndOfPreviousText(): Editor;
    moveEndToEndOfText(): Editor;
    moveEndToStartOfBlock(): Editor;
    moveEndToStartOfDocument(): Editor;
    moveEndToStartOfInline(): Editor;
    moveEndToStartOfNextBlock(): Editor;
    moveEndToStartOfNextInline(): Editor;
    moveEndToStartOfNextText(): Editor;
    moveEndToStartOfNode(node: Node): Editor;
    moveEndToStartOfPreviousBlock(): Editor;
    moveEndToStartOfPreviousInline(): Editor;
    moveEndToStartOfPreviousText(): Editor;
    moveEndToStartOfText(): Editor;
    moveFocusBackward(n?: number): Editor;
    moveFocusForward(n?: number): Editor;
    moveFocusTo(path: Path, offset?: number): Editor;
    moveFocusToEndOfBlock(): Editor;
    moveFocusToEndOfDocument(): Editor;
    moveFocusToEndOfInline(): Editor;
    moveFocusToEndOfNextBlock(): Editor;
    moveFocusToEndOfNextInline(): Editor;
    moveFocusToEndOfNextText(): Editor;
    moveFocusToEndOfNode(node: Node): Editor;
    moveFocusToEndOfPreviousBlock(): Editor;
    moveFocusToEndOfPreviousInline(): Editor;
    moveFocusToEndOfPreviousText(): Editor;
    moveFocusToEndOfText(): Editor;
    moveFocusToStartOfBlock(): Editor;
    moveFocusToStartOfDocument(): Editor;
    moveFocusToStartOfInline(): Editor;
    moveFocusToStartOfNextBlock(): Editor;
    moveFocusToStartOfNextInline(): Editor;
    moveFocusToStartOfNextText(): Editor;
    moveFocusToStartOfNode(node: Node): Editor;
    moveFocusToStartOfPreviousBlock(): Editor;
    moveFocusToStartOfPreviousInline(): Editor;
    moveFocusToStartOfPreviousText(): Editor;
    moveFocusToStartOfText(): Editor;
    moveStartForward(n?: number): Editor;
    moveStartBackward(n?: number): Editor;
    moveStartTo(path: Path, n?: number): Editor;
    moveStartToEndOfBlock(): Editor;
    moveStartToEndOfDocument(): Editor;
    moveStartToEndOfInline(): Editor;
    moveStartToEndOfNextBlock(): Editor;
    moveStartToEndOfNextInline(): Editor;
    moveStartToEndOfNextText(): Editor;
    moveStartToEndOfNode(node: Node): Editor;
    moveStartToEndOfPreviousBlock(): Editor;
    moveStartToEndOfPreviousInline(): Editor;
    moveStartToEndOfPreviousText(): Editor;
    moveStartToEndOfText(): Editor;
    moveStartToStartOfBlock(): Editor;
    moveStartToStartOfDocument(): Editor;
    moveStartToStartOfInline(): Editor;
    moveStartToStartOfNextBlock(): Editor;
    moveStartToStartOfNextInline(): Editor;
    moveStartToStartOfNextText(): Editor;
    moveStartToStartOfNode(node: Node): Editor;
    moveStartToStartOfPreviousBlock(): Editor;
    moveStartToStartOfPreviousInline(): Editor;
    moveStartToStartOfPreviousText(): Editor;
    moveStartToStartOfText(): Editor;
    moveBackward(n?: number): Editor;
    moveForward(n?: number): Editor;
    moveTo(path: Path, offset?: number): Editor;
    moveToAnchor(): Editor;
    moveToFocus(): Editor;
    moveToStart(): Editor;
    moveToEnd(): Editor;
    moveToEndOfBlock(): Editor;
    moveToEndOfDocument(): Editor;
    moveToEndOfInline(): Editor;
    moveToEndOfNextBlock(): Editor;
    moveToEndOfNextInline(): Editor;
    moveToEndOfNextText(): Editor;
    moveToEndOfNode(node: Node): Editor;
    moveToEndOfPreviousBlock(): Editor;
    moveToEndOfPreviousInline(): Editor;
    moveToEndOfPreviousText(): Editor;
    moveToEndOfText(): Editor;
    moveToStartOfBlock(): Editor;
    moveToStartOfDocument(): Editor;
    moveToStartOfInline(): Editor;
    moveToStartOfNextBlock(): Editor;
    moveToStartOfNextInline(): Editor;
    moveToStartOfNextText(): Editor;
    moveToStartOfNode(node: Node): Editor;
    moveToStartOfPreviousBlock(): Editor;
    moveToStartOfPreviousInline(): Editor;
    moveToStartOfPreviousText(): Editor;
    moveToStartOfText(): Editor;
    moveToRangeOfDocument(): Editor;
    moveToRangeOf(node: Node): Editor;
    select(properties: Range | RangeProperties): Editor;
    addMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    deleteAtRange(range: Range): Editor;
    deleteCharBackwardAtRange(range: Range): Editor;
    deleteLineBackwardAtRange(range: Range): Editor;
    deleteWordBackwardAtRange(range: Range): Editor;
    deleteBackwardAtRange(range: Range, n: number): Editor;
    deleteCharForwardAtRange(range: Range): Editor;
    deleteLineForwardAtRange(range: Range): Editor;
    deleteWordForwardAtRange(range: Range): Editor;
    deleteForwardAtRange(range: Range, n: number): Editor;
    insertBlockAtRange(range: Range, block: Block | BlockProperties | string): Editor;
    insertFragmentAtRange(range: Range, fragment: Document): Editor;
    insertInlineAtRange(range: Range, inline: Inline | InlineProperties): Editor;
    insertTextAtRange(range: Range, text: string): Editor;
    setBlocksAtRange(range: Range, properties: BlockProperties | string): Editor;
    setInlinesAtRange(range: Range, properties: InlineProperties | string): Editor;
    splitBlockAtRange(range: Range, depth: number): Editor;
    splitInlineAtRange(range: Range, depth: number): Editor;
    removeMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    toggleMarkAtRange(range: Range, mark: Mark | MarkProperties | string): Editor;
    unwrapBlockAtRange(range: Range, properties: BlockProperties | string): Editor;
    unwrapInlineAtRange(range: Range, properties: InlineProperties | string): Editor;
    wrapBlockAtRange(range: Range, properties: BlockProperties | string): Editor;
    wrapInlineAtRange(range: Range, properties: InlineProperties | string): Editor;
    wrapTextAtRange(range: Range, prefix: string, suffix?: string): Editor;
    addMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    addMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    insertNodeByKey(key: string, index: number, node: Node): Editor;
    insertNodeByPath(path: Path, index: number, node: Node): Editor;
    insertFragmentByKey(key: string, index: number, fragment: Document): Editor;
    insertFragmentByPath(path: Path, index: number, fragment: Document): Editor;
    insertTextByKey(
        key: string,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Editor;
    insertTextByPath(
        path: Path,
        offset: number,
        text: string,
        marks?: Immutable.Set<Mark> | Mark[]
    ): Editor;
    mergeNodeByKey(key: string): Editor;
    mergeNodeByPath(path: Path): Editor;
    moveNodeByKey(key: string, newKey: string, newIndex: number): Editor;
    moveNodeByPath(path: Path, newPath: Path, newIndex: number): Editor;
    removeMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark | Mark | string
    ): Editor;
    removeMarkByPath(
        path: Path,
        offset: number,
        length: number,
        mark: MarkProperties | Mark | string
    ): Editor;
    removeNodeByKey(key: string): Editor;
    removeNodeByPath(path: Path): Editor;
    replaceNodeByKey(key: string, node: Node): Editor;
    replaceNodeByPath(path: Path, newNode: Node): Editor;
    removeTextByKey(key: string, offset: number, length: number): Editor;
    removeTextByPath(path: Path, offset: number, length: number): Editor;
    setMarkByKey(
        key: string,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Editor;
    setMarksByPath(
        path: Path,
        offset: number,
        length: number,
        mark: Mark,
        properties: MarkProperties
    ): Editor;
    setNodeByKey(key: string, properties: BlockProperties | InlineProperties | string): Editor;
    setNodeByPath(path: Path, properties: NodeProperties | InlineProperties | string): Editor;
    splitNodeByKey(key: string, offset: number): Editor;
    splitNodeByPath(path: Path, position: number): Editor;
    unwrapInlineByKey(key: string, properties: InlineProperties | string): Editor;
    unwrapInlineByPath(path: Path, properties: InlineProperties | string): Editor;
    unwrapBlockByKey(key: string, properties: BlockProperties | string): Editor;
    unwrapBlockByPath(path: Path, properties: BlockProperties | string): Editor;
    unwrapNodeByKey(key: string): Editor;
    unwrapNodeByPath(path: Path): Editor;
    wrapInlineByKey(key: string, properties: InlineProperties | string): Editor;
    wrapInlineByPath(path: Path, properties: InlineProperties | string): Editor;
    wrapBlockByKey(key: string, properties: BlockProperties | string): Editor;
    wrapBlockByPath(path: Path, block: Block | string): Editor;
    wrapNodeByKey(key: string, parent: Node): Editor;
    wrapNodeByPath(path: Path, parent: Node): Editor;
    normalize(): Editor;
    withoutNormalizing(fn: () => void): Editor;
    withoutSaving(fn: () => void): Editor;
    withoutMerging(fn: () => void): Editor;
    redo(): Editor;
    undo(): Editor;
    snapshotSelection(): Editor;
}

export type SlateType =
    | "fragment"
    | "html"
    | "node"
    | "rich"
    | "text"
    | "files";

export function cloneFragment(
    event: Event,
    value: Value,
    fragment?: Document,
    callback?: () => void
): void;
export function findDOMNode(node: Node, win?: Window): Element;
export function findDOMRange(range: Range, win?: Window): Range;
export function findNode(element: Element, value: Value): Node;
export function findRange(selection: Selection, value: Value): Range;
export function getEventRange(event: Event, value: Value): Range;
export function getEventTransfer(event: Event): { type: SlateType; node: Node };
export function setEventTransfer(
    event: Event,
    type: SlateType,
    data: any
): void;
