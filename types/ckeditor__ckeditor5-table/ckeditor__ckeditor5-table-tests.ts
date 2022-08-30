import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, EditingController, Element, Model, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import InsertColumnCommand from '@ckeditor/ckeditor5-table/src/commands/insertcolumncommand';
import InsertRowCommand from '@ckeditor/ckeditor5-table/src/commands/insertrowcommand';
import InsertTableCommand from '@ckeditor/ckeditor5-table/src/commands/inserttablecommand';
import MergeCellCommand from '@ckeditor/ckeditor5-table/src/commands/mergecellcommand';
import MergeCellsCommand from '@ckeditor/ckeditor5-table/src/commands/mergecellscommand';
import RemoveColumnCommand from '@ckeditor/ckeditor5-table/src/commands/removecolumncommand';
import RemoveRowCommand from '@ckeditor/ckeditor5-table/src/commands/removerowcommand';
import SelectColumnCommand from '@ckeditor/ckeditor5-table/src/commands/selectcolumncommand';
import SelectRowCommand from '@ckeditor/ckeditor5-table/src/commands/selectrowcommand';
import SetHeaderColumnCommand from '@ckeditor/ckeditor5-table/src/commands/setheadercolumncommand';
import SetHeaderRowCommand from '@ckeditor/ckeditor5-table/src/commands/setheaderrowcommand';
import SplitCellCommand from '@ckeditor/ckeditor5-table/src/commands/splitcellcommand';
import injectTableCaptionPostFixer from '@ckeditor/ckeditor5-table/src/converters/table-caption-post-fixer';
import injectTableCellParagraphPostFixer from '@ckeditor/ckeditor5-table/src/converters/table-cell-paragraph-post-fixer';
import injectTableLayoutPostFixer from '@ckeditor/ckeditor5-table/src/converters/table-layout-post-fixer';
import {
    downcastTableAttribute,
    upcastStyleToAttribute,
} from '@ckeditor/ckeditor5-table/src/converters/tableproperties';
import upcastTable from '@ckeditor/ckeditor5-table/src/converters/upcasttable';
import TableCaptionEditing from '@ckeditor/ckeditor5-table/src/tablecaption/tablecaptionediting';
import TableCaptionUI from '@ckeditor/ckeditor5-table/src/tablecaption/tablecaptionui';
import ToggleTableCaptionCommand from '@ckeditor/ckeditor5-table/src/tablecaption/toggletablecaptioncommand';
import * as TableCaptionUtils from '@ckeditor/ckeditor5-table/src/tablecaption/utils';
import TableCellPropertyCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellpropertycommand';
import TableCellBackgroundColorCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellbackgroundcolorcommand';
import TableCellBorderColorCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellbordercolorcommand';
import TableCellBorderStyleCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellborderstylecommand';
import TableCellBorderWidthCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellborderwidthcommand';
import TableCellHeightCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellheightcommand';
import TableCellHorizontalAlignmentCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellhorizontalalignmentcommand';
import TableCellPaddingCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellpaddingcommand';
import TableCellVerticalAlignmentCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellverticalalignmentcommand';
import TableCellWidthCommand from '@ckeditor/ckeditor5-table/src/tablecellproperties/commands/tablecellwidthcommand';
import TableCellPropertiesView from '@ckeditor/ckeditor5-table/src/tablecellproperties/ui/tablecellpropertiesview';
import MouseEventsObserver from '@ckeditor/ckeditor5-table/src/tablemouse/mouseeventsobserver';
import TablePropertiesView from '@ckeditor/ckeditor5-table/src/tableproperties/ui/tablepropertiesview';
import TableAlignmentCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tablealignmentcommand';
import TablePropertyCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tablepropertycommand';
import ColorInputView from '@ckeditor/ckeditor5-table/src/ui/colorinputview';
import FormRowView from '@ckeditor/ckeditor5-table/src/ui/formrowview';
import InsertTableView from '@ckeditor/ckeditor5-table/src/ui/inserttableview';
import * as UtilsUiContextualBallon from '@ckeditor/ckeditor5-table/src/utils/ui/contextualballoon';
import * as UtilsUITableProperties from '@ckeditor/ckeditor5-table/src/utils/ui/table-properties';
import * as UtilsCommon from '@ckeditor/ckeditor5-table/src/utils/common';
import * as UtilsStructure from '@ckeditor/ckeditor5-table/src/utils/structure';
import * as UtilsTableProperties from '@ckeditor/ckeditor5-table/src/utils/table-properties';
import TableCaption from '@ckeditor/ckeditor5-table/src/tablecaption';
import TableBackgroundColorCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tablebackgroundcolorcommand';
import TableBorderColorCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tablebordercolorcommand';
import TableBorderStyleCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tableborderstylecommand';
import TableBorderWidthCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tableborderwidthcommand';
import TableHeightCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tableheightcommand';
import TableWidthCommand from '@ckeditor/ckeditor5-table/src/tableproperties/commands/tablewidthcommand';
import TableWalker from '@ckeditor/ckeditor5-table/src/tablewalker';
import { getSelectedTableWidget, getTableWidgetAncestor } from '@ckeditor/ckeditor5-table/src/utils/ui/widget';
import ViewDocumentSelection from '@ckeditor/ckeditor5-engine/src/view/documentselection';
import ViewSelection from '@ckeditor/ckeditor5-engine/src/view/selection';
import {
    Table,
    TableCellPropertiesEditing,
    TableCellPropertiesUI,
    TableClipboard,
    TableEditing,
    TableKeyboard,
    TableMouse,
    TableProperties,
    TablePropertiesEditing,
    TablePropertiesUI,
    TableSelection,
    TableToolbar,
    TableUI,
    TableUtils,
} from '@ckeditor/ckeditor5-table';
import PlainTableOutput from '@ckeditor/ckeditor5-table/src/plaintableoutput';
import tableHeadingsRefreshHandler from '@ckeditor/ckeditor5-table/src/converters/table-headings-refresh-handler';
import tableCellRefreshHandler from '@ckeditor/ckeditor5-table/src/converters/table-cell-refresh-handler';
import {
    convertParagraphInTableCell,
    downcastCell,
    downcastRow,
    downcastTable,
    isSingleParagraphWithoutAttributes,
} from '@ckeditor/ckeditor5-table/src/converters/downcast';
import DowncastDispatcher, {
    DowncastConversionApi,
} from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import ModelConsumable from '@ckeditor/ckeditor5-engine/src/conversion/modelconsumable';
import Mapper from '@ckeditor/ckeditor5-engine/src/conversion/mapper';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Table(editor);
Table.requires.map(Plugin => new Plugin(editor).init());

