import * as ansi from 'ansi-escape-sequences';

// $ExpectType string
ansi.style.red;
// $ExpectError
ansi.style.invalidStyle;

// $ExpectType string
ansi.styles('green');
// $ExpectType string
ansi.styles(['green', 'underline']);
// $ExpectError
ansi.styles('invalidStyle');
// $ExpectError
ansi.styles(['invalidStyle']);

// $ExpectType string
ansi.format('what?', 'green');
// $ExpectType string
ansi.format('what?', ['green', 'bold']);
// $ExpectType string
ansi.format('[green bold]{what?}');
// $ExpectError
ansi.styles('what?', 'invalidStyle');
// $ExpectError
ansi.styles('what?', ['invalidStyle']);

// $ExpectType string
ansi.cursor.up();
// $ExpectType string
ansi.cursor.up(1);

// $ExpectType string
ansi.cursor.hide;
// $ExpectType string
ansi.cursor.show;

// $ExpectType string
ansi.erase.display();
// $ExpectType string
ansi.erase.display(3);
// $ExpectError
ansi.erase.display(4);

// $ExpectType string
ansi.erase.inLine();
// $ExpectType string
ansi.erase.inLine(2);
// $ExpectError
ansi.erase.inLine(3);
