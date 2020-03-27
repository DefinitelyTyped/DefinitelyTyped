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
//                 Kay Delaney <https://github.com/kaydelaney>
//                 Brian Ingles <https://github.com/bmingles>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.8
import {
    Document,
    Editor as CoreEditor,
    Mark,
    Node as SlateNode,
    Block,
    Inline,
    Operation,
    SchemaProperties,
    Value,
    MarkProperties,
    BlockProperties,
    InlineProperties,
    Path,
    RangeProperties,
    NodeProperties,
    Controller,
    Plugin as CorePlugin,
    Range as SlateRange,
    Selection as SlateSelection,
    RangeType,
    Annotation,
    Decoration,
    PointProperties,
    PointJSON,
    Point,
    RangeTypeJSON,
    RangeTypeProperties,
} from 'slate';
import * as Immutable from 'immutable';
import * as React from 'react';

// Values prefixed with "data-..." (Used for spellchecking according to docs)
export interface RenderAttributes {
    [key: string]: any;
}

export interface RenderProps {
    attributes: RenderAttributes;
    editor: Editor;
    marks: Immutable.Set<Mark>;
    annotations: Immutable.List<Annotation> | ReadonlyArray<Annotation>;
    decorations: Immutable.List<Decoration> | ReadonlyArray<Annotation>;
    node: SlateNode;
    offset: number;
    text: string;
}

export interface RenderMarkProps extends RenderProps {
    mark: Mark;
    children: React.ReactNode;
}

export interface RenderAnnotationProps extends RenderProps {
    annotation: Annotation;
    children: React.ReactNode;
}

export interface RenderDecorationProps extends RenderProps {
    decoration: Decoration;
    children: React.ReactNode;
}

export interface RenderNodeProps {
    attributes: RenderAttributes;
    children: React.ReactNode;
    editor: Editor;
    isFocused: boolean;
    isSelected: boolean;
    key: string;
    parent: SlateNode;
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

export type EventHook<T = Event> = (event: T, editor: Editor, next: () => any) => any;

export interface Plugin<T extends Controller = Editor> extends CorePlugin<T> {
    decorateNode?: (node: SlateNode, editor: T, next: () => any) => any;
    renderAnnotation?: (props: RenderAnnotationProps, editor: T, next: () => any) => any;
    renderBlock?: (props: RenderBlockProps, editor: T, next: () => any) => any;
    renderDecoration?: (props: RenderDecorationProps, editor: T, next: () => any) => any;
    renderDocument?: (props: RenderDocumentProps, editor: T, next: () => any) => any;
    renderEditor?: (props: EditorProps, editor: T, next: () => any) => any;
    renderInline?: (props: RenderInlineProps, editor: T, next: () => any) => any;
    renderMark?: (props: RenderMarkProps, editor: T, next: () => any) => any;

    shouldNodeComponentUpdate?: (
        previousProps: RenderNodeProps,
        props: RenderNodeProps,
        editor: CoreEditor,
        next: () => any
    ) => any;

