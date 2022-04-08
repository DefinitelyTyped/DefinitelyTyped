import * as marked from 'marked';
import * as TerminalRenderer from 'marked-terminal';
import chalk from 'chalk';

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer()
});

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer({
    // Change style for code
    codespan: chalk.underline.magenta,
    // Can also override color/styling by own functions.
    firstHeading: (text: string) => `*** ${text}`
  })
});

marked.setOptions({
  // Define custom renderer
  renderer: new TerminalRenderer({
    reflowText: true,
    width: 60
  })
});

// Show the parsed data
console.log(marked('# a basic string\nwith stuff'));
