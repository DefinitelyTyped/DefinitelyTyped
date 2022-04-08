import { prettyPrint } from 'html';

prettyPrint('<h2><strong>Hello, <a href="http://example.com">World</a>!</strong></h2>'); // $ExpectType string
prettyPrint('<h2><strong>Hello, <a href="http://example.com">World</a>!</strong></h2>', {}); // $ExpectType string
prettyPrint('<h2><strong>Hello, <a href="http://example.com">World</a>!</strong></h2>', {
    brace_style: 'collapse',
    indent_scripts: 'keep',
    indent_size: 2,
    indent_char: ' ',
    max_char: 5,
    unformatted: [],
});