new TableUI(editor).init();

new TableMouse(editor).init();
TableMouse.requires.map(Plugin => new Plugin(editor).init());

new PlainTableOutput(editor).init();

new TableCaption(editor);
TableCaption.requires.forEach(Plugin => new Plugin(editor));

new TableUtils(editor).init();
// $ExpectType number | undefined
new TableUtils(editor).getCellLocation(Element.fromJSON({ name: 'div' }))?.row;
// $ExpectType number | undefined
new TableUtils(editor).getCellLocation(Element.fromJSON({ name: 'div' }))?.column;
new TableUtils(editor)
    .createTable(new Writer(), { rows: 4, columns: 0, headingRows: 4, headingColumns: 4 })
    .getChildren();
let table = new TableUtils(editor).createTable(new Writer());
new TableUtils(editor).insertRows(table, { at: 0, rows: 3 });
new TableUtils(editor).insertColumns(table, { at: 0, columns: 3 });
new TableUtils(editor).removeRows(table, { at: 0, rows: 3 });
new TableUtils(editor).removeColumns(table, { at: 0, columns: 3 });
new TableUtils(editor).splitCellVertically(table, 0);
new TableUtils(editor).splitCellHorizontally(table, 0);
new TableUtils(editor).getColumns(table) > 0;
new TableUtils(editor).getRows(table) > 0;

TableEditing.requires.map(Plugin => new Plugin(editor).init());
new TableEditing(editor);

TableToolbar.requires.map(Plugin => new Plugin(editor).init());
new TableToolbar(editor).afterInit();

TableClipboard.requires.map(Plugin => new Plugin(editor).init());
new TableClipboard(editor).init();

TableKeyboard.requires.map(Plugin => new Plugin(editor).init());
new TableKeyboard(editor).init();

TableSelection.requires.map(Plugin => new Plugin(editor).init());
new TableSelection(editor).init();
const cells = new TableSelection(editor).getSelectedTableCells();
if (Array.isArray(cells)) {
    table = cells[0];
}
new TableSelection(editor).getSelectionAsFragment()?.getChildren();
new TableSelection(editor).setCellSelection(table, table);
table = new TableSelection(editor).getFocusCell();
table = new TableSelection(editor).getAnchorCell();

TableProperties.requires.map(Plugin => new Plugin(editor).init());
new TableProperties(editor);

