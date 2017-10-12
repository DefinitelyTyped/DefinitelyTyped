import * as toMarkdown from 'to-markdown';

// toMarkdown()
toMarkdown(`
<h1>Hello</h1>
`);

toMarkdown(`
<h1>Hello</h1>
`, { });

toMarkdown(`
<h1>Hello</h1>
`, {
  gfm: true
});

toMarkdown(`
<h1>Hello</h1>
`, {
  converters: [
    {
      filter: 'code',
      replacement(innerHTML) {
        return `\`${innerHTML}\``;
      }
    },
    {
      filter: ['em', 'i'],
      replacement(innerHTML) {
        return `*${innerHTML}*`;
      }
    },
    {
      filter(node) {
        return node.nodeName === 'SPAN'
               && /italic/i.test(node.style.fontStyle!);
      },
      replacement(innerHTML) {
        return `*${innerHTML}*`;
      }
    },
    {
      filter(node) {
        return node.nodeName === 'SPAN'
               && /italic/i.test(node.style.fontStyle!);
      },
      replacement(innerHTML, node) {
        return `${innerHTML}(node: \`${node.nodeName}\`)`;
      }
    }
  ]
});

// toMarkdown.isBlock()
toMarkdown.isBlock(document.querySelector('h1')!);  // true
toMarkdown.isBlock(document.querySelector('img')!); // false

// toMarkdown.isVoid()
toMarkdown.isVoid(document.querySelector('br')!);   // true
toMarkdown.isVoid(document.querySelector('body')!); // false

// toMarkdown.outer()
toMarkdown.outer(document.querySelector('a')!, '|');
