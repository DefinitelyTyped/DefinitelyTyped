import prompts = require("prompts");

const response = prompts({
    type: 'number',
    name: 'value',
    message: 'Input value to double:',
    validate: (value: any) => value < 0 ? `Cant be less than zero` : true
});
