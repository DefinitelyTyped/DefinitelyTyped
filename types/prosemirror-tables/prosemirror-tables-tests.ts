import * as tables from 'prosemirror-tables';

const table = tables.tableEditing();
const tableWithNodeSelection = tables.tableEditing({allowTableNodeSelection: true});

tables.toggleHeader('column');
tables.toggleHeader('row');
tables.toggleHeader('row', { useDeprecatedLogic: false });
tables.toggleHeader('row', { useDeprecatedLogic: true });
