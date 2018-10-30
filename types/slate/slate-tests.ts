import { Value, Data, BlockJSON, Document, Editor, KeyUtils } from "slate";

const data = Data.create({ foo: "bar " });
const value = Value.create({ data });

const node: BlockJSON = {
	object: "block",
	type: "paragraph",
	nodes: [
		{
			object: "text",
			leaves: [
				{
					text: "example",
					marks: []
				}
			]
		}
	]
};

const doc = Document.fromJSON({
	object: "document",
	data: {},
	nodes: [node]
});

const editor = new Editor({ value });

editor.registerQuery("testQuery");
editor.registerCommand("testCommand");
editor.setReadOnly(true).setValue(value);
editor.command("testCommand");
editor.query("testQuery");
editor.run("testCommand");
editor.event("mouseDown", new Event("mouseDown"));
editor
.focus()
.moveAnchorToStartOfDocument()
.moveFocusToEndOfDocument()
.delete()
.insertText("A bit of rich text, followed by...")
.moveToStartOfText()
.moveFocusForward(4)
.addMark("bold")
.moveToEndOfNextBlock()
.insertBlock({
	type: "image",
	data: {
		src: "http://placekitten.com/200/300",
		alt: "Kittens",
		className: "img-responsive"
	}
})
.insertBlock("paragraph");

KeyUtils.setGenerator(() => "Test");
KeyUtils.create();
KeyUtils.resetGenerator();
