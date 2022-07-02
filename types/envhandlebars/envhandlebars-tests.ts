import envhandlebars = require('envhandlebars');
import { EnvHandlebarsCallback, ExtendHandlebarsFunc } from 'envhandlebars';

const extendHandlebars: ExtendHandlebarsFunc = Handlebars => {
    Handlebars.registerHelper('fullName', (first: string, last: string) => {
        return `${last}, ${first}`;
    });
};
const envHandlebarsCallback: EnvHandlebarsCallback = error => {
    console.log(error);
};

envhandlebars();

envhandlebars({
    arraysEnabled: true,
    arrayVarPrefix: true,
    env: process.env,
    exit: process.exit,
    stderr: process.stderr,
    stdin: process.stdin,
    stout: process.stdout,
    extendHandlebars,
});

envhandlebars(
    {
        extendHandlebars,
    },
    error => console.log(error),
);

envhandlebars(envHandlebarsCallback);
