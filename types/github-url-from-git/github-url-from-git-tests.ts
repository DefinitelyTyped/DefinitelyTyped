import * as parse from 'github-url-from-git';

parse('https://github.com/jamesor/mongoose-versioner'); // $ExpectType string
parse('git://github.internal.example.com/treygriffith/cellar.git', { extraBaseUrls: ['github.internal.example.com'] }); // $ExpectType string
parse.re(); // $ExpectType RegExp
parse.re({ extraBaseUrls: ['github.internal.example.com'] }); // $ExpectType RegExp
