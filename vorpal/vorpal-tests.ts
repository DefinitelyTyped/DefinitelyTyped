///<reference path="vorpal.d.ts"/>

let vorpal = require('vorpal');

let app: VorpalInstance = vorpal();

app
    .parse(process.argv);
