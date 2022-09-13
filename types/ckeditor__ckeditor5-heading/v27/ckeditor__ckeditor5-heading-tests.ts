import { Editor } from '@ckeditor/ckeditor5-core';
import Heading from '@ckeditor/ckeditor5-heading';
import HeadingCommand from '@ckeditor/ckeditor5-heading/src/headingcommand';

class MyEditor extends Editor {}
const myEditor = new MyEditor();

let str = '';

new Heading.Heading(myEditor);
Heading.Heading.requires.length === 2;

const headingEditing = new Heading.HeadingEditing(myEditor);
headingEditing.init();
headingEditing.afterInit();

const headingUI = new Heading.HeadingUI(myEditor);
headingUI.init();

const headingButtonsUI = new Heading.HeadingButtonsUI(myEditor);
headingButtonsUI.init();

const title = new Heading.Title(myEditor);
title.init();
str = title.getTitle();
str = title.getBody();
str = title.getBody({ rootName: str });
str = title.getBody({ trim: 'none' });
str = title.getBody({ rootName: str, trim: 'none' });

// @ts-expect-error
new HeadingCommand(myEditor, ['']).execute();
new HeadingCommand(myEditor, ['']).execute({ value: '' });

// $ExpectType Heading
myEditor.plugins.get('Heading');

// $ExpectType HeadingButtonsUI
myEditor.plugins.get('HeadingButtonsUI');

// $ExpectType HeadingEditing
myEditor.plugins.get('HeadingEditing');

// $ExpectType HeadingUI
myEditor.plugins.get('HeadingUI');

// $ExpectType Title
myEditor.plugins.get('Title');

// $ExpectType HeadingCommand | undefined
myEditor.commands.get('HeadingCommand');

// $ExpectType HeadingCommand | undefined
myEditor.commands.get('HeadingCommand');
