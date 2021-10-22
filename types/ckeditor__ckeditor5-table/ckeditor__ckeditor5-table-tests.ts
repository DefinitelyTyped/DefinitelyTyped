import { Editor } from '@ckeditor/ckeditor5-core';
import { Element } from '@ckeditor/ckeditor5-engine';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import CKTable from '@ckeditor/ckeditor5-table';

class MyEditor extends Editor {}
const editor = new MyEditor();

new CKTable.Table(editor);
CKTable.Table.requires.map(Plugin => new Plugin(editor).init());

new CKTable.TableUI(editor).init();

new CKTable.TableMouse(editor).init();
CKTable.TableMouse.requires.map(Plugin => new Plugin(editor).init());

new CKTable.TableUtils(editor).init();
new CKTable.TableUtils(editor).getCellLocation(Element.fromJSON({ name: 'div' })).row > 0;
new CKTable.TableUtils(editor).getCellLocation(Element.fromJSON({ name: 'div' })).column > 0;
new CKTable.TableUtils(editor)
    .createTable(new Writer(), { rows: 4, columns: 0, headingRows: 4, headingColumns: 4 })
    .getChildren();
let table = new CKTable.TableUtils(editor).createTable(new Writer());
new CKTable.TableUtils(editor).insertRows(table, { at: 0, rows: 3 });
new CKTable.TableUtils(editor).insertColumns(table, { at: 0, columns: 3 });
new CKTable.TableUtils(editor).removeRows(table, { at: 0, rows: 3 });
new CKTable.TableUtils(editor).removeColumns(table, { at: 0, columns: 3 });
new CKTable.TableUtils(editor).splitCellVertically(table, 0);
new CKTable.TableUtils(editor).splitCellHorizontally(table, 0);
new CKTable.TableUtils(editor).getColumns(table) > 0;
new CKTable.TableUtils(editor).getRows(table) > 0;

CKTable.TableEditing.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableEditing(editor);

CKTable.TableToolbar.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableToolbar(editor).afterInit();

CKTable.TableClipboard.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableClipboard(editor).init();

CKTable.TableKeyboard.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableKeyboard(editor).init();

CKTable.TableSelection.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableSelection(editor).init();
const cells = new CKTable.TableSelection(editor).getSelectedTableCells();
if (Array.isArray(cells)) {
    table = cells[0];
}
new CKTable.TableSelection(editor).getSelectionAsFragment()?.getChildren();
new CKTable.TableSelection(editor).setCellSelection(table, table);
table = new CKTable.TableSelection(editor).getFocusCell();
table = new CKTable.TableSelection(editor).getAnchorCell();

CKTable.TableProperties.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableProperties(editor);

CKTable.TablePropertiesEditing.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TablePropertiesEditing(editor).init();

CKTable.TablePropertiesUI.requires.map(Plugin => new Plugin(editor).stopListening());
new CKTable.TablePropertiesUI(editor).init();
new CKTable.TablePropertiesUI(editor).destroy();

CKTable.TableCellPropertiesUI.requires.map(Plugin => new Plugin(editor).stopListening());
new CKTable.TableCellPropertiesUI(editor).init();
new CKTable.TableCellPropertiesUI(editor).destroy();

CKTable.TableCellPropertiesEditing.requires.map(Plugin => new Plugin(editor).init());
new CKTable.TableCellPropertiesEditing(editor).init();

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
