

// compile: tsc showdown/showdown-tests.ts --noImplicitAny --module commonjs
// run: node showdown/showdown-tests.js

import showdown = require('showdown');

var exampleMarkdown = '#hello, markdown',
    converter = new showdown.Converter();

var myExt: showdown.ShowdownExtension = { type: 'output', filter: (text, converter) => { return text.replace('#', '*') } };
showdown.extension('my-ext', myExt);

var preloadedExtensions = [ 'my-ext' ],
    extensionsConverter = new showdown.Converter({ extensions: preloadedExtensions });

var configuredConverter = new showdown.Converter();
    configuredConverter.addExtension({type: 'output', filter: (text, converter)=>{return text.replace('#', '*')}}, 'myext');

console.log(converter.makeHtml(exampleMarkdown));
// should log '<h1 id="hellomarkdown">hello, markdown</h1>'

console.log(extensionsConverter.makeHtml(exampleMarkdown));
// should log '<p>*hello, markdown</p>'

console.log(configuredConverter.makeHtml(exampleMarkdown));
// should log '<p>*hello, markdown</p>'


showdown.extension('myExt', function () {
  var matches: string[] = [];
  return [
    {
      type: 'lang',
      regex: /%start%([^]+?)%end%/gi,
      replace: function (s: string, match: string) {
        matches.push(match);
        var n = matches.length - 1;
        return '%PLACEHOLDER' + n + '%';
      }
    },
    {
      type: 'output',
      filter: function (text) {
        for (var i = 0; i < matches.length; ++i) {
          var pat = '<p>%PLACEHOLDER' + i + '% *<\/p>';
          text = text.replace(new RegExp(pat, 'gi'), matches[i]);
        }
        // reset array
        matches = [];
        return text;
      }
    }
  ]
});
