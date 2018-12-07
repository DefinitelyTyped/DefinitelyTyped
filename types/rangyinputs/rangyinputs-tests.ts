let $obj: JQuery = $('meh');

let selection: RangyInputs.Selection = $obj.getSelection();
let start: number = selection.start;
let end: number = selection.end;
let len: number = selection.length;
let text: string = selection.text;
$obj = $obj.setSelection(selection.start)
	.setSelection(selection.start, selection.end)
	.collapseSelection()
	.collapseSelection(true)
	.deleteText(0, 3)
	.deleteText(0, 3, true)
	.deleteSelectedText();
text = $obj.extractSelectedText();
$obj.insertText(selection.text, 4)
	.insertText(text, 4, 'collapseToStart')
	.replaceSelectedText(text)
	.replaceSelectedText(text, 'select')
	.surroundSelectedText('before', 'after')
	.surroundSelectedText('before', 'after', 'collapseToEnd');
