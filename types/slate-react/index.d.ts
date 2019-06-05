// Type definitions for slate-react 0.22
// Project: https://github.com/ianstormtaylor/slate
// Definitions by: Andy Kent <https://github.com/andykent>
//                 Jamie Talbot <https://github.com/majelbstoat>
//                 Jan Löbel <https://github.com/JanLoebel>
//                 Patrick Sachs <https://github.com/PatrickSachs>
//                 Brandon Shelton <https://github.com/YangusKhan>
//                 Irwan Fario Subastian <https://github.com/isubasti>
//                 Hanna Greaves <https://github.com/sgreav>
//                 Francesco Agnoletto <https://github.com/Kornil>
//                 Jack Allen <https://github.com/jackall3n>
//                 Benjamin Evenson <https://github.com/benjiro>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
    Document,
    Editor as CoreEditor,
    Mark,
    Node,
    Block,
    Inline,
    Operations,
    SchemaProperties,
    Value,
    Operation,
    MarkProperties,
    BlockProperties,
    InlineProperties,
    Path,
    RangeProperties,
    NodeProperties,
    Range,
    Controller,
    Plugin as CorePlugin
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
    editor: CoreEditor;
    mark: Mark;
    marks: Immutable.Set<Mark>;
    node: Node;
    offset: number;
    text: string;
}

export interface RenderNodeProps {
  attributes: RenderAttributes;
  children: React.ReactNode;
  editor: CoreEditor;
  isFocused: boolean;
  isSelected: boolean;
  key: string;
  parent: Node;
  readOnly: boolean;
}

export interface RenderBlockProps extends RenderNodeProps {
    node: Block;
}

export interface RenderDocumentProps extends RenderNodeProps {
    node: Document;
}

export interface RenderInlineProps extends RenderNodeProps {
    node: Inline;
}

export type EventHook = (
    event: Event,
    editor: CoreEditor,
    next: () => any
) => any;

export interface Plugin extends CorePlugin {
    decorateNode?: (node: Node, editor: CoreEditor, next: () => any) => any;
    renderEditor?: (props: EditorProps, editor: CoreEditor, next: () => any) => any;
    renderMark?: (props: RenderMarkProps, editor: CoreEditor, next: () => any) => any;
    renderBlock?: (props: RenderBlockProps, editor: CoreEditor, next: () => any) => any;
    renderDocument?: (props: RenderDocumentProps, editor: CoreEditor, next: () => any) => any;
    renderInline?: (props: RenderInlineProps, editor: CoreEditor, next: () => any) => any;
    shouldNodeComponentUpdate?: (previousProps: RenderNodeProps, props: RenderNodeProps, editor: CoreEditor, next: () => any) => any;

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
    schema?: SchemaProperties;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
}

export type EditorProps = BasicEditorProps & Plugin;

export interface EditorState {
    value: Value;
}

export class Editor extends React.Component<EditorProps, EditorState> implements Controller {
    controller: CoreEditor;

    readonly plugins: Plugin[];
    readonly operations: Immutable.List<Operation>;
    readonly readOnly: boolean;
    readonly value: Value;

    // Instance methods
    resolveController(plugins: Plugin[], schema: SchemaProperties, commands: any[], queries: any[]): void;

