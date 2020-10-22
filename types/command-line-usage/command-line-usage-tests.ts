import getUsage = require('command-line-usage');

let usage: string;
let sections: getUsage.Section[];
let optionDefinitions: getUsage.OptionDefinition[] = [];

// chalk-escaping.js
usage = getUsage([
    {
      header: 'A typical app',
      content: 'Generates something \\{very important\\}, also retaining `backticks`.'
    },
    {
      header: 'Options',
      optionList: [
        { name: 'files', typeLabel: '\\{something\\}', description: 'This is not \\{red red\\}.'}
      ]
    }
  ]);

// chalk-formatting.js
usage = getUsage([
    {
      header: 'A typical app',
      content: 'Generates something {italic.keyword("orange") very {rgb(255,231,0).bold important}}. This is a rather long, but {hex("#1ef").underline ultimately} inconsequential '
                + 'description intended {yellow.bgRed.bold solely {bgBlue to}} demonstrate description appearance. '
    },
    {
      header: 'Options',
      optionList: [
        { name: 'files', typeLabel: '{magenta {underline files}}', description: 'This is {red red}.'}
      ]
    },
    {
      content: 'Project home: {underline https://github.com/me/example}'
    }
  ]);

// command-list.js
sections = [
    {
      header: 'Example App',
      content: 'Generates something {italic very} important. This is a rather long, but ultimately inconsequential description intended solely to demonstrate description appearance. '
    },
    {
      header: 'Synopsis',
      content: '$ app <options> <command>'
    },
    {
      header: 'Command List',
      content: [
        { name: 'help', summary: 'Display help information about Git.' },
        { name: 'commit', summary: 'Record changes to the repository.' },
        { name: 'Version', summary: 'Print the version.' },
        { name: 'etc', summary: 'Etc.' }
      ]
    }
  ];
usage = getUsage(sections);

// description-columns.js
sections = [
    {
      header: 'Soviet Union',
      content: {
        options: {
          columns: [
            { name: 'one', maxWidth: 40 },
            { name: 'two', width: 40, noWrap: true }
          ]
        },
        data: [
          {
            one: "this was waaaay too long",
            two: null
          }
        ]
      }
    },
    {
      header: 'Synopsis',
      content: [
        '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
        '$ example {bold --help}'
      ]
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    }
  ];
getUsage(sections);

// examples.js
sections = [
    {
      header: 'A typical app',
      content: 'Generates something {italic very} important.'
    },
    {
      header: 'Synopsis',
      content: [
        '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
        '$ example {bold --help}'
      ]
    },
    {
      header: 'Options',
      optionList: optionDefinitions
    },
    {
      header: 'Examples',
      content: [
        {
          desc: '1. A concise example. ',
          example: '$ example -t 100 lib/*.js'
        },
        {
          desc: '2. A long example. ',
          example: '$ example --timeout 100 --src lib/*.js'
        },
        {
          desc: '3. This example will scan space for unknown things. Take cure when scanning space, it could take some time. ',
          example: '$ example --src galaxy1.facts galaxy1.facts galaxy2.facts galaxy3.facts galaxy4.facts galaxy5.facts'
        }
      ]
    },
    {
      content: 'Project home: {underline https://github.com/me/example}'
    }
  ];
getUsage(sections);

// footer.js
sections = [
  {
    header: 'A typical app',
    content: 'Generates something {italic very} important.'
  },
  {
    header: 'Synopsis',
    content: [
      '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
      '$ example {bold --help}'
    ]
  },
  {
    header: 'Options',
    optionList: optionDefinitions
  },
  {
    content: [
      '{italic This app was tested by dragons in Wales.}',
      '',
      null
    ],
    raw: true
  }
];
getUsage(sections);

// groups.js
optionDefinitions = [
    {
      name: 'help',
      description: 'Display this usage guide.',
      alias: 'h',
      type: Boolean,
      group: 'main'
    },
    {
      name: 'src',
      description: 'The input files to process',
      multiple: true,
      defaultOption: true,
      typeLabel: '{underline file} ...',
      group: 'input'
    },
    {
      name: 'timeout',
      description: 'Timeout value in ms',
      alias: 't',
      typeLabel: '{underline ms}',
      group: 'main'
    },
    {
      name: 'plugin',
      description: 'A plugin path',
      type: String
    }
  ];

