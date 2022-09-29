import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import Schema from '@ckeditor/ckeditor5-engine/src/model/schema';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import Document from '@ckeditor/ckeditor5-engine/src/view/document';
import { AutoLink, Link, LinkEditing, LinkImage, LinkImageUI, LinkUI } from '@ckeditor/ckeditor5-link';
import LinkCommand from '@ckeditor/ckeditor5-link/src/linkcommand';
import LinkActionsView from '@ckeditor/ckeditor5-link/src/ui/linkactionsview';
import LinkFormView from '@ckeditor/ckeditor5-link/src/ui/linkformview';
import UnlinkCommand from '@ckeditor/ckeditor5-link/src/unlinkcommand';
import * as utils from '@ckeditor/ckeditor5-link/src/utils';
import ManualDecorator from '@ckeditor/ckeditor5-link/src/utils/manualdecorator';
import { Locale } from '@ckeditor/ckeditor5-utils';

class MyEditor extends Editor {}
const editor = new MyEditor();

// $ExpectType LinkConfig | undefined
new MyEditor().config.get('link');
// $ExpectType boolean | undefined
new MyEditor().config.get('link.addTargetToExternalLinks');
// $ExpectType string | undefined
new MyEditor().config.get('link.defaultProtocol');
new MyEditor().config.get('link.decorators');

new Link(editor);
Link.requires.map(Plugin => new Plugin(editor).init());

LinkUI.requires.map(Plugin => new Plugin(editor));
new LinkUI(editor).init();
new LinkUI(editor).destroy();
// $ExpectType LinkFormView
new LinkUI(editor).formView;
// $ExpectType LinkActionsView
new LinkUI(editor).actionsView;

new AutoLink(editor).init();
new AutoLink(editor).afterInit();
AutoLink.requires.map(Plugin => new Plugin(editor));

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
// @ts-expect-error
new LinkCommand(editor).execute();

new UnlinkCommand(editor).execute();
// @ts-expect-error
new UnlinkCommand(editor).execute('');

const emptyElement = new DowncastWriter(new Document(new StylesProcessor())).createEmptyElement('div');
utils.isLinkElement(emptyElement);
// @ts-expect-error
utils.isLinkElement('');

const api = {} as unknown as DowncastConversionApi;
utils
    .createLinkElement('', api)
    .getPath()
    .forEach(path => -path);

utils.ensureSafeUrl('').startsWith('');

utils.isLinkableElement(new Writer().createElement('div'), new Schema());

utils.isEmail('') === ''.startsWith('');

utils.addLinkProtocolIfApplicable('', '') === ''.startsWith('');

new LinkActionsView().destroy();
new LinkFormView(new Locale(), new LinkCommand(editor)).destroy();

utils.openLink('');
// @ts-expect-error
utils.openLink();

new ManualDecorator({
    id: '',
    label: '',
    attributes: { foo: 'bar' },
});

new ManualDecorator({
    id: '',
    label: '',
    attributes: { foo: 'bar' },
    defaultValue: true,
    classes: 'foo',
    styles: { bg: 'red' },
});

new ManualDecorator({
    id: '',
    label: '',
    attributes: { foo: 'bar' },
    defaultValue: true,
    classes: 'foo',
    styles: { bg: 'red' },
}).on('foo', (ev, ...args) => {
    // $ExpectType EventInfo<ManualDecorator, "foo">
    ev;
    // $ExpectType any[]
    args;
});

new ManualDecorator({
    id: '',
    label: '',
    attributes: { foo: 'bar' },
    defaultValue: true,
    classes: 'foo',
    styles: { bg: 'red' },
}).set('foo');

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
