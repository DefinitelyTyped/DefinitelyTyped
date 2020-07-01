import argv = require('argv');
argv.version( 'v1.0' );
argv.info( 'Special script info' );
argv.clear()
.option({
    name: 'option',
    short: 'o',
    type: 'string',
    description: 'Defines an option for your script',
    example: "'script --opiton=value' or 'script -o value'"
})
.run([ '--option=123', '-o', '123' ]);
argv.run();
argv.help();
