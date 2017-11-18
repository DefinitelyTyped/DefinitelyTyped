
import * as HTMLMinifier from 'html-minifier';
const minify = HTMLMinifier.minify;

var result = minify('<p title="blah" id="moo">foo</p>', {
  removeAttributeQuotes: true
});
result; // '<p title=blah id=moo>foo</p>'
