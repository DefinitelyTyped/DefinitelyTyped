import { Value, Data, NodeJSON, Document } from "slate";

const data = Data.create({ foo: "bar "});
const value = Value.create({ data });
const change = value.change()
.focus()
.selectAll()
.delete()
.insertText('A bit of rich text, followed by...')
.moveOffsetsTo(10, 14)
.addMark('bold')
.collapseToEndOfNextBlock()
.insertBlock({
	type: 'image',
	isVoid: true,
	data: {
		src: 'http://placekitten.com/200/300',
		alt: 'Kittens',
		className: 'img-responsive',
	},
})
.insertBlock('paragraph');

const node: NodeJSON = {
	object: "block",
	type: "paragraph",
	isVoid: false,
	data: {},
	nodes: [
		{
			object: "text",
			leaves: [
				{
					object: 'leaf',
					text: "example",
					marks: [],
				}
			]
		}
	]
};

const doc = Document.fromJSON({
	object: "document",
	data: {},
	nodes: [
		node
	],
});
