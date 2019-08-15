
import * as cli from "cli";

// ========================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/cat.js
// ========================================================================

var output_file = function(file: string) {
    cli.withInput(file, function (line, sep, eof) {
        if (!eof) {
            cli.output(line + sep);
        } else if (cli.args.length) {
            output_file(cli.args.shift());
        }
    });
};

if (cli.args.length) {
    output_file(cli.args.shift());
}

// ============================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/command.js
// ============================================================================

cli.parse(null, ['install', 'test', 'edit', 'remove', 'uninstall', 'ls']);

console.log('Command is: ' + cli.command);


// ============================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/echo.js
// ============================================================================

cli.parse({
    newline:   ['n', 'Do not output the trailing newline'],
    escape:    ['e', 'Enable interpretation of backslash escapes'],
    separator: ['s', 'Separate arguments using this value', 'string', ' '],
    output:    [false, 'Write to FILE rather than the console', 'file']
});

cli.main(function (args, options) {
    var output = '', i: any, j: any, l: number, output_stream: NodeJS.WritableStream;

    if (this.argc) {
        if (options.escape) {
            var replace: any = {'\\n':'\n','\\r':'\r','\\t':'\t','\\e':'\e','\\v':'\v','\\f':'\f','\\c':'\c','\\b':'\b','\\a':'\a','\\\\':'\\'};
            var escape = function (str: string) {
                str += '';
                for (j in replace) {
                    str = str.replace(i, replace[i]);
                }
                return str;
            }
            var l: number = this.argc;
            for (i = 0; i < l; i++) {
                args[i] = escape(args[i]);
            }
            options.separator = escape(options.separator);
        }
        output += args.join(options.separator);
    }

    if (!options.newline) {
        output += '\n';
    }

    try {
        if (options.output) {
            output_stream = this.native.fs.createWriteStream(options.output)
        } else {
            output_stream = process.stdout;
        }
        output_stream.write(output);
    } catch (e) {
        this.fatal('Could not write to output stream');
    }
});


// =========================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/glob.js
// =========================================================================

cli.enable('glob');

//Running `./glob.js *.js` will output a list of .js files in this directory
console.log(cli.args);


// ==============================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/long_desc.js
// ==============================================================================

//You can (optionally) boost the width of output with:
// cli.width = 120;

//You can also adjust the width of the options/command definitions
// cli.option_width = 25;

var long_desc = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s '
              + 'standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make'
              + ' a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, '
              + 'remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing '
              + 'Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions'
              + ' of Lorem Ipsum.';

cli.parse({
    foo: ['f', long_desc]
});


// =============================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/progress.js
// =============================================================================

var i = 0, interval = setInterval(function () {
    cli.progress(++i / 100);
    if (i === 100) {
        clearInterval(interval);
        cli.ok('Finished!');
    }
}, 50);


// =========================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/sort.js
// =========================================================================

var options = cli.parse({
    numeric: ['n', 'Compare using a numeric sort'],
    reverse: ['r', 'Reverse the results']
});

cli.withStdinLines(function (lines, newline) {
    lines.sort(!options.numeric ? null : function (a, b) {
        return parseInt(a) - parseInt(b);
    });
    if (options.reverse) {
        lines.reverse();
    }
    this.output(lines.join(newline));
});


// ============================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/spinner.js
// ============================================================================

cli.spinner('Working..');

setTimeout(function () {
    cli.spinner('Working.. done!', true); //End the spinner
}, 3000);


// ===========================================================================
// Example: https://github.com/node-js-libs/cli/blob/master/examples/static.js
// ===========================================================================

cli.parse({
    log:   ['l', 'Enable logging'],
    port:  ['p', 'Listen on this port', 'number', 8080],
    serve: [false, 'Serve static files from PATH', 'path', './public']
});

cli.main(function (args, options) {
    var server: any, middleware: any = [];

    if (options.log) {
        this.debug('Enabling logging');
        middleware.push(require('creationix/log')());
    }

    this.debug('Serving files from ' + options.serve);
    middleware.push(require('creationix/static')('/', options.serve, 'index.html'));

    server = this.createServer(middleware).listen(options.port);

    this.ok('Listening on port ' + options.port);
});
