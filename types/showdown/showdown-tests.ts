

// compile: tsc showdown/showdown-tests.ts --noImplicitAny --module commonjs
// run: node showdown/showdown-tests.js

import showdown = require('showdown');

var exampleMarkdown = '#hello, markdown',
    exampleHTML = '<h1>hello, markdown</h1>',
    converter = new showdown.Converter();

var markdownToShowdownExt = {
  type: 'lang',
  regex: /markdown/g,
  replace: 'showdown'
};
var commaExt: showdown.FilterExtension = {type: 'output', filter: text => text.replace(',', '')};
var myExt: showdown.ShowdownExtension = { type: 'lang', filter: (text, converter) => { return text.replace('#', '*') } };
var someExtArray: showdown.ShowdownExtension[] = [markdownToShowdownExt, commaExt];
var listenToCodeBlocksExt = {
  type: 'listener',
  listeners: {
    "codeBlocks.before": (evtName: string) => {
      console.log(evtName);
    },
    "codeBlocks.after": (evtName: string, text: string) => {
      console.log(evtName);
      return text;
    }
  }
};
var combinedExt = {
  type: 'lang',
  regex: /\s+/g,
  replace: ' ',
  listeners: {'paragraphs.after': console.log}
};

showdown.extension('my-ext', myExt);
showdown.extension('listen-ext', listenToCodeBlocksExt);
showdown.extension('combinedExt', () => [combinedExt]);

var preloadedExtensions = [ 'my-ext' ],
    extensionsConverter = new showdown.Converter({ extensions: preloadedExtensions });

var preloadedMultipleExtensions = [ 
      'my-ext',
      {type: 'lang', filter: (text: string) => text.replace('h', 'H')}, 
      () => [markdownToShowdownExt],
      () => commaExt
    ],
    multipleExtensionsConverter = new showdown.Converter({ extensions: preloadedMultipleExtensions });

var configuredConverter = new showdown.Converter();
    configuredConverter.addExtension({type: 'output', filter(text: string){ return text.replace(' ', '_')} }, 'myext');

configuredConverter.addExtension([
  {type: 'lang', filter: (text, converter)=>{return text.replace('#', '*')}},
  {type: 'output', filter: (text, converter)=>{return text.replace('p', 'span')}}
], 'myext');

console.log(showdown.helper);

console.log(converter.makeHtml(exampleMarkdown));
// should log '<h1 id="hellomarkdown">hello, markdown</h1>'

console.log(extensionsConverter.makeHtml(exampleMarkdown));
// should log '<p>*hello, markdown</p>'

console.log(multipleExtensionsConverter.makeHtml(exampleMarkdown));
// should log '<p>*Hello showdown</p>'

console.log(configuredConverter.makeHtml(exampleMarkdown));
// should log '<span>*hello,_markdown</p>'


console.log(converter.makeMarkdown(exampleHTML));
// should log '#hello, markdown'

configuredConverter.useExtension('listen-ext');
configuredConverter.addExtension(commaExt);
configuredConverter.addExtension([combinedExt]);
configuredConverter.addExtension(() => markdownToShowdownExt);
configuredConverter.removeExtension(combinedExt);
configuredConverter.addExtension(() => [listenToCodeBlocksExt, combinedExt]);
configuredConverter.listen('unescapeSpecialChars.after', (evtName, text) => `"${ text }"`);

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

showdown.extension('myExt');
showdown.removeExtension('myExt');
showdown.extension('myExt', someExtArray);
showdown.resetExtensions()
showdown.extension('commaExt', () => commaExt)

showdown.validateExtension(markdownToShowdownExt);
showdown.validateExtension([markdownToShowdownExt, markdownToShowdownExt])

showdown.setOption('noHeaderId', true);
showdown.setOption('foo', 'bar');  // custom option

converter.setOption('tables', true);
converter.setOption('color', 'red'); // custom option

showdown.setFlavor('github');
console.log(showdown.getFlavor());
// should log 'github'

converter.setFlavor('ghost');
console.log(converter.getFlavor());
// should log 'ghost'

{
    // options
    // $ExpectType Converter
    new showdown.Converter({ellipsis: false});
}