    onBeforeInput?: EventHook<React.FormEvent>;
    onBlur?: EventHook<React.FocusEvent>;
    onClick?: EventHook<React.MouseEvent>;
    onCompositionEnd?: EventHook<React.CompositionEvent>;
    onCompositionStart?: EventHook<React.CompositionEvent>;
    onContextMenu?: EventHook<React.MouseEvent>;
    onCopy?: EventHook<React.ClipboardEvent>;
    onCut?: EventHook<React.ClipboardEvent>;
    onDragEnd?: EventHook<React.DragEvent>;
    onDragEnter?: EventHook<React.DragEvent>;
    onDragExit?: EventHook<React.DragEvent>;
    onDragLeave?: EventHook<React.DragEvent>;
    onDragOver?: EventHook<React.DragEvent>;
    onDragStart?: EventHook<React.DragEvent>;
    onDrop?: EventHook<React.DragEvent>;
    onFocus?: EventHook<React.FocusEvent>;
    onInput?: EventHook<React.FormEvent>;
    onKeyDown?: EventHook<React.KeyboardEvent>;
    onPaste?: EventHook<React.ClipboardEvent>;
    onSelect?: EventHook<React.SyntheticEvent>;
}

export type PluginOrPlugins<T extends Controller = Editor> = Plugin<T> | Plugins<T>;
export interface Plugins<T extends Controller = Editor> extends Array<PluginOrPlugins<T>> {}

export interface OnChangeParam {
    operations: Immutable.List<Operation>;
    value: Value;
}
export type OnChangeFn = (change: OnChangeParam) => any;

export interface BasicEditorProps<T extends Controller = Editor> {
    value: Value;
    autoCorrect?: boolean;
    autoFocus?: boolean;
    className?: string;
    onChange?: OnChangeFn;
    placeholder?: any;
    plugins?: Plugins<T>;
    readOnly?: boolean;
    role?: string;
    schema?: SchemaProperties;
    spellCheck?: boolean;
    style?: React.CSSProperties;
    tabIndex?: number;
}

export type EditorProps<T extends Controller = Editor> = BasicEditorProps<T> & Plugin<T>;

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
    addAnnotation: CoreEditor['addAnnotation'];
    addMark: CoreEditor['addMark'];
    addMarks: CoreEditor['addMarks'];
    delete: CoreEditor['delete'];
    deleteBackward: CoreEditor['deleteBackward'];
    deleteCharBackward: CoreEditor['deleteCharBackward'];
    deleteCharForward: CoreEditor['deleteCharForward'];
    deleteForward: CoreEditor['deleteForward'];
    deleteLineBackward: CoreEditor['deleteLineBackward'];
    deleteLineForward: CoreEditor['deleteLineForward'];
    deleteWordBackward: CoreEditor['deleteWordBackward'];
    deleteWordForward: CoreEditor['deleteWordForward'];
    insertBlock: CoreEditor['insertBlock'];
    insertFragment: CoreEditor['insertFragment'];
    insertInline: CoreEditor['insertInline'];
    insertText: CoreEditor['insertText'];
    setAnchor: CoreEditor['setAnchor'];
    setAnnotation: CoreEditor['setAnnotation'];
    setBlocks: CoreEditor['setBlocks'];
    setData: CoreEditor['setData'];
    setEnd: CoreEditor['setEnd'];
    setFocus: CoreEditor['setFocus'];
    setInlines: CoreEditor['setInlines'];
    setStart: CoreEditor['setStart'];
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
    moveAnchorToEndOfNode: CoreEditor['moveAnchorToEndOfNode'];
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
    moveAnchorWordBackward: CoreEditor['moveAnchorWordBackward'];
    moveAnchorWordForward: CoreEditor['moveAnchorWordForward'];
    moveBackward: CoreEditor['moveBackward'];
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
    moveEndWordBackward: CoreEditor['moveEndWordBackward'];
    moveEndWordForward: CoreEditor['moveEndWordForward'];
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
    moveFocusWordBackward: CoreEditor['moveFocusWordBackward'];
    moveFocusWordForward: CoreEditor['moveFocusWordForward'];
    moveForward: CoreEditor['moveForward'];
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
    moveStartWordBackward: CoreEditor['moveStartWordBackward'];
    moveStartWordForward: CoreEditor['moveStartWordForward'];
    moveTo: CoreEditor['moveTo'];
    moveToAnchor: CoreEditor['moveToAnchor'];
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
    moveToFocus: CoreEditor['moveToFocus'];
    moveToRangeOfDocument: CoreEditor['moveToRangeOfDocument'];
    moveToRangeOfNode: CoreEditor['moveToRangeOfNode'];
    moveToStart: CoreEditor['moveToStart'];
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
    moveWordBackward: CoreEditor['moveWordBackward'];
    moveWordForward: CoreEditor['moveWordForward'];
    save: CoreEditor['save'];
    select: CoreEditor['select'];

    addMarkAtRange: CoreEditor['addMarkAtRange'];
    addMarksAtRange: CoreEditor['addMarksAtRange'];
    deleteAtRange: CoreEditor['deleteAtRange'];
    deleteBackwardAtRange: CoreEditor['deleteBackwardAtRange'];
    deleteCharBackwardAtRange: CoreEditor['deleteCharBackwardAtRange'];
    deleteCharForwardAtRange: CoreEditor['deleteCharForwardAtRange'];
    deleteForwardAtRange: CoreEditor['deleteForwardAtRange'];
    deleteLineBackwardAtRange: CoreEditor['deleteLineBackwardAtRange'];
    deleteLineForwardAtRange: CoreEditor['deleteLineForwardAtRange'];
    deleteWordBackwardAtRange: CoreEditor['deleteWordBackwardAtRange'];
    deleteWordForwardAtRange: CoreEditor['deleteWordForwardAtRange'];
    insertBlockAtRange: CoreEditor['insertBlockAtRange'];
    insertFragmentAtRange: CoreEditor['insertFragmentAtRange'];
    insertInlineAtRange: CoreEditor['insertInlineAtRange'];
    insertTextAtRange: CoreEditor['insertTextAtRange'];
    removeMarkAtRange: CoreEditor['removeMarkAtRange'];
    setBlocksAtRange: CoreEditor['setBlocksAtRange'];
    setInlinesAtRange: CoreEditor['setInlinesAtRange'];
    splitBlockAtRange: CoreEditor['splitBlockAtRange'];
    splitInlineAtRange: CoreEditor['splitInlineAtRange'];
    toggleMarkAtRange: CoreEditor['toggleMarkAtRange'];
    unwrapBlockAtRange: CoreEditor['unwrapBlockAtRange'];
    unwrapInlineAtRange: CoreEditor['unwrapInlineAtRange'];
    wrapBlockAtRange: CoreEditor['wrapBlockAtRange'];
    wrapInlineAtRange: CoreEditor['wrapInlineAtRange'];
    wrapTextAtRange: CoreEditor['wrapTextAtRange'];

