import { Slate } from "slate";

const value = Slate.Value.create();
value.change()
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
