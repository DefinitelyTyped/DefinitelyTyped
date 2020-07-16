import GithubSlugger = require('github-slugger');

const slugger = new GithubSlugger();
const slug = GithubSlugger.slug;

slugger.slug('foo'); // $ExpectType string
// returns 'foo'

slugger.slug('foo'); // $ExpectType string
// returns 'foo-1'

slugger.slug('bar'); // $ExpectType string
// returns 'bar'

slugger.slug('foo'); // $ExpectType string
// returns 'foo-2'

slugger.reset(); // $ExpectType void

slugger.slug('foo'); // $ExpectType string
// returns 'foo'
slug('foo bar baz'); // $ExpectType string
// returns 'foo-bar-baz'

slug('foo bar baz'); // $ExpectType string
// returns the same slug 'foo-bar-baz' because it does not keep track
