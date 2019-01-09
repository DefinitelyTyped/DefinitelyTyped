import stimmy = require('@rimiti/stimmy');

const replacer = stimmy();

// $ExpectType string
replacer('My name is {{name}} and I\'m {{age}}.', {name: 'rimiti', age: 25});
// $ExpectType string
replacer('Hello {0}, I\'m {1}.', ['rimiti', 25]);
