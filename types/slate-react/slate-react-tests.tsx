import { Editor, Plugin, EditorProps, OnChangeFn, RenderBlockProps, RenderInlineProps } from 'slate-react';
import { Value, Point, Range, Inline, Mark, Document, Decoration, Operation } from 'slate';
import * as React from "react";
import { List } from "immutable";

declare module 'slate-react' {
    // Plugins can add command and query method.
    // Testing that if we extend the interface, the compiler is aware of the
    // new methods inside of other plugin functions.
    interface Editor {
        someCommand: () => Editor;
        someQuery: () => string;
    }
}

class MyPlugin implements Plugin {
    commands = {
        someCommand: (editor: Editor) => editor,
    };
    queries = {
        someQuery: (editor: Editor) => 'query result',
    };

    renderBlock(props: RenderBlockProps, editor: Editor, next: () => void) {
        const { node } = props;

        editor.someCommand();
        const queryResult: string = editor.someQuery();

        if (node) {
            switch (node.object) {
                case 'block':
                    return <div id="slate-block-test" />;
                default:
                    return undefined;
            }
        }
    }
    renderInline(props: RenderInlineProps, editor: Editor, next: () => void) {
        const { node } = props;
        if (node) {
            switch (node.object) {
                case 'inline':
                    return <span id="slate-inline-test">Hello world</span>;
                default:
                    return undefined;
            }
        }
    }

    onChange = (change: { operations: List<Operation>, value: Value }) => {
        console.log(change.operations, change.value);
    }
}

const eventPlugin: Plugin = {
    onBeforeInput: (event, editor, next) => {[event.nativeEvent, ]; },
    onBlur: (event, editor, next) => {[event.nativeEvent, ]; },
    onClick: (event, editor, next) => {[event.nativeEvent, event.clientX, ]; },
    onCompositionEnd: (event, editor, next) => {[event.nativeEvent, event.data, ]; },
    onCompositionStart: (event, editor, next) => {[event.nativeEvent, event.data, ]; },
    onContextMenu: (event, editor, next) => {[event.nativeEvent, event.clientX, ]; },
    onCopy: (event, editor, next) => {[event.nativeEvent, event.clipboardData, ]; },
    onCut: (event, editor, next) => {[event.nativeEvent, event.clipboardData, ]; },
    onDragEnd: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onDragEnter: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onDragExit: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onDragLeave: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onDragOver: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onDragStart: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onDrop: (event, editor, next) => {[event.nativeEvent.dataTransfer, event.clientX, ]; },
    onFocus: (event, editor, next) => {[event.nativeEvent, ]; },
    onInput: (event, editor, next) => {[event.nativeEvent, ]; },
    onKeyDown: (event, editor, next) => {[event.nativeEvent, event.key, ]; },
    onPaste: (event, editor, next) => {[event.nativeEvent, event.clipboardData, ]; },
    onSelect: (event, editor, next) => {[event.nativeEvent, ]; },
};

const myPlugin = new MyPlugin();
const plugins = [myPlugin, [myPlugin, [myPlugin]], eventPlugin];

interface MyEditorState {
    value: Value;
}

const value = Value.create();

class MyEditor extends React.Component<EditorProps, MyEditorState> {
    constructor(props: EditorProps) {
        super(props);
        this.state = {
            value
        };
    }
    render() {
        return (
            <Editor
                plugins={plugins}
                value={this.state.value}
                renderBlock={myPlugin.renderBlock}
                renderInline={myPlugin.renderInline}
                onChange={myPlugin.onChange}
            />
        );
    }
}

const editor = new Editor({ value });
const point = Point.create({ key: "a", offset: 0 });
const range = Range.create({ anchor: point, focus: point });
const inline = Inline.create("text");
const mark = Mark.create("bold");
const decorations = Decoration.createList([{ anchor: Point.create({ key: "a", offset: 0 }), focus: Point.create({ key: "a", offset: 0 }) }]);

const doc = Document.fromJSON({
    object: "document",
    data: {},
    nodes: []
});

