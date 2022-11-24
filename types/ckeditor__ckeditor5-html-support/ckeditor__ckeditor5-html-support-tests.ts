import { Editor } from '@ckeditor/ckeditor5-core';
import { DowncastWriter, StylesProcessor } from '@ckeditor/ckeditor5-engine';
import { DowncastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/downcastdispatcher';
import UpcastDispatcher, { UpcastConversionApi } from '@ckeditor/ckeditor5-engine/src/conversion/upcastdispatcher';
import Element from '@ckeditor/ckeditor5-engine/src/model/element';
import Position from '@ckeditor/ckeditor5-engine/src/model/position';
import Range from '@ckeditor/ckeditor5-engine/src/model/range';
import Writer from '@ckeditor/ckeditor5-engine/src/model/writer';
import ViewDocument from '@ckeditor/ckeditor5-engine/src/view/document';
import { DataFilter, DataSchema, GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import * as conversionUtils from '@ckeditor/ckeditor5-html-support/src/conversionutils';
import * as converters from '@ckeditor/ckeditor5-html-support/src/converters';
import HtmlComment from '@ckeditor/ckeditor5-html-support/src/htmlcomment';
import CodeBlockHtmlSupport from '@ckeditor/ckeditor5-html-support/src/integrations/codeblock';
import ScriptElementSupport from '@ckeditor/ckeditor5-html-support/src/integrations/script';
import StyleElementSupport from "@ckeditor/ckeditor5-html-support/src/integrations/style";
import TableElementSupport from '@ckeditor/ckeditor5-html-support/src/integrations/table';
import schemas from '@ckeditor/ckeditor5-html-support/src/schemadefinitions';

class MyEditor extends Editor {}
const editor = new MyEditor();

const modelElement = new Writer().createElement('');
const viewDocument = new ViewDocument(new StylesProcessor());
const downcastWriter = new DowncastWriter(viewDocument);
const downcastConversionApi = null as unknown as DowncastConversionApi;
const upcastConversionApi = null as unknown as UpcastConversionApi;
const viewElement = downcastWriter.createEmptyElement('');

new GeneralHtmlSupport(editor).init();
GeneralHtmlSupport.requires.forEach(Plugin => new Plugin(editor));

const dataFilter = new DataFilter(editor);
dataFilter.loadAllowedConfig(['', /.*/, { attributes: { src: '' } }, () => ({ name: true })]);
dataFilter.allowAttributes({ attributes: { src: 'foo' } });
dataFilter.disallowAttributes({ name: 'img', attributes: { src: 'foo' } });
dataFilter.loadDisallowedConfig(['', /.*/, { attributes: { src: '' } }, () => ({ name: true })]);
DataFilter.requires.forEach(Plugin => new Plugin(editor).init());
dataFilter.allowElement(/^(pre|code)$/);
dataFilter.allowAttributes({ name: /^(pre|code)$/, attributes: { 'data-foo': /[\s\S]+/ } });
dataFilter.disallowAttributes({ name: /^(pre|code)$/, attributes: { 'data-foo': /[\s\S]+/ } });

const dataSchema = new DataSchema(editor);
new DataSchema(editor).registerBlockElement({ model: '', isBlock: true, isObject: true });
new DataSchema(editor).registerInlineElement({ model: '', isInline: true, isObject: true });
new DataSchema(editor).getDefinitionsForView('', true).has({ model: '', isBlock: true });
dataSchema.registerInlineElement({ model: 'htmlDef', view: 'def' });
const result = dataSchema.getDefinitionsForView('def');
result.forEach(value => ('isInline' in value ? value.isInline : value.isBlock));
dataSchema.registerInlineElement({
    model: 'htmlDef',
    view: 'def',
    attributeProperties: {
        copyOnEnter: true,
    },
});
dataSchema.registerBlockElement({
    view: 'def1',
    model: 'htmlDef1',
    modelSchema: {
        inheritAllFrom: '$block',
        allowChildren: ['htmlDef2', 'htmlDef3'],
    },
});

converters.createObjectView('', modelElement, downcastWriter) === viewElement;
converters.toObjectWidgetConverter(editor, { model: '', isInline: true, attributeProperties: { isFormatting: true } })(
    modelElement,
    downcastConversionApi,
);
converters.viewToModelObjectConverter({ model: '', isObject: true })(viewElement, upcastConversionApi);
converters.attributeToViewInlineConverter({ model: '', isInline: true })('', downcastConversionApi);
converters.viewToModelBlockAttributeConverter(
    { model: '', isBlock: true },
    new DataFilter(editor),
)(new UpcastDispatcher());

conversionUtils.setViewAttributes(downcastWriter, { foo: 'bar' }, viewElement);
conversionUtils.mergeViewElementAttributes({ foo: 'bar' }, { bar: 'foo' }).bar === '';

new CodeBlockHtmlSupport(editor).init();
CodeBlockHtmlSupport.requires.forEach(Plugin => new Plugin(editor));

new TableElementSupport(editor).init();
TableElementSupport.requires.forEach(Plugin => new Plugin(editor));

new ScriptElementSupport(editor).init();
ScriptElementSupport.requires.forEach(Plugin => new Plugin(editor));

new StyleElementSupport(editor).init();
StyleElementSupport.requires.forEach(Plugin => new Plugin(editor));

schemas.block.concat([]);
schemas.inline.concat([]).lastIndexOf(schemas.inline[0]) === 0;

// $ExpectType CodeBlockHtmlSupport
editor.plugins.get('CodeBlockHtmlSupport');

// $ExpectType DataFilter
editor.plugins.get('DataFilter');

// $ExpectType DataSchema
editor.plugins.get('DataSchema');

// $ExpectType GeneralHtmlSupport
editor.plugins.get('GeneralHtmlSupport');

// $ExpectType TableElementSupport
editor.plugins.get('TableElementSupport');

// $ExpectType ScriptElementSupport
editor.plugins.get('ScriptElementSupport');

// $ExpectType StyleElementSupport
editor.plugins.get('StyleElementSupport');

const position = new Position(new Element('div'), [4]);
// $ExpectType boolean
new HtmlComment(editor).removeHtmlComment('');
// $ExpectType string[]
new HtmlComment(editor).getHtmlCommentsInRange(new Range(position));
// $ExpectType string
new HtmlComment(editor).createHtmlComment(position, '');
// $ExpectType HtmlCommentData | null
new HtmlComment(editor).getHtmlCommentData('');