TablePropertiesEditing.requires.map(Plugin => new Plugin(editor).init());
new TablePropertiesEditing(editor).init();

TablePropertiesUI.requires.map(Plugin => new Plugin(editor).stopListening());
new TablePropertiesUI(editor).init();
new TablePropertiesUI(editor).destroy();

TableCellPropertiesUI.requires.map(Plugin => new Plugin(editor).stopListening());
new TableCellPropertiesUI(editor).init();
new TableCellPropertiesUI(editor).destroy();

TableCellPropertiesEditing.requires.map(Plugin => new Plugin(editor).init());
new TableCellPropertiesEditing(editor).init();

// $ExpectType Table
editor.plugins.get('Table');

// $ExpectType TableCellProperties
editor.plugins.get('TableCellProperties');

// $ExpectType TableCellPropertiesEditing
editor.plugins.get('TableCellPropertiesEditing');

// $ExpectType TableCellPropertiesUI
editor.plugins.get('TableCellPropertiesUI');

// $ExpectType TableClipboard
editor.plugins.get('TableClipboard');

// $ExpectType TableEditing
editor.plugins.get('TableEditing');

// $ExpectType TableKeyboard
editor.plugins.get('TableKeyboard');

// $ExpectType TableMouse
editor.plugins.get('TableMouse');

// $ExpectType TableProperties
editor.plugins.get('TableProperties');

// $ExpectType TablePropertiesEditing
editor.plugins.get('TablePropertiesEditing');

// $ExpectType TablePropertiesUI
editor.plugins.get('TablePropertiesUI');

// $ExpectType TableSelection
editor.plugins.get('TableSelection');

// $ExpectType TableToolbar
editor.plugins.get('TableToolbar');

// $ExpectType TableUI
editor.plugins.get('TableUI');

// $ExpectType TableUtils
editor.plugins.get('TableUtils');

// $ExpectType PlainTableOutput
editor.plugins.get('PlainTableOutput');

// $ExpectType Element | null
getSelectedTableWidget(new ViewDocumentSelection());
// $ExpectType Element | null
getSelectedTableWidget(new ViewSelection());
// $ExpectType Element | null
getTableWidgetAncestor(new ViewDocumentSelection());
// $ExpectType Element | null
getTableWidgetAncestor(new ViewSelection());

[
    InsertTableCommand,
    MergeCellsCommand,
    RemoveColumnCommand,
    RemoveRowCommand,
    SelectColumnCommand,
    SelectRowCommand,
    SetHeaderColumnCommand,
    SetHeaderRowCommand,
    SplitCellCommand,
].forEach(Command => new Command(editor).execute());

new InsertColumnCommand(editor).execute();
new InsertColumnCommand(editor, { order: 'left' }).execute();
// @ts-expect-error
new InsertColumnCommand(editor, { order: '' }).execute();

new InsertRowCommand(editor, { order: 'above' }).execute();
(['up', 'down', 'left', 'right'] as const).forEach(direction => new MergeCellCommand(editor, { direction }));

[
    TableBackgroundColorCommand,
    TableBorderColorCommand,
    TableBorderStyleCommand,
    TableBorderWidthCommand,
    TableHeightCommand,
    TableWidthCommand,
].forEach(Command => new Command(editor, '').execute());

[
    TableCellBackgroundColorCommand,
    TableCellBorderColorCommand,
    TableCellBorderStyleCommand,
    TableCellBorderWidthCommand,
    TableCellHeightCommand,
    TableCellHorizontalAlignmentCommand,
    TableCellPaddingCommand,
    TableCellVerticalAlignmentCommand,
    TableCellWidthCommand,
].forEach(Command => new Command(editor, '').execute());

tableCellRefreshHandler(new Model(), new EditingController(new Model(), new StylesProcessor()));
tableHeadingsRefreshHandler(new Model(), new EditingController(new Model(), new StylesProcessor()));

const api: DowncastConversionApi = {
    consumable: new ModelConsumable(),
    dispatcher: new DowncastDispatcher({}),
    mapper: new Mapper(),
    schema: new Schema(),
    writer: new DowncastWriter(new Document(new StylesProcessor())),
};
// $ExpectType ContainerElement | Element || Element | ContainerElement
downcastTable(new TableUtils(editor), { asWidget: true })(new Element('div'), api);
downcastRow()(new Element('div'), api);
downcastCell()(new Element('div'), api);
convertParagraphInTableCell()(new Element('div'), api);
// $ExpectType boolean
isSingleParagraphWithoutAttributes(new Element('div'));
