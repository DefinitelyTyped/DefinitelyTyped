import { Editor } from "@ckeditor/ckeditor5-core";
import { StylesProcessor } from "@ckeditor/ckeditor5-engine";
import Schema from "@ckeditor/ckeditor5-engine/src/model/schema";
import View from "@ckeditor/ckeditor5-engine/src/view/view";
import { Enter, ShiftEnter } from "@ckeditor/ckeditor5-enter";
import EnterCommand from "@ckeditor/ckeditor5-enter/src/entercommand";
import EnterObserver from "@ckeditor/ckeditor5-enter/src/enterobserver";
import ShiftEnterCommand from "@ckeditor/ckeditor5-enter/src/shiftentercommand";
import * as utils from "@ckeditor/ckeditor5-enter/src/utils";

class MyEditor extends Editor {}
const myEditor = new MyEditor();

const shiftEnter = new ShiftEnter(myEditor);
shiftEnter.init();

const enter = new Enter(myEditor);
enter.init();

const enterCommand = new EnterCommand(myEditor);
enterCommand.execute();

const enterObserver = new EnterObserver(new View(new StylesProcessor()));
enterObserver.observe();

const shiftEnterCommand = new ShiftEnterCommand(myEditor);
shiftEnterCommand.execute();

const result: Generator<number> = utils.getCopyOnEnterAttributes(new Schema(), [4, 5, 6]);

// $ExpectType Enter
myEditor.plugins.get('Enter');

// $ExpectType ShiftEnter
myEditor.plugins.get('ShiftEnter');

// $ExpectType ShiftEnter
myEditor.plugins.get('ShiftEnter');

// $ExpectType ShiftEnterCommand | undefined
myEditor.commands.get('ShiftEnterCommand');

// $ExpectType EnterCommand | undefined
myEditor.commands.get('EnterCommand');