    // Controller
    addMark: CoreEditor['addMark'];
    delete: CoreEditor['delete'];
    deleteBackward: CoreEditor['deleteBackward'];
    deleteForward: CoreEditor['deleteForward'];
    insertBlock: CoreEditor['insertBlock'];
    insertFragment: CoreEditor['insertFragment'];
    insertInline: CoreEditor['insertInline'];
    insertText: CoreEditor['insertText'];
    setBlocks: CoreEditor['setBlocks'];
    setInlines: CoreEditor['setInlines'];
    splitBlock: CoreEditor['splitBlock'];
    splitInline: CoreEditor['splitInline'];
    removeMark: CoreEditor['removeMark'];
    replaceMark: CoreEditor['replaceMark'];
    toggleMark: CoreEditor['toggleMark'];
    unwrapBlock: CoreEditor['unwrapBlock'];
    unwrapInline: CoreEditor['unwrapInline'];
    wrapBlock: CoreEditor['wrapBlock'];
    wrapInline: CoreEditor['wrapInline'];
    wrapText: CoreEditor['wrapText'];
    blur: CoreEditor['blur'];
    deselect: CoreEditor['deselect'];
    flip: CoreEditor['flip'];
    focus: CoreEditor['focus'];
    moveAnchorBackward: CoreEditor['moveAnchorBackward'];
    moveAnchorForward: CoreEditor['moveAnchorForward'];
    moveAnchorTo: CoreEditor['moveAnchorTo'];
    moveAnchorToEndOfBlock: CoreEditor['moveAnchorToEndOfBlock'];
    moveAnchorToEndOfInline: CoreEditor['moveAnchorToEndOfInline'];
    moveAnchorToEndOfDocument: CoreEditor['moveAnchorToEndOfDocument'];
    moveAnchorToEndOfNextBlock: CoreEditor['moveAnchorToEndOfNextBlock'];
    moveAnchorToEndOfNextInline: CoreEditor['moveAnchorToEndOfNextInline'];
    moveAnchorToEndOfNextText: CoreEditor['moveAnchorToEndOfNextText'];
    moveAnchorEndOfNode: CoreEditor['moveAnchorEndOfNode'];
    moveAnchorToEndOfPreviousBlock: CoreEditor['moveAnchorToEndOfPreviousBlock'];
    moveAnchorToEndOfPreviousInline: CoreEditor['moveAnchorToEndOfPreviousInline'];
    moveAnchorToEndOfPreviousText: CoreEditor['moveAnchorToEndOfPreviousText'];
    moveAnchorToEndOfText: CoreEditor['moveAnchorToEndOfText'];
    moveAnchorToStartOfBlock: CoreEditor['moveAnchorToStartOfBlock'];
    moveAnchorToStartOfDocument: CoreEditor['moveAnchorToStartOfDocument'];
    moveAnchorToStartOfInline: CoreEditor['moveAnchorToStartOfInline'];
    moveAnchorToStartOfNextBlock: CoreEditor['moveAnchorToStartOfNextBlock'];
    moveAnchorToStartOfNextInline: CoreEditor['moveAnchorToStartOfNextInline'];
    moveAnchorToStartOfNextText: CoreEditor['moveAnchorToStartOfNextText'];
    moveAnchorToStartOfNode: CoreEditor['moveAnchorToStartOfNode'];
    moveAnchorToStartOfPreviousBlock: CoreEditor['moveAnchorToStartOfPreviousBlock'];
    moveAnchorToStartOfPreviousInline: CoreEditor['moveAnchorToStartOfPreviousInline'];
    moveAnchorToStartOfPreviousText: CoreEditor['moveAnchorToStartOfPreviousText'];
    moveAnchorToStartOfText: CoreEditor['moveAnchorToStartOfText'];
    moveEndBackward: CoreEditor['moveEndBackward'];
    moveEndForward: CoreEditor['moveEndForward'];
    moveEndTo: CoreEditor['moveEndTo'];
    moveEndToEndOfBlock: CoreEditor['moveEndToEndOfBlock'];
    moveEndToEndOfDocument: CoreEditor['moveEndToEndOfDocument'];
    moveEndToEndOfInline: CoreEditor['moveEndToEndOfInline'];
    moveEndToEndOfNextBlock: CoreEditor['moveEndToEndOfNextBlock'];
    moveEndToEndOfNextInline: CoreEditor['moveEndToEndOfNextInline'];
    moveEndToEndOfNextText: CoreEditor['moveEndToEndOfNextText'];
    moveEndToEndOfNode: CoreEditor['moveEndToEndOfNode'];
    moveEndToEndOfPreviousBlock: CoreEditor['moveEndToEndOfPreviousBlock'];
    moveEndToEndOfPreviousInline: CoreEditor['moveEndToEndOfPreviousInline'];
    moveEndToEndOfPreviousText: CoreEditor['moveEndToEndOfPreviousText'];
    moveEndToEndOfText: CoreEditor['moveEndToEndOfText'];
    moveEndToStartOfBlock: CoreEditor['moveEndToStartOfBlock'];
    moveEndToStartOfDocument: CoreEditor['moveEndToStartOfDocument'];
    moveEndToStartOfInline: CoreEditor['moveEndToStartOfInline'];
    moveEndToStartOfNextBlock: CoreEditor['moveEndToStartOfNextBlock'];
    moveEndToStartOfNextInline: CoreEditor['moveEndToStartOfNextInline'];
    moveEndToStartOfNextText: CoreEditor['moveEndToStartOfNextText'];
    moveEndToStartOfNode: CoreEditor['moveEndToStartOfNode'];
    moveEndToStartOfPreviousBlock: CoreEditor['moveEndToStartOfPreviousBlock'];
    moveEndToStartOfPreviousInline: CoreEditor['moveEndToStartOfPreviousInline'];
    moveEndToStartOfPreviousText: CoreEditor['moveEndToStartOfPreviousText'];
    moveEndToStartOfText: CoreEditor['moveEndToStartOfText'];
    moveFocusBackward: CoreEditor['moveFocusBackward'];
    moveFocusForward: CoreEditor['moveFocusForward'];
    moveFocusTo: CoreEditor['moveFocusTo'];
    moveFocusToEndOfBlock: CoreEditor['moveFocusToEndOfBlock'];
    moveFocusToEndOfDocument: CoreEditor['moveFocusToEndOfDocument'];
    moveFocusToEndOfInline: CoreEditor['moveFocusToEndOfInline'];
    moveFocusToEndOfNextBlock: CoreEditor['moveFocusToEndOfNextBlock'];
    moveFocusToEndOfNextInline: CoreEditor['moveFocusToEndOfNextInline'];
    moveFocusToEndOfNextText: CoreEditor['moveFocusToEndOfNextText'];
    moveFocusToEndOfNode: CoreEditor['moveFocusToEndOfNode'];
    moveFocusToEndOfPreviousBlock: CoreEditor['moveFocusToEndOfPreviousBlock'];
    moveFocusToEndOfPreviousInline: CoreEditor['moveFocusToEndOfPreviousInline'];
    moveFocusToEndOfPreviousText: CoreEditor['moveFocusToEndOfPreviousText'];
    moveFocusToEndOfText: CoreEditor['moveFocusToEndOfText'];
    moveFocusToStartOfBlock: CoreEditor['moveFocusToStartOfBlock'];
    moveFocusToStartOfDocument: CoreEditor['moveFocusToStartOfDocument'];
    moveFocusToStartOfInline: CoreEditor['moveFocusToStartOfInline'];
    moveFocusToStartOfNextBlock: CoreEditor['moveFocusToStartOfNextBlock'];
    moveFocusToStartOfNextInline: CoreEditor['moveFocusToStartOfNextInline'];
    moveFocusToStartOfNextText: CoreEditor['moveFocusToStartOfNextText'];
    moveFocusToStartOfNode: CoreEditor['moveFocusToStartOfNode'];
    moveFocusToStartOfPreviousBlock: CoreEditor['moveFocusToStartOfPreviousBlock'];
    moveFocusToStartOfPreviousInline: CoreEditor['moveFocusToStartOfPreviousInline'];
    moveFocusToStartOfPreviousText: CoreEditor['moveFocusToStartOfPreviousText'];
    moveFocusToStartOfText: CoreEditor['moveFocusToStartOfText'];
    moveStartForward: CoreEditor['moveStartForward'];
    moveStartBackward: CoreEditor['moveStartBackward'];
    moveStartTo: CoreEditor['moveStartTo'];
    moveStartToEndOfBlock: CoreEditor['moveStartToEndOfBlock'];
    moveStartToEndOfDocument: CoreEditor['moveStartToEndOfDocument'];
    moveStartToEndOfInline: CoreEditor['moveStartToEndOfInline'];
    moveStartToEndOfNextBlock: CoreEditor['moveStartToEndOfNextBlock'];
    moveStartToEndOfNextInline: CoreEditor['moveStartToEndOfNextInline'];
    moveStartToEndOfNextText: CoreEditor['moveStartToEndOfNextText'];
    moveStartToEndOfNode: CoreEditor['moveStartToEndOfNode'];
    moveStartToEndOfPreviousBlock: CoreEditor['moveStartToEndOfPreviousBlock'];
    moveStartToEndOfPreviousInline: CoreEditor['moveStartToEndOfPreviousInline'];
    moveStartToEndOfPreviousText: CoreEditor['moveStartToEndOfPreviousText'];
    moveStartToEndOfText: CoreEditor['moveStartToEndOfText'];
    moveStartToStartOfBlock: CoreEditor['moveStartToStartOfBlock'];
    moveStartToStartOfDocument: CoreEditor['moveStartToStartOfDocument'];
    moveStartToStartOfInline: CoreEditor['moveStartToStartOfInline'];
    moveStartToStartOfNextBlock: CoreEditor['moveStartToStartOfNextBlock'];
    moveStartToStartOfNextInline: CoreEditor['moveStartToStartOfNextInline'];
    moveStartToStartOfNextText: CoreEditor['moveStartToStartOfNextText'];
    moveStartToStartOfNode: CoreEditor['moveStartToStartOfNode'];
    moveStartToStartOfPreviousBlock: CoreEditor['moveStartToStartOfPreviousBlock'];
    moveStartToStartOfPreviousInline: CoreEditor['moveStartToStartOfPreviousInline'];
    moveStartToStartOfPreviousText: CoreEditor['moveStartToStartOfPreviousText'];
    moveStartToStartOfText: CoreEditor['moveStartToStartOfText'];
    moveBackward: CoreEditor['moveBackward'];
    moveForward: CoreEditor['moveForward'];
    moveTo: CoreEditor['moveTo'];
    moveToAnchor: CoreEditor['moveToAnchor'];
    moveToFocus: CoreEditor['moveToFocus'];
    moveToStart: CoreEditor['moveToStart'];
    moveToEnd: CoreEditor['moveToEnd'];
    moveToEndOfBlock: CoreEditor['moveToEndOfBlock'];
    moveToEndOfDocument: CoreEditor['moveToEndOfDocument'];
    moveToEndOfInline: CoreEditor['moveToEndOfInline'];
    moveToEndOfNextBlock: CoreEditor['moveToEndOfNextBlock'];
    moveToEndOfNextInline: CoreEditor['moveToEndOfNextInline'];
    moveToEndOfNextText: CoreEditor['moveToEndOfNextText'];
    moveToEndOfNode: CoreEditor['moveToEndOfNode'];
    moveToEndOfPreviousBlock: CoreEditor['moveToEndOfPreviousBlock'];
    moveToEndOfPreviousInline: CoreEditor['moveToEndOfPreviousInline'];
    moveToEndOfPreviousText: CoreEditor['moveToEndOfPreviousText'];
    moveToEndOfText: CoreEditor['moveToEndOfText'];
    moveToStartOfBlock: CoreEditor['moveToStartOfBlock'];
    moveToStartOfDocument: CoreEditor['moveToStartOfDocument'];
    moveToStartOfInline: CoreEditor['moveToStartOfInline'];
    moveToStartOfNextBlock: CoreEditor['moveToStartOfNextBlock'];
    moveToStartOfNextInline: CoreEditor['moveToStartOfNextInline'];
    moveToStartOfNextText: CoreEditor['moveToStartOfNextText'];
    moveToStartOfNode: CoreEditor['moveToStartOfNode'];
    moveToStartOfPreviousBlock: CoreEditor['moveToStartOfPreviousBlock'];
    moveToStartOfPreviousInline: CoreEditor['moveToStartOfPreviousInline'];
    moveToStartOfPreviousText: CoreEditor['moveToStartOfPreviousText'];
    moveToStartOfText: CoreEditor['moveToStartOfText'];
    moveToRangeOfDocument: CoreEditor['moveToRangeOfDocument'];
    moveToRangeOfNode: CoreEditor['moveToRangeOfNode'];
    select: CoreEditor['select'];
    addMarkAtRange: CoreEditor['addMarkAtRange'];
    deleteAtRange: CoreEditor['deleteAtRange'];
    deleteCharBackwardAtRange: CoreEditor['deleteCharBackwardAtRange'];
    deleteLineBackwardAtRange: CoreEditor['deleteLineBackwardAtRange'];
    deleteWordBackwardAtRange: CoreEditor['deleteWordBackwardAtRange'];
    deleteBackwardAtRange: CoreEditor['deleteBackwardAtRange'];
    deleteCharForwardAtRange: CoreEditor['deleteCharForwardAtRange'];
    deleteLineForwardAtRange: CoreEditor['deleteLineForwardAtRange'];
    deleteWordForwardAtRange: CoreEditor['deleteWordForwardAtRange'];
    deleteForwardAtRange: CoreEditor['deleteForwardAtRange'];
    insertBlockAtRange: CoreEditor['insertBlockAtRange'];
    insertFragmentAtRange: CoreEditor['insertFragmentAtRange'];
    insertInlineAtRange: CoreEditor['insertInlineAtRange'];
    insertTextAtRange: CoreEditor['insertTextAtRange'];
    setBlocksAtRange: CoreEditor['setBlocksAtRange'];
    setInlinesAtRange: CoreEditor['setInlinesAtRange'];
    splitBlockAtRange: CoreEditor['splitBlockAtRange'];
    splitInlineAtRange: CoreEditor['splitInlineAtRange'];
    removeMarkAtRange: CoreEditor['removeMarkAtRange'];
    toggleMarkAtRange: CoreEditor['toggleMarkAtRange'];
    unwrapBlockAtRange: CoreEditor['unwrapBlockAtRange'];
    unwrapInlineAtRange: CoreEditor['unwrapInlineAtRange'];
    wrapBlockAtRange: CoreEditor['wrapBlockAtRange'];
    wrapInlineAtRange: CoreEditor['wrapInlineAtRange'];
    wrapTextAtRange: CoreEditor['wrapTextAtRange'];
    addMarkByKey: CoreEditor['addMarkByKey'];
    addMarkByPath: CoreEditor['addMarkByPath'];
    insertNodeByKey: CoreEditor['insertNodeByKey'];
    insertNodeByPath: CoreEditor['insertNodeByPath'];
    insertFragmentByKey: CoreEditor['insertFragmentByKey'];
    insertFragmentByPath: CoreEditor['insertFragmentByPath'];
    insertTextByKey: CoreEditor['insertTextByKey'];
    insertTextByPath: CoreEditor['insertTextByPath'];
    mergeNodeByKey: CoreEditor['mergeNodeByKey'];
    mergeNodeByPath: CoreEditor['mergeNodeByPath'];
    moveNodeByKey: CoreEditor['moveNodeByKey'];
    moveNodeByPath: CoreEditor['moveNodeByPath'];
    removeMarkByKey: CoreEditor['removeMarkByKey'];
    removeMarkByPath: CoreEditor['removeMarkByPath'];
    removeNodeByKey: CoreEditor['removeNodeByKey'];
    removeNodeByPath: CoreEditor['removeNodeByPath'];
    replaceNodeByKey: CoreEditor['replaceNodeByKey'];
    replaceNodeByPath: CoreEditor['replaceNodeByPath'];
    removeTextByKey: CoreEditor['removeTextByKey'];
    removeTextByPath: CoreEditor['removeTextByPath'];
    setDecorations: CoreEditor['setDecorations'];
    setMarkByKey: CoreEditor['setMarkByKey'];
    setMarksByPath: CoreEditor['setMarksByPath'];
    setNodeByKey: CoreEditor['setNodeByKey'];
    setNodeByPath: CoreEditor['setNodeByPath'];
    splitNodeByKey: CoreEditor['splitNodeByKey'];
    splitNodeByPath: CoreEditor['splitNodeByPath'];
    unwrapInlineByKey: CoreEditor['unwrapInlineByKey'];
    unwrapInlineByPath: CoreEditor['unwrapInlineByPath'];
    unwrapBlockByKey: CoreEditor['unwrapBlockByKey'];
    unwrapBlockByPath: CoreEditor['unwrapBlockByPath'];
    unwrapNodeByKey: CoreEditor['unwrapNodeByKey'];
    unwrapNodeByPath: CoreEditor['unwrapNodeByPath'];
    wrapInlineByKey: CoreEditor['wrapInlineByKey'];
    wrapInlineByPath: CoreEditor['wrapInlineByPath'];
    wrapBlockByKey: CoreEditor['wrapBlockByKey'];
    wrapBlockByPath: CoreEditor['wrapBlockByPath'];
    wrapNodeByKey: CoreEditor['wrapNodeByKey'];
    wrapNodeByPath: CoreEditor['wrapNodeByPath'];
    normalize: CoreEditor['normalize'];
    withoutNormalizing: CoreEditor['withoutNormalizing'];
    withoutSaving: CoreEditor['withoutSaving'];
    withoutMerging: CoreEditor['withoutMerging'];
    redo: CoreEditor['redo'];
    undo: CoreEditor['undo'];
    snapshotSelection: CoreEditor['snapshotSelection'];
    command: CoreEditor['command'];
    query: CoreEditor['query'];
    registerCommand: CoreEditor['registerCommand'];
    registerQuery: CoreEditor['registerQuery'];
    applyOperation: CoreEditor['applyOperation'];
    run: CoreEditor['run'];
}

export type SlateType =
    | "fragment"
    | "html"
    | "node"
    | "rich"
    | "text"
    | "files";

export function cloneFragment(event: Event | React.SyntheticEvent, editor: CoreEditor, callback?: () => void): void;
export function findDOMNode(node: Node, win?: Window): Element;
export function findDOMRange(range: Range, win?: Window): Range;
export function findNode(element: Element, editor: CoreEditor): Node;
export function findRange(selection: Selection | Range, editor: CoreEditor): Range;
export function getEventRange(event: Event | React.SyntheticEvent, editor: CoreEditor): Range;
export function getEventTransfer(event: Event | React.SyntheticEvent): { type: SlateType; node: Node };
export function setEventTransfer(event: Event | React.SyntheticEvent, type: SlateType, data: any): void;
