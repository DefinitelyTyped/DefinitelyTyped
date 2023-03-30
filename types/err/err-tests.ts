import Err = require('err');

const e1 = new Err('e1: Some nasty stuff happened');
const e2 = new Err('e2: Some nasty stuff happened', 'NASTY_STUFF_HAPPENED');
const e3 = new Err('e3: Some nasty stuff happened', 'NASTY_STUFF_HAPPENED', {
    additional: 'data',
});
const e4 = new Err('e4: Some nasty stuff happened', {
    additional: 'data',
    code: 'NASTY_STUFF_HAPPENED',
});
const existingError = new Error('e5: Some nasty stuff happened');
const e5 = new Err(existingError, {
    additional: 'data',
    code: 'NASTY_STUFF_HAPPENED',
    and: 'some more data',
});
const e6 = new Err({
    message: 'e6: Something went really wrong!!!',
    additional: 'data',
    code: 'NASTY_STUFF_HAPPENED',
    and: 'some more data',
});
const e7 = new Err("e7: Invalid option '<option>'.", {
    option: 'test',
});
