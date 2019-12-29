function test_enable() {
	ko.punches.enableAll();
}

function test_filters() {
	ko.filters.default([], 'Empty');
	ko.filters.default(null, 'Empty');
	ko.filters.default(0, 'Empty');
	ko.filters.default('  ', 'Empty');

	ko.filters.fit('abcdef0123456789', 10);
	ko.filters.fit('abcdef0123456789', 10, '_');
	ko.filters.fit('abcdef0123456789', 10, '_', 'left');
	ko.filters.fit('abcdef0123456789', 10, '_', 'middle');
	ko.filters.fit('abcdef0123456789', 10, '_', 'right');

	ko.filters.json({});
	ko.filters.json({}, null, 4);

	ko.filters.number('123456789');
	ko.filters.number(12345.6789);

	ko.filters.lowercase('TEST');
	ko.filters.uppercase('test');

	ko.filters.replace('1234abcd', '1234', '');
}