editor
.addMark("bold")
.addMarkAtRange(range, "italic")
.addMarkByKey("a", 0, 1, "bold")
.addMarkByPath(List([0]), 0, 1, "bold")
.blur()
.delete()
.deleteAtRange(range)
.deleteBackward(0)
.deleteBackwardAtRange(range, 0)
.deleteCharBackwardAtRange(range)
.deleteCharForwardAtRange(range)
.deleteForward(0)
.deleteForwardAtRange(range, 0)
.deleteLineBackwardAtRange(range)
.deleteLineForwardAtRange(range)
.deleteWordBackwardAtRange(range)
.deleteWordForwardAtRange(range)
.deselect()
.flip()
.focus()
.insertBlock({
    type: "image",
    key: "b",
    data: {
        src: "http://placekitten.com/200/300",
        alt: "Kittens",
        className: "img-responsive"
    }
})
.insertBlockAtRange(range, "text")
.insertFragment(doc)
.insertFragmentAtRange(range, doc)
.insertFragmentByKey("a", 0, doc)
.insertFragmentByPath(List([0]), 0, doc)
.insertInline(inline)
.insertInlineAtRange(range, inline)
.insertNodeByKey("a", 0, inline)
.insertNodeByPath(List([0]), 0, inline)
.insertText("A bit of rich text, followed by...")
.insertTextAtRange(range, "More text")
.insertTextByKey("a", 0, "text")
.insertTextByPath(List([0]), 0, "text")
.mergeNodeByKey("b")
.mergeNodeByPath(List([0]))
.moveAnchorBackward()
.moveAnchorToEndOfNode(inline)
.moveAnchorForward()
.moveAnchorTo("a", 0)
.moveAnchorToEndOfBlock()
.moveAnchorToEndOfDocument()
.moveAnchorToEndOfInline()
.moveAnchorToEndOfNextBlock()
.moveAnchorToEndOfNextInline()
.moveAnchorToEndOfNextText()
.moveAnchorToEndOfPreviousBlock()
.moveAnchorToEndOfPreviousInline()
.moveAnchorToEndOfPreviousText()
.moveAnchorToEndOfText()
.moveAnchorToStartOfBlock()
.moveAnchorToStartOfDocument()
.moveAnchorToStartOfInline()
.moveAnchorToStartOfNextBlock()
.moveAnchorToStartOfNextInline()
.moveAnchorToStartOfNextText()
.moveAnchorToStartOfNode(inline)
.moveAnchorToStartOfPreviousBlock()
.moveAnchorToStartOfPreviousInline()
.moveAnchorToStartOfPreviousText()
.moveAnchorToStartOfText()
.moveBackward()
.moveEndBackward()
.moveEndForward()
.moveEndTo("a", 0)
.moveEndToEndOfBlock()
.moveEndToEndOfDocument()
.moveEndToEndOfInline()
.moveEndToEndOfNextBlock()
.moveEndToEndOfNextInline()
.moveEndToEndOfNextText()
.moveEndToEndOfNode(inline)
.moveEndToEndOfPreviousBlock()
.moveEndToEndOfPreviousInline()
.moveEndToEndOfPreviousText()
.moveEndToEndOfText()
.moveEndToStartOfBlock()
.moveEndToStartOfDocument()
.moveEndToStartOfInline()
.moveEndToStartOfNextBlock()
.moveEndToStartOfNextInline()
.moveEndToStartOfNextText()
.moveEndToStartOfNode(inline)
.moveEndToStartOfPreviousBlock()
.moveEndToStartOfPreviousInline()
.moveEndToStartOfPreviousText()
.moveEndToStartOfText()
.moveFocusBackward()
.moveFocusForward()
.moveFocusTo("a", 0)
.moveFocusToEndOfBlock()
.moveFocusToEndOfDocument()
.moveFocusToEndOfInline()
.moveFocusToEndOfNextBlock()
.moveFocusToEndOfNextInline()
.moveFocusToEndOfNextText()
.moveFocusToEndOfNode(inline)
.moveFocusToEndOfPreviousBlock()
.moveFocusToEndOfPreviousInline()
.moveFocusToEndOfPreviousText()
.moveFocusToEndOfText()
.moveFocusToStartOfBlock()
.moveFocusToStartOfDocument()
.moveFocusToStartOfInline()
.moveFocusToStartOfNextBlock()
.moveFocusToStartOfNextInline()
.moveFocusToStartOfNextText()
.moveFocusToStartOfNode(inline)
.moveFocusToStartOfPreviousBlock()
.moveFocusToStartOfPreviousInline()
.moveFocusToStartOfPreviousText()
.moveFocusToStartOfText()
.moveForward()
.moveNodeByKey("b", "c", 2)
.moveNodeByPath(List([1]), List([2]), 1)
.moveStartBackward()
.moveStartForward()
.moveStartTo("a", 0)
.moveStartToEndOfBlock()
.moveStartToEndOfDocument()
.moveStartToEndOfInline()
.moveStartToEndOfNextBlock()
.moveStartToEndOfNextInline()
.moveStartToEndOfNextText()
.moveStartToEndOfNode(inline)
.moveStartToEndOfPreviousBlock()
.moveStartToEndOfPreviousInline()
.moveStartToEndOfPreviousText()
.moveStartToEndOfText()
.moveStartToStartOfBlock()
.moveStartToStartOfDocument()
.moveStartToStartOfInline()
.moveStartToStartOfNextBlock()
.moveStartToStartOfNextInline()
.moveStartToStartOfNextText()
.moveStartToStartOfNode(inline)
.moveStartToStartOfPreviousBlock()
.moveStartToStartOfPreviousInline()
.moveStartToStartOfPreviousText()
.moveStartToStartOfText()
.moveTo("a", 0)
.moveToAnchor()
.moveToEnd()
.moveToEndOfBlock()
.moveToEndOfDocument()
.moveToEndOfInline()
.moveToEndOfNextBlock()
.moveToEndOfNextInline()
.moveToEndOfNextText()
.moveToEndOfNode(inline)
.moveToEndOfPreviousBlock()
.moveToEndOfPreviousInline()
.moveToEndOfPreviousText()
.moveToEndOfText()
.moveToFocus()
.moveToRangeOfNode(inline)
.moveToRangeOfDocument()
.moveToStart()
.moveToStartOfBlock()
.moveToStartOfDocument()
.moveToStartOfInline()
.moveToStartOfNextBlock()
.moveToStartOfNextInline()
.moveToStartOfNextText()
.moveToStartOfNode(inline)
.moveToStartOfPreviousBlock()
.moveToStartOfPreviousInline()
.moveToStartOfPreviousText()
.moveToStartOfText()
.normalize()
.redo()
.removeMark("bold")
.removeMarkAtRange(range, "bold")
.removeMarkByKey("a", 0, 1, "bold")
.removeMarkByPath(List([0]), 0, 1, "bold")
.removeNodeByKey("b")
.removeNodeByPath(List([0]))
.removeTextByKey("a", 0, 1)
.removeTextByPath(List([0]), 0, 1)
.replaceMark("bold", "italic")
.replaceNodeByKey("a", inline)
.replaceNodeByPath(List([0]), inline)
.select(range)
.setBlocks("paragraph")
.setBlocksAtRange(range, "paragraph")
.setInlines("paragraph")
.setInlinesAtRange(range, "paragraph")
.setMarkByKey("a", 0, 1, mark, { type: "bold" })
.setNodeByKey("a", "paragraph")
.setNodeByPath(List([0]), "paragraph")
.snapshotSelection()
.splitBlock(0)
.splitBlockAtRange(range, 0)
.splitInline(0)
.splitInlineAtRange(range, 0)
.splitNodeByKey("a", 0)
.splitNodeByPath(List([0]), 0)
.toggleMark("bold")
.toggleMarkAtRange(range, "bold")
.undo()
.unwrapBlock("paragraph")
.unwrapBlockAtRange(range, "paragraph")
.unwrapBlockByKey("a", "paragraph")
.unwrapBlockByPath("a", "paragraph")
.unwrapInline("paragraph")
.unwrapInlineAtRange(range, "paragraph")
.unwrapInlineByKey("a", "paragraph")
.unwrapInlineByPath("a", "paragraph")
.unwrapNodeByKey("a")
.unwrapNodeByPath(List([0]))
.wrapBlock("paragraph")
.wrapBlockAtRange(range, "paragraph")
.wrapBlockByKey("a", "paragraph")
.wrapBlockByPath(List([0]), "paragraph")
.wrapInline("paragraph")
.wrapInlineAtRange(range, "paragraph")
.wrapInlineByKey("a", "paragraph")
.wrapInlineByPath(List([0]), "paragraph")
.wrapNodeByKey("a", inline)
.wrapNodeByPath(List([0]), inline)
.wrapText("a", "b")
.wrapTextAtRange(range, "a");

editor.withoutMerging(() => { /* noop */ });
editor.withoutNormalizing(() => { /* noop */ });
editor.withoutSaving(() => { /* noop */ });
