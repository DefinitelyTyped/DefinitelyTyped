import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import { AutoLink, Link, LinkEditing, LinkImage, LinkImageUI, LinkUI } from '@ckeditor/ckeditor5-link';
import LinkCommand from '@ckeditor/ckeditor5-link/src/linkcommand';
import UnlinkCommand from '@ckeditor/ckeditor5-link/src/unlinkcommand';
import * as utils from '@ckeditor/ckeditor5-link/src/utils';
import { View } from '@ckeditor/ckeditor5-ui';

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

const emptyElement = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('div');
utils.isLinkElement(emptyElement);
// $ExpectError
utils.isLinkElement('');

const api = {} as unknown as DowncastConversionApi;
utils
    .createLinkElement('', api)
    .getPath()
    .forEach(path => -path);

utils.ensureSafeUrl('').startsWith('');

utils.isImageAllowed(new Writer().createElement('div'), new Schema());

utils.isEmail('') === ''.startsWith('');

utils.addLinkProtocolIfApplicable('', '') === ''.startsWith('');

// $ExpectType AutoLink
editor.plugins.get('AutoLink');

// $ExpectType Link
editor.plugins.get('Link');

// $ExpectType LinkEditing
editor.plugins.get('LinkEditing');

// $ExpectType LinkImage
editor.plugins.get('LinkImage');

// $ExpectType LinkImageEditing
editor.plugins.get('LinkImageEditing');

// $ExpectType LinkImageUI
editor.plugins.get('LinkImageUI');

// $ExpectType LinkUI
editor.plugins.get('LinkUI');

// $ExpectType LinkCommand | undefined
editor.commands.get('LinkCommand');

// $ExpectType UnlinkCommand | undefined
editor.commands.get('UnlinkCommand');
