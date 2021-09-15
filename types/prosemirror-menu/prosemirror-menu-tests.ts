import * as menu from 'prosemirror-menu';
import { schema } from 'prosemirror-schema-basic';
import { EditorView } from 'prosemirror-view';

const view = new EditorView({} as any, {} as any);

const menuBarPlugin = menu.menuBar({ content: [], floating: false });
const menuElement = new menu.MenuItem({ run: (_state, _dispatch, _view) => {} });
const { dom, update } = menu.renderGrouped(view, [menuElement]);
dom.children;
update(view.state);