sections = [
    {
      header: 'A typical app',
      content: 'Generates something {italic very} important.'
    },
    {
      header: 'Main options',
      optionList: optionDefinitions,
      group: [ 'main', 'input' ]
    },
    {
      header: 'Misc',
      optionList: optionDefinitions,
      group: '_none'
    }
  ];

getUsage(sections);

// header-only.js
sections = [
    {
      header: 'a header only'
    },
    {
      content: 'content only'
    }
  ];
getUsage(sections);

// header.js
sections = [
  {
    content: "",
    raw: true
  },
  {
    header: 'Synopsis',
    content: [
      '$ example [{bold --timeout} {underline ms}] {bold --src} {underline file} ...',
      '$ example {bold --help}'
    ]
  }
];
getUsage(sections);

// hide.js
usage = getUsage([
  {
    header: 'A typical app',
    content: 'Generates something {italic very} important. This is a rather long, but ultimately inconsequential description intended solely to demonstrate description appearance. '
  },
  {
    header: 'Options',
    optionList: optionDefinitions,
    hide: 'src'
  },
  {
    content: 'Project home: {underline https://github.com/me/example}'
  }
]);

// option-list-options.js
sections = [
  {
    header: 'A typical app',
    content: 'Generates something {italic very} important.'
  },
  {
    header: 'Options',
    optionList: optionDefinitions,
    tableOptions: {
      columns: [
        {
          name: 'option',
          noWrap: true,
          padding: { left: '🔥  ', right: '' },
          width: 30
        },
        {
          name: 'description',
          width: 50,
          padding: { left: '', right: '   🔥' }
        }
      ]
    }
  }
];
getUsage(sections);

// simple-reverse-name-order.js
usage = getUsage([
    {
      header: 'A typical app',
      content: 'Generates something {italic very} important. This is a rather long, but ultimately inconsequential description intended solely to demonstrate description appearance. '
    },
    {
      header: 'Options',
      optionList: optionDefinitions,
      reverseNameOrder: true
    },
    {
      content: 'Project home: {underline https://github.com/me/example}'
    }
  ]);

// simple-width.js
usage = getUsage([
    {
      header: 'A typical app',
      content: {
        options: { maxWidth: 40 },
        data: [
          { col: 'Generates something {italic very} important. This is a rather long, but ultimately inconsequential description intended solely to demonstrate description appearance. ' }
        ]
      }
    }
  ]);

// synopsis.js
sections = [
    {
      header: 'A typical app',
      content: 'Generates something {italic very} important.'
    },
    {
      header: 'Options',
      optionList: [
        {
          name: 'input',
          typeLabel: '{underline file}',
          description: 'The input to process.'
        },
        {
          name: 'help',
          description: 'Print this usage guide.'
        }
      ]
    }
  ];
usage = getUsage(sections);

// whitespace.js
/* When using default options, the whitespace before the bullets is trimmed */
sections = [
    {
      header: 'Example app',
      content: [
        'Generates something {italic very} important. This description is:',
        '',
        '  • rather long',
        '  • inconsequential',
        '  • demonstrative',
        '',
        'And the text continues underneath as this {cyan might} be required in cases where text is required underneath.'
      ]
    }
  ];
usage = getUsage(sections);
/* Solution 1: Use `raw` option and supply your own whitespace */
sections = [
  {
    header: 'Example app',
    content: [
      '  Generates something {italic very} important. This description is:',
      '  ',
      '    • rather long',
      '    • inconsequential',
      '    • demonstrative',
      '  ',
      '  And the text continues underneath as this {cyan might} be required in cases where',
      '  text is required underneath.'
    ],
    raw: true
  }
];
usage = getUsage(sections);

/* Section 2: use separate sections with the `noTrim` option on the bullets */
sections = [
  {
    header: 'Example app',
    content: [
      'Generates something {italic very} important. This description is:'
    ]
  },
  {
    content: {
      options: {
        noTrim: true
      },
      data: [
        { col: '  • rather long' },
        { col: '  • inconsequential' },
        { col: '  • demonstrative' }
      ]
    }
  },
  {
    content: [
      'And the text continues underneath as this {cyan might} be required in cases where text is required underneath.'
    ]
  }
];
usage = getUsage(sections);
