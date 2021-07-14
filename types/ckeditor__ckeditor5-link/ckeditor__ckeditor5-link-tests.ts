import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import { Element } from '@ckeditor/ckeditor5-engine';
import { Editor } from '@ckeditor/ckeditor5-core';
import { AutoLink, Link, LinkEditing, LinkImage, LinkImageUI, LinkUI } from '@ckeditor/ckeditor5-link';
import { View } from '@ckeditor/ckeditor5-ui';
import LinkCommand from '@ckeditor/ckeditor5-link/src/linkcommand';
import UnlinkCommand from '@ckeditor/ckeditor5-link/src/unlinkcommand';
import * as utils from '@ckeditor/ckeditor5-link/src/utils';
import EmptyElement from '@ckeditor/ckeditor5-engine/src/view/emptyelement';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';

class MyEditor extends Editor {}
const editor = new MyEditor();

new Link(editor);
Link.requires.map(Plugin => new Plugin(editor).init());

LinkUI.requires.map(Plugin => new Plugin(editor));
new LinkUI(editor).init();
new LinkUI(editor).destroy();
let view: View = new LinkUI(editor).formview;
view = new LinkUI(editor).actionsView;

new AutoLink(editor).init();
new AutoLink(editor).afterInit();

new LinkImage(editor);
LinkImage.requires.map(Plugin => new Plugin(editor).init());

new LinkEditing(editor).init();
LinkEditing.requires.map(Plugin => new Plugin(editor).init());

LinkImageUI.requires.map(Plugin => new Plugin(editor));
new LinkImageUI(editor).init();

new AutoLink(editor).init();
new AutoLink(editor).afterInit();

new LinkCommand(editor).execute('http://example.com');
new LinkCommand(editor).execute('http://example.com', { target: '_blank' });
// $ExpectError
new LinkCommand(editor).execute();

new UnlinkCommand(editor).execute();
// $ExpectError
new UnlinkCommand(editor).execute('');

utils.isLinkElement(new EmptyElement());
// $ExpectError
utils.isLinkElement('');

const api = {} as unknown as DowncastConversionApi;
utils
    .createLinkElement('', api)
    .getPath()
    .forEach(path => -path);

utils.ensureSafeUrl('').startsWith('');

utils.isImageAllowed(new Element(''), new Schema());

utils.isEmail('') === ''.startsWith('');

utils.addLinkProtocolIfApplicable('', '') === ''.startsWith('');
