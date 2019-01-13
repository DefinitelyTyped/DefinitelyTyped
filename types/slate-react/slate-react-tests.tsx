import { Editor, Plugin, EditorProps, RenderNodeProps } from "slate-react";
import { Value, Editor as Controller, Operation, Point, Range, Inline, Mark, Document } from "slate";
import * as React from "react";
import * as Immutable from "immutable";

class MyPlugin implements Plugin {
    renderNode(props: RenderNodeProps, editor: Controller, next: () => void) {
        const { node } = props;
        if (node) {
            switch (node.object) {
                case "block":
                    return <div id="slate-block-test"/>;
                case "inline":
                    return <span id="slate-inline-test">Hello world</span>;
                default:
                    return undefined;
            }
        }
    }
    onChange = (change: {operations: Immutable.List<Operation>, value: Value}) => {
        console.log(change.value);
    }
}

const myPlugin = new MyPlugin();

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
        return <Editor
            value={this.state.value}
            renderNode={ myPlugin.renderNode }
            onChange={ myPlugin.onChange }/>;
    }
}

const editor = new Editor({ value });
const point = Point.create({ key: "a", offset: 0 });
const range = Range.create({ anchor: point, focus: point });
const inline = Inline.create("text");
const mark = Mark.create("bold");
const doc = Document.fromJSON({
	object: "document",
	data: {},
	nodes: []
});

editor
.addMark("bold")
.addMarkAtRange(range, "italic")
.addMarkByKey("a", 0, 1, "bold")
.addMarkByPath("a", 0, 1, "bold")
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
.insertFragmentByPath("a", 0, doc)
.insertInline(inline)
.insertInlineAtRange(range, inline)
.insertNodeByKey("a", 0, inline)
.insertNodeByPath("a", 0, inline)
.insertText("A bit of rich text, followed by...")
.insertTextAtRange(range, "More text")
.insertTextByKey("a", 0, "text")
.insertTextByPath("a", 0, "text")
.mergeNodeByKey("b")
.mergeNodeByPath("b")
.moveAnchorBackward()
.moveAnchorEndOfNode(inline)
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
.moveNodeByPath("c", "b", 1)
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
.moveToRangeOf(inline)
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
.removeMarkByPath("a", 0, 1, "bold")
.removeNodeByKey("b")
.removeNodeByPath("b")
.removeTextByKey("a", 0, 1)
.removeTextByPath("a", 0, 1)
.replaceMark("bold", "italic")
.replaceNodeByKey("a", inline)
.replaceNodeByPath("a", inline)
.select(range)
.setBlocks("paragraph")
.setBlocksAtRange(range, "paragraph")
.setInlines("paragraph")
.setInlinesAtRange(range, "paragraph")
.setMarkByKey("a", 0, 1, mark, { type: "bold" })
.setMarksByPath("a", 0, 1, mark, { type: "bold" })
.setNodeByKey("a", "paragraph")
.setNodeByPath("a", "paragraph")
.snapshotSelection()
.splitBlock(0)
.splitBlockAtRange(range, 0)
.splitInline(0)
.splitInlineAtRange(range, 0)
.splitNodeByKey("a", 0)
.splitNodeByPath("a", 0)
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
.unwrapNodeByPath("a")
.withoutMerging(() => { /* noop */ })
.withoutNormalizing(() => { /* noop */ })
.withoutSaving(() => { /* noop */ })
.wrapBlock("paragraph")
.wrapBlockAtRange(range, "paragraph")
.wrapBlockByKey("a", "paragraph")
.wrapBlockByPath("a", "paragraph")
.wrapInline("paragraph")
.wrapInlineAtRange(range, "paragraph")
.wrapInlineByKey("a", "paragraph")
.wrapInlineByPath("a", "paragraph")
.wrapNodeByKey("a", inline)
.wrapNodeByPath("a", inline)
.wrapText("a", "b")
.wrapTextAtRange(range, "a");
