import { dispatch, select } from '@wordpress/data';
import * as RT from '@wordpress/rich-text';

const VALUE: RT.Value = {
    formats: [],
    replacements: [],
    text: '',
};

const FORMAT: RT.Format = {
    type: 'foo',
};

//
// applyFormat
//
RT.applyFormat(VALUE, FORMAT);
RT.applyFormat(VALUE, FORMAT, 10);
RT.applyFormat(VALUE, FORMAT, 10, 20);

//
// concat
//
RT.concat();
RT.concat(VALUE);
RT.concat(VALUE, VALUE);
RT.concat(VALUE, VALUE, VALUE);

//
// create
//
RT.create();
RT.create({ text: 'Hello World!' });
RT.create({ html: '<p>Hello World!<p>' });
RT.create({ element: document.createElement('div') });
RT.create({
    element: document.createElement('div'),
    multilineTag: 'p',
    multilineWrapperTags: ['div', 'p'],
    range: new Range(),
});

//
// getActiveFormat
//
RT.getActiveFormat(VALUE, 'foo');

//
// getActiveObject
//
RT.getActiveObject(VALUE);

//
// getTextContent
//
RT.getTextContent(VALUE);

//
// insert
//
RT.insert(VALUE, VALUE);
RT.insert(VALUE, VALUE, 10);
RT.insert(VALUE, VALUE, 10, 20);

//
// insertObject
//
RT.insertObject(VALUE, FORMAT);

//
// isCollapsed
//
RT.isCollapsed(VALUE);

//
// isEmpty
//
RT.isEmpty(VALUE);

//
// join
//
RT.join([VALUE, VALUE]);
RT.join([], VALUE);
RT.join([], 'foo');
RT.join([VALUE], 'foo');

//
// registerFormatType
//
RT.registerFormatType('foo', {
    tagName: 'span',
    className: 'foo',
    title: 'Foo',
    edit: () => <span>Hello World</span>,
});
RT.registerFormatType('foo', {
    tagName: 'span',
    className: null,
    title: 'Foo',
    keywords: ['foo', 'bar', 'baz'],
    object: false,
    attributes: {
        className: 'class',
        myFoo: 'data-my-foo',
    },
    edit(props) {
        return <span data-is-active={props.isActive}>{props.value}</span>;
    },
});

//
// remove
//
RT.remove(VALUE);
RT.remove(VALUE, 10);
RT.remove(VALUE, 10, 20);

//
// removeFormat
//
RT.removeFormat(VALUE, 'foo');
RT.removeFormat(VALUE, 'foo', 10);

//
// replace
//
RT.replace(VALUE, 'foo', 'bar');
RT.replace(VALUE, /foo/, 'bar');
RT.replace(VALUE, 'foo', match => `${match}bar`);
RT.replace(VALUE, /foo/, match => `${match}bar`);
RT.replace(VALUE, 'foo', (match, a, b) => `${match} ${a} ${b}`);

//
// slice
//
RT.slice(VALUE);
RT.slice(VALUE, 10);
RT.slice(VALUE, 10, 20);

//
// split
//
RT.split(VALUE);
RT.split(VALUE, 'foo');
RT.split(VALUE, 5);
RT.split(VALUE, 'foo', 10);
RT.split(VALUE, 5, 10);
RT.split(VALUE, undefined, 5);

//
// toHTMLString
//
RT.toHTMLString({ value: VALUE });
RT.toHTMLString({ value: VALUE, multilineTag: 'p' });

//
// toggleFormat
//
RT.toggleFormat(VALUE, FORMAT);

//
// unregisterFormatType
//
RT.unregisterFormatType('foo');

//
// store
//
dispatch('core/rich-text').addFormatTypes({
    className: null,
    edit: () => null,
    name: 'my/foo',
    tagName: 'a',
    title: 'foo',
});
dispatch('core/rich-text').removeFormatTypes('my/foo');
dispatch('core/rich-text').removeFormatTypes(['my/foo', 'my/bar']);

// $ExpectType NamedFormatConfiguration[]
select('core/rich-text').getFormatTypes();

// $ExpectType NamedFormatConfiguration | undefined
select('core/rich-text').getFormatTypeForBareElement('a');
