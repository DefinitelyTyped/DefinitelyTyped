import { Selection, parseHTML } from 'k6/html';

let selection: Selection;

// parseHTML
parseHTML(); // $ExpectError
parseHTML(5); // $ExpectError
selection = parseHTML('<html></html>');
parseHTML('<html></html>', 5); // $ExpectError
