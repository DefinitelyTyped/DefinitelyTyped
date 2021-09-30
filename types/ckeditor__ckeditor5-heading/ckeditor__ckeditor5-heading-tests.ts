import { Editor } from '@ckeditor/ckeditor5-core';
import { Heading, HeadingButtonsUI, HeadingEditing, HeadingUI, Title } from '@ckeditor/ckeditor5-heading';
import HeadingCommand from '@ckeditor/ckeditor5-heading/src/headingcommand';
import * as utils from "@ckeditor/ckeditor5-heading/src/utils";

class MyEditor extends Editor {}
const myEditor = new MyEditor();

let str = '';

new Heading(myEditor);
Heading.requires.length === 2;

const headingEditing = new HeadingEditing(myEditor);
headingEditing.init();
headingEditing.afterInit();

const headingUI = new HeadingUI(myEditor);
headingUI.init();

const headingButtonsUI = new HeadingButtonsUI(myEditor);
headingButtonsUI.init();

const title = new Title(myEditor);
title.init();
str = title.getTitle();
str = title.getBody();
str = title.getBody({ rootName: str });
str = title.getBody({ trim: 'none' });
str = title.getBody({ rootName: str, trim: 'none' });

// $ExpectError
new HeadingCommand(myEditor, ['']).execute();
new HeadingCommand(myEditor, ['']).execute({ value: '' });

utils.getLocalizedOptions(myEditor).forEach(value => {
    value.title === "";
    value.model === "";
    value.class === "";
});

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
