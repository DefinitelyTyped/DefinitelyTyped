// Tests by: Kaur Kuut <https://github.com/xStrom>

// Every option as default
var defaultOptions = {
	namespace: 'featherlight',
	targetAttr: 'data-featherlight',
	variant: null as string,
	resetCss: false,
	background: null as string,
	openTrigger: 'click',
	closeTrigger: 'click',
	filter: null as string,
	root: 'body',
	openSpeed: 250,
	closeSpeed: 250,
	closeOnClick: 'background',
	closeOnEsc: true,
	closeIcon: '&#10005;',
	loading: '',
	persist: false,
	otherClose: null as string,
	beforeOpen: $.noop,
	beforeContent: $.noop,
	beforeClose: $.noop,
	afterOpen: $.noop,
	afterContent: $.noop,
	afterClose: $.noop,
	onKeyUp: $.noop,
	onResize: $.noop,
	type: null as string,
	contentFilters: ['jquery', 'image', 'html', 'ajax', 'iframe', 'text']
};

// Every option changed
var changedOptions = {
	namespace: 'foo',
	targetAttr: 'foo',
	variant: 'foo',
	resetCss: true,
	background: '<div/>',
	openTrigger: 'focus',
	closeTrigger: 'blur',
	filter: 'foo',
	root: 'foo',
	openSpeed: 'fast',
	closeSpeed: 'fast',
	closeOnClick: false,
	closeOnEsc: false,
	closeIcon: 'foo',
	loading: 'foo',
	persist: 'shared',
	otherClose: 'foo',
	beforeOpen: (e: JQueryEventObject) => false,
	beforeContent: (e: JQueryEventObject) => false,
	beforeClose: (e: JQueryEventObject) => false,
	afterOpen: (e: JQueryEventObject) => false,
	afterContent: (e: JQueryEventObject) => false,
	afterClose: (e: JQueryEventObject) => false,
	onKeyUp: (e: JQueryEventObject) => false,
	onResize: (e: JQueryEventObject) => false,
	type: 'text'
};

// Turn off auto bind
$.featherlight.autoBind = false;

// Change some defaults
$.featherlight.defaults.namespace = 'foo';
$.featherlight.defaults.openSpeed = 500;
$.featherlight.defaults.persist = true;
$.featherlight.defaults.text = 'foo';

// Do the simplest manual bind
$('#id').featherlight();

// Bind #id to open #fl
$('#id').featherlight('#fl');

// Bind #id to open #fl with persistance
$('#id').featherlight('#fl', {persist: true});

// Bind #id to open jQuery object
$('#id').featherlight($('<span>Foo!</span>'));

// Bind #id to open jQuery object with persistance
$('#id').featherlight($('<span>Foo!</span>'), {persist: true});

// Bind #id to open #fl with every option set to default
$('#id').featherlight('#fl', defaultOptions);

// Bind #id to open jQuery object with every option set to default
$('#id').featherlight($('<span>Foo!</span>'), defaultOptions);

// Bind #id to open #fl with every option changed
$('#id').featherlight('#fl', changedOptions);

// Bind #id to open jQuery object with every option changed
$('#id').featherlight($('<span>Foo!</span>'), changedOptions);

// Open the default
$.featherlight();
new $.featherlight;

// Open just text
$.featherlight({text: 'Foo!'}).open();
new $.featherlight({text: 'Foo!'}).open();

// Open #fl, and close it
$.featherlight('#fl').close();
new $.featherlight('#fl').close();

// Open #fl with persistance, and close it
$.featherlight('#fl', {persist: true}).close();
new $.featherlight('#fl', {persist: true}).close();

// Open jQuery object, and close it
$.featherlight($('<span>Foo!</span>')).close();
new $.featherlight($('<span>Foo!</span>')).close();

// Open jQuery object with persistance, and close it
$.featherlight($('<span>Foo!</span>'), {persist: true}).close();
new $.featherlight($('<span>Foo!</span>'), {persist: true}).close();

// Open #fl with every option set to default, and close it
$.featherlight('#fl', defaultOptions).close();
new $.featherlight('#fl', defaultOptions).close();

// Open jQuery object with every option set to default, and close it
$.featherlight($('<span>Foo!</span>'), defaultOptions).close();
new $.featherlight($('<span>Foo!</span>'), defaultOptions).close();

// Open #fl with every option changed, and close it
$.featherlight('#fl', changedOptions).close();
new $.featherlight('#fl', changedOptions).close();

// Open jQuery object with every option changed, and close it
$.featherlight($('<span>Foo!</span>'), changedOptions).close();
new $.featherlight($('<span>Foo!</span>'), changedOptions).close();

// Define a custom content filter
// Note: Unfortunately $.featherlight.contentFilters.feed = .. doesn't seem to work
$.featherlight.contentFilters['feed'] = {
	regex: /^feed:/,
	process: function(url: string) { return $('Loading...'); }
};

// Close the currently open fl
$.featherlight.close();

// Get all the opened fls and close the first
$.featherlight.opened()[0].close();

// Get the currently opened fl
var fl = $.featherlight.current();

// .. and close it
fl.close();

// .. and open it once more
fl.open();

// .. and edit its namespace
fl.namespace = 'foo';

// .. and add a special event handler
fl.afterClose = (e: JQueryEventObject) => false;
