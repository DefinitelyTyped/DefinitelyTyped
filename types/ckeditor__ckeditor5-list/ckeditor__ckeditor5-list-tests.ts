import { Editor } from '@ckeditor/ckeditor5-core';
import L from '@ckeditor/ckeditor5-list';
import CheckTodoListCommand from '@ckeditor/ckeditor5-list/src/checktodolistcommand';
import IndentCommand from '@ckeditor/ckeditor5-list/src/indentcommand';
import ListCommand from '@ckeditor/ckeditor5-list/src/listcommand';
import ListStyleCommand from '@ckeditor/ckeditor5-list/src/liststylecommand';
import * as todoConverters from '@ckeditor/ckeditor5-list/src/todolistconverters';
import * as converters from '@ckeditor/ckeditor5-list/src/converters';
import * as utils from '@ckeditor/ckeditor5-list/src/utils';
import { DowncastWriter, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import View from '@ckeditor/ckeditor5-engine/src/view/view';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import Position from '@ckeditor/ckeditor5-engine/src/view/position';
import DocumentFragment from '@ckeditor/ckeditor5-engine/src/view/documentfragment';

class MyEditor extends Editor {}
const editor = new MyEditor();

L.List.requires.map(Plugin => new Plugin(editor).init());
new L.List(editor);

new L.ListUI(editor).init();

L.ListStyle.requires.map(Plugin => new Plugin(editor).init());
new L.ListStyle(editor);

L.ListEditing.requires.map(Plugin => new Plugin(editor).init());
new L.ListEditing(editor).init();
new L.ListEditing(editor).afterInit();

L.TodoList.requires.map(Plugin => new Plugin(editor).init());
new L.TodoList(editor);

new L.TodoListUI(editor);

L.TodoListEditing.requires.map(Plugin => new Plugin(editor).init());
new L.TodoListEditing(editor);

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

utils.findNestedList(new EmptyElement());
utils.mergeViewLists(new DowncastWriter(new Document(new StylesProcessor())), new EmptyElement(), new EmptyElement());
utils.positionAfterUiElements(new Position(new DocumentFragment(), 1));