    addMarkByKey: CoreEditor['addMarkByKey'];
    addMarkByPath: CoreEditor['addMarkByPath'];
    addMarksByPath: CoreEditor['addMarksByPath'];
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
    removeAllMarksByKey: CoreEditor['removeAllMarksByKey'];
    removeAllMarksByPath: CoreEditor['removeAllMarksByPath'];
    removeMarkByKey: CoreEditor['removeMarkByKey'];
    removeMarkByPath: CoreEditor['removeMarkByPath'];
    removeMarksByPath: CoreEditor['removeMarksByPath'];
    removeNodeByKey: CoreEditor['removeNodeByKey'];
    removeNodeByPath: CoreEditor['removeNodeByPath'];
    removeTextByKey: CoreEditor['removeTextByKey'];
    removeTextByPath: CoreEditor['removeTextByPath'];
    replaceNodeByKey: CoreEditor['replaceNodeByKey'];
    replaceNodeByPath: CoreEditor['replaceNodeByPath'];
    replaceTextByKey: CoreEditor['replaceTextByKey'];
    replaceTextByPath: CoreEditor['replaceTextByPath'];
    setMarkByKey: CoreEditor['setMarkByKey'];
    setMarkByPath: CoreEditor['setMarkByPath'];
    setNodeByKey: CoreEditor['setNodeByKey'];
    setNodeByPath: CoreEditor['setNodeByPath'];
    setTextByKey: CoreEditor['setTextByKey'];
    setTextByPath: CoreEditor['setTextByPath'];
    splitDescendantsByKey: CoreEditor['splitDescendantsByKey'];
    splitDescendantsByPath: CoreEditor['splitDescendantsByPath'];
    splitNodeByKey: CoreEditor['splitNodeByKey'];
    splitNodeByPath: CoreEditor['splitNodeByPath'];
    unwrapBlockByKey: CoreEditor['unwrapBlockByKey'];
    unwrapBlockByPath: CoreEditor['unwrapBlockByPath'];
    unwrapChildrenByKey: CoreEditor['unwrapChildrenByKey'];
    unwrapChildrenByPath: CoreEditor['unwrapChildrenByPath'];
    unwrapInlineByKey: CoreEditor['unwrapInlineByKey'];
    unwrapInlineByPath: CoreEditor['unwrapInlineByPath'];
    unwrapNodeByKey: CoreEditor['unwrapNodeByKey'];
    unwrapNodeByPath: CoreEditor['unwrapNodeByPath'];
    wrapBlockByKey: CoreEditor['wrapBlockByKey'];
    wrapBlockByPath: CoreEditor['wrapBlockByPath'];
    wrapInlineByKey: CoreEditor['wrapInlineByKey'];
    wrapInlineByPath: CoreEditor['wrapInlineByPath'];
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
    hasCommand: CoreEditor['hasCommand'];
    hasQuery: CoreEditor['hasQuery'];
    registerCommand: CoreEditor['registerCommand'];
    registerQuery: CoreEditor['registerQuery'];
    applyOperation: CoreEditor['applyOperation'];
    run: CoreEditor['run'];
    removeAnnotation: CoreEditor['removeAnnotation'];

    findDOMNode: (path: Immutable.List<number> | number[]) => React.ReactNode | null;
    findDOMPoint: (point: PointProperties | PointJSON | Point) => { node: Node; offset: number } | null;
    findDOMRange: (range: RangeTypeProperties | RangeTypeJSON | RangeType) => Range | null;
    findNode: (element: Element) => SlateNode | null;
    findEventRange: (event: Event | React.SyntheticEvent) => SlateRange | null;
    findPath: (element: Element) => Immutable.List<number> | null;
    findPoint: (nativeNode: Element, nativeOffset: number) => Point | null;
    findRange: (domRange: Range | Selection) => SlateRange | null;
    findSelection: (domSelection: Selection) => SlateSelection | null;
}

export type SlateType = 'fragment' | 'html' | 'node' | 'rich' | 'text' | 'files';

// Utilities
export function cloneFragment(event: Event | React.SyntheticEvent, editor: CoreEditor, callback?: () => void): void;
export function getEventTransfer(event: Event | React.SyntheticEvent): { type: SlateType; node: SlateNode };
export function setEventTransfer(event: Event | React.SyntheticEvent, type: SlateType, data: any): void;

// Deprecated
export function findDOMNode(node: SlateNode | string, win?: Window): Element;
export function findDOMPoint(point: Point, win?: Window): { node: Node; offset: number } | null;
export function findDOMRange(range: RangeTypeProperties | RangeTypeJSON | RangeType, win?: Window): Range | null;
export function findNode(element: Element, editor: CoreEditor): SlateNode;
export function findPath(element: Element, editor: CoreEditor): Immutable.List<number> | null;
export function findPoint(nativeNode: Element, nativeOffset: number, editor: CoreEditor): Point | null;
export function findRange(domRange: Range | Selection, editor: CoreEditor): SlateRange | null;
export function getEventRange(event: Event | React.SyntheticEvent, editor: CoreEditor): SlateRange | null;
