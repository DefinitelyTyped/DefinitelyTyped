import readlineSync = require('readline-sync');

const result: string = readlineSync.question('Which program starts do you want? ', {
  defaultInput: 'firefox'
});

const result2: string = readlineSync.prompt({prompt: '$$'});

const result3: string = readlineSync.keyIn('Press a key', { limit: '$<1-5>' });

const result4: {} = readlineSync.setDefaultOptions({
    prompt: '$$',
    hideEchoBack: true,
    mask: '*',
    limit: [ /^a|b$/, /[a-zA-Z]+/],
    limitMessage: 'Limit reached',
    defaultInput: 'English',
    trueValue: 2,
    falseValue: (value: string) => true,
    caseSensitive: true,
    keepWhitespace: true,
    encoding: 'utf-8',
    bufferSize: 12,
    print: (display: string, encoding: string) => { console.log(display); },
    history: false,
    cd: true,
    charlist: 'abc',
    min: 0,
    max: 10,
    confirmMessage: 'Yes',
    unmatchMessage: new Date(),
    exists: false,
    isFile: true,
    isDirectory: false,
    validate: (path: string) => path === '/usr/local/bin',
    create: true,
    guide: false,
});

const result5: string = readlineSync.questionEMail('Enter email');

const result6: string = readlineSync.questionNewPassword('PASSWORD: ', {charlist: '$<a-z>#$@%'});

const result7: number = readlineSync.questionInt('Enter an integer', { limitMessage: 'Enter a valid integer' });

const result8: number = readlineSync.questionFloat('Enter a float', { limitMessage: 'Enter a valid float' });

const result9: string = readlineSync.questionPath('Save to: ', {
  isDirectory: true,
  exists: null,
  create: true
});

readlineSync.promptCL((command: string, arg1: string, arg2: string) => {
  if (command === 'add') {
    console.log(arg1 + ' is added.');
  } else if (command === 'copy') {
    console.log(arg1 + ' is copied to ' + arg2 + '.');
  }
});

readlineSync.promptCL({
  add: (element: string) => { // It's called by also "ADD", "Add", "aDd", etc..
    console.log(element + ' is added.');
  },
  copy: (from: string, to: string) => {
    console.log(from + ' is copied to ' + to + '.');
  }
});

readlineSync.promptLoop((input: string) => {
  console.log('-- You said "' + input + '"');
  return input === 'bye';
});

readlineSync.promptCLLoop({
  add: (element: string) => {
    console.log(element + ' is added.');
  },
  copy: (from: string, to: string) => {
    console.log(from + ' is copied to ' + to + '.');
  },
  bye: () => true
});

const result10: string = readlineSync.promptSimShell();

const result11: (boolean | string) = readlineSync.keyInYN('Do you want to install this?');

const result12: boolean = readlineSync.keyInYNStrict('Do you want to install this?', { guide: true });

readlineSync.keyInPause({ guide: true });

const frameworks = ['Express', 'hapi', 'flatiron', 'MEAN.JS', 'locomotive'];
const result13: number = readlineSync.keyInSelect(frameworks, 'Which framework?');

const result14: string = readlineSync.getRawInput();

readlineSync.setPrint((display: string, encoding: string) => { console.log(display); });

readlineSync.setPrompt(new Date());

readlineSync.setEncoding('utf-16');

readlineSync.setMask('%');

readlineSync.setBufferSize(128);
