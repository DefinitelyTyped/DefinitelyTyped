import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import { List, ListEditing, ListStyle, ListUI, TodoList, TodoListEditing, TodoListUI } from '@ckeditor/ckeditor5-list';
import CheckTodoListCommand from '@ckeditor/ckeditor5-list/src/checktodolistcommand';
import * as converters from '@ckeditor/ckeditor5-list/src/converters';
import IndentCommand from '@ckeditor/ckeditor5-list/src/indentcommand';
import ListCommand from '@ckeditor/ckeditor5-list/src/listcommand';
import ListStyleCommand from '@ckeditor/ckeditor5-list/src/liststylecommand';
import * as todoConverters from '@ckeditor/ckeditor5-list/src/todolistconverters';
import * as utils from '@ckeditor/ckeditor5-list/src/utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

List.requires.map(Plugin => new Plugin(editor).init());
new List(editor);

new ListUI(editor).init();

ListStyle.requires.map(Plugin => new Plugin(editor).init());
new ListStyle(editor);

ListEditing.requires.map(Plugin => new Plugin(editor).init());
new ListEditing(editor).init();
new ListEditing(editor).afterInit();

TodoList.requires.map(Plugin => new Plugin(editor).init());
new TodoList(editor);

new TodoListUI(editor);

TodoListEditing.requires.map(Plugin => new Plugin(editor).init());
new TodoListEditing(editor);

new CheckTodoListCommand(editor).execute();

new IndentCommand(editor, 'forward').execute();
new IndentCommand(editor, 'backward').execute();

new ListCommand(editor, 'numbered').execute({ forceValue: true });
new ListCommand(editor, 'bulleted').execute();

new ListStyleCommand(editor, '').execute();
new ListStyleCommand(editor, '').execute({ type: '' });

todoConverters.modelViewInsertion(new Model(), () => {});
todoConverters.modelViewChangeType(() => {}, new View(new StylesProcessor()));
todoConverters.dataModelViewInsertion(new Model());
todoConverters.mapModelToViewPosition(new View(new StylesProcessor()));

converters.modelViewChangeIndent(new Model());
converters.modelViewInsertion(new Model());
converters.modelViewRemove(new Model());
converters.modelToViewPosition(new View(new StylesProcessor()));

const emptyElement = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('div');
utils.findNestedList(emptyElement);
utils.mergeViewLists(new DowncastWriter(new Document(new StylesProcessor())), emptyElement, emptyElement);
utils.positionAfterUiElements(new Position(new DocumentFragment(), 1));

// $ExpectType List
editor.plugins.get('List');

// $ExpectType ListEditing
editor.plugins.get('ListEditing');

// $ExpectType ListStyle
editor.plugins.get('ListStyle');

// $ExpectType ListStyleEditing
editor.plugins.get('ListStyleEditing');

// $ExpectType ListStyleUI
editor.plugins.get('ListStyleUI');

// $ExpectType ListUI
editor.plugins.get('ListUI');

// $ExpectType TodoList
editor.plugins.get('TodoList');

// $ExpectType TodoListEditing
editor.plugins.get('TodoListEditing');

// $ExpectType TodoListUI
editor.plugins.get('TodoListUI');

// $ExpectType CheckTodoListCommand | undefined
editor.commands.get('CheckTodoListCommand');

// $ExpectType IndentCommand | undefined
editor.commands.get('IndentCommand');

// $ExpectType ListCommand | undefined
editor.commands.get('ListCommand');

// $ExpectType ListStyleCommand | undefined
editor.commands.get('ListStyleCommand');
