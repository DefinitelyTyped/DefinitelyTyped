import typer = require('media-typer');

const obj = typer.parse('image/svg+xml');
// $ExpectType MediaType
obj;
// $ExpectType string
obj.type;
// $ExpectType string
obj.subtype;
// $ExpectType string | undefined
obj.suffix;

// $ExpectType string
typer.format({ type: 'image', subtype: 'svg', suffix: 'xml' });
typer.format({ type: 'image', subtype: 'svg' });

// $ExpectType boolean
const valid = typer.test('image/svg+xml');
