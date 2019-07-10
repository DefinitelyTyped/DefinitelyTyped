import figlet = require('figlet');

figlet('abc', (err, str) => {
  // $ExpectType Error | null
  err;
  // $ExpectType string | undefined
  str;
});
figlet('My World', '1Row', (err, str) => {
  // $ExpectType Error | null
  err;
  // $ExpectType string | undefined
  str;
});
// $ExpectError
figlet('fweGWEPewfe', 'What is the font? I cannot get it');
// $ExpectError
figlet('qweoqw');
// $ExpectError
figlet('qweoqw', '1Row');
// $ExpectError
figlet('qweoqw', '1Row', undefined as any, undefined as any);

figlet.text('tokiyo tomare', (err, str) => {
  // $ExpectType Error | null
  err;
  // $ExpectType string | undefined
  str;
});
figlet.text('Hi', 'Flower Power', (err, str) => {
  // $ExpectType Error | null
  err;
  // $ExpectType string | undefined
  str;
});
figlet.text('Annyeong', {
  font: 'Fun Face',
  horizontalLayout: 'full',
  verticalLayout: 'fitted',
}, (err, str) => {
  // $ExpectType Error | null
  err;
  // $ExpectType string | undefined
  str;
});
figlet.text('Oreehe', {
  font: 'Fun Face',
  // $ExpectError
  value: 'abc',
}, undefined as any);
// $ExpectError
figlet.text('It cannot make sense');

// $ExpectType string
figlet.textSync('test text');
// $ExpectType string
figlet.textSync('text desu', 'Fuzzy');
// $ExpectType string
figlet.textSync('oho', {
  font: 'Invita',
});
// $ExpectError
figlet.textSync();

figlet.metadata('JS Block Letters', (err, fontOptions, headerComment) => {
  // $ExpectType Error | null
  err;
  // $ExpectType FontOptions | undefined
  fontOptions;
  // $ExpectType string | undefined
  headerComment;
});
// $ExpectError
figlet.metadata('This is random font name which cannot make sense', undefined as any);
// $ExpectError
figlet.metadata('Alligator', undefined as any, undefined as any);

// $ExpectType Defaults
figlet.defaults();
// $ExpectType Defaults
figlet.defaults({});
// $ExpectType Defaults
figlet.defaults({
  font: 'Patorjk\'s Cheese'
});

figlet.fonts((err, fonts) => {
  // $ExpectType Error | null
  err;
  // $ExpectType Fonts[] | undefined
  fonts;
});

// $ExpectType Fonts[]
figlet.fontsSync();
