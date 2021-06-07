import { Editor } from '@ckeditor/ckeditor5-core';
import Link from '@ckeditor/ckeditor5-link';
import { View } from '@ckeditor/ckeditor5-ui';
import LinkCommand from '@ckeditor/ckeditor5-link/src/linkcommand';
import UnlinkCommand from '@ckeditor/ckeditor5-link/src/unlinkcommand';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Link.Link(editor);
Link.Link.requires.map(Plugin => new Plugin(editor).init());

Link.LinkUI.requires.map(Plugin => new Plugin(editor));
new Link.LinkUI(editor).init();
new Link.LinkUI(editor).destroy();
let view: View = new Link.LinkUI(editor).formview;
view = new Link.LinkUI(editor).actionsView;

new Link.AutoLink(editor).init();
new Link.AutoLink(editor).afterInit();

new Link.LinkImage(editor);
Link.LinkImage.requires.map(Plugin => new Plugin(editor).init());

new Link.LinkEditing(editor).init();
Link.LinkEditing.requires.map(Plugin => new Plugin(editor).init());

Link.LinkImageUI.requires.map(Plugin => new Plugin(editor));
new Link.LinkImageUI(editor).init();

new Link.AutoLink(editor).init();
new Link.AutoLink(editor).afterInit();

new LinkCommand(editor).execute('http://example.com');
new LinkCommand(editor).execute('http://example.com', { target: '_blank' });
// $ExpectError
new LinkCommand(editor).execute();

new UnlinkCommand(editor).execute();
// $ExpectError
new UnlinkCommand(editor).execute('');
