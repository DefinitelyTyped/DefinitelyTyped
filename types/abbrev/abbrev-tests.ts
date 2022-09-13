import abbrev = require('abbrev');

let abbrs: { [abbreviation: string]: string; };
abbrs = abbrev();
abbrs = abbrev('foo', 'fool', 'folding', 'flop');
abbrs = abbrev(['foo', 'fool', 'folding', 'flop']);
abbrev({ toString: () => 'hello' }); // $ExpectType { [abbreviation: string]: string; }
abbrev({}); // $ExpectType { [abbreviation: string]: string; }
abbrev([{}, 'foo']); // $ExpectType { [abbreviation: string]: string; }

abbrev.monkeyPatch();

abbrs = [].abbrev();
const roArr: ReadonlyArray<string> = [];
abbrs = roArr.abbrev();
abbrs = ({}).abbrev();
