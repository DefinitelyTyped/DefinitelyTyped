import template from 'string-placeholder';

// $ExpectType string
template('${0} test', ['here']);

// $ExpectType string
template('${foo} test ${bar}', {foo: 'Bob', bar: '65'});

// $ExpectType string
template('${0} test', ['here'], { after: '[:' });

// $ExpectType string
template('${0} test', ['here'], { before: ']' });

// $ExpectType string
template('${0} test', ['here'], { escape: '\\' });

// $ExpectType string
template('${0} test', ['here'], { clean: true });
