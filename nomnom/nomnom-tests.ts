// https://github.com/harthur/nomnom


import nomnom = require("nomnom");

var opts1 = nomnom
    .option('debug', {
        abbr: 'd',
        flag: true,
        help: 'Print debugging info'
    })
    .option('config', {
        abbr: 'c',
        default: 'config.json',
        help: 'JSON file with tests to run'
    })
    .option('version', {
        flag: true,
        help: 'print version and exit',
        callback: () => "version 1.2.4"
    })
    .parse();

if (opts1.debug) {
}

var opts2 = nomnom.parse();

var url = opts2[0];     // get the first positional arg
var file = opts2.file;  // see if --file was specified
var verbose = opts2.v;  // see if -v was specified
var extras = opts2._;   // get an array of the unmatched, positional args

var parser = nomnom;

function runBrowser(url: string): void {
}

function runSanity(filename: string): void {
}

parser.command('browser')
    .callback(opts => {
        runBrowser(opts.url);
    })
    .help("run browser tests");

parser.command('sanity')
    .option('outfile', {
        abbr: 'o',
        help: "file to write results to"
    })
    .option('config', {
        abbr: 'c',
        default: 'config.json',
        help: "json manifest of tests to run"
    })
    .callback(opts => {
        runSanity(opts.filename);
    })
    .help("run the sanity tests");

parser.parse();

var opts3 = nomnom
    .script("runtests")
    .options({
        path: {
            position: 0,
            help: "Test file to run",
            list: true
        },
        config: {
            abbr: 'c',
            metavar: 'FILE',
            help: "Config file with tests to run"
        },
        debug: {
            abbr: 'd',
            flag: true,
            help: "Print debugging info"
        }
    }).parse();

nomnom.option('debug', {
    abbr: 'd'
});

nomnom.option('numLines', {
    abbr: 'n',
    full: 'num-lines'
});

nomnom.option('config', {
    flag: true
});

nomnom.option('count', {
    callback: count => {
        if (count != parseInt(count))
            return "count must be an integer";
    }
});

nomnom.option('debug', {
    abbr: 'd',
    flag: true,
    help: "Print debugging info"
});

nomnom.options({
    debug: {
        abbr: 'd',
        flag: true,
        help: "Print debugging info"
    },
    fruit: {
        help: "Fruit to buy"
    }
});

var opts4 = nomnom.parse(["-xvf", "--atomic=true"]);