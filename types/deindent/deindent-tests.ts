import deindent = require('deindent');

// as a string function
deindent(`
    this
    is
  the ${'end'}
      my only
      friend
    the end
`);

// as a template tag
deindent`
    this
    is
  the ${'end'}
      my only
      friend
    the end
`;

// as a higher-order template tag
deindent(String.raw)`
    this
    is
  the ${'end'}
      my only
      friend
    the end
`;
