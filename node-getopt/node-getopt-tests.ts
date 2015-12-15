/// <reference path="../node/node.d.ts" />
/// <reference path="node-getopt.d.ts" />

import Getopt = require('node-getopt');

function help() {
    // examples/help.js
    // Works with help

    var getopt = new Getopt([
        ['s' , ''                    , 'short option.'],
        [''  , 'long'                , 'long option.'],
        ['S' , 'short-with-arg=ARG'  , 'option with argument'],
        ['L' , 'long-with-arg=ARG'   , 'long option with argument'],
        [''  , 'color[=COLOR]'       , 'COLOR is optional'],
        ['m' , 'multi-with-arg=ARG+' , 'multiple option with argument'],
        [''  , 'no-comment'],
        ['h' , 'help'                , 'display this help']
    ]);

    // Use custom help template instead of default help
    // [[OPTIONS]] is the placeholder for options list
    getopt.setHelp(
        "Usage: node help.js [OPTION]\n" +
        "node-getopt help demo.\n" +
        "\n" +
        "[[OPTIONS]]\n" +
        "\n" +
        "Installation: npm install node-getopt\n" +
        "Respository:  https://github.com/jiangmiao/node-getopt"
    );

    getopt.showHelp();
}

function onedragon() {
    // examples/onedragon.js
    var opt = require('node-getopt').create([
        ['s' , ''                    , 'short option.'],
        [''  , 'long'                , 'long option.'],
        ['S' , 'short-with-arg=ARG'  , 'option with argument'],
        ['L' , 'long-with-arg=ARG'   , 'long option with argument'],
        [''  , 'color[=COLOR]'       , 'COLOR is optional'],
        ['m' , 'multi-with-arg=ARG+' , 'multiple option with argument'],
        [''  , 'no-comment'],
        ['h' , 'help'                , 'display this help']
    ])
    .bindHelp()
    .parseSystem();

    console.info(opt);
}

function online(){
    // node-getopt oneline example.
    var opt = require('..').create([
        ['s' , ''                    , 'short option.'],
        [''  , 'long'                , 'long option.'],
        ['S' , 'short-with-arg=ARG'  , 'option with argument'],
        ['L' , 'long-with-arg=ARG'   , 'long option with argument'],
        [''  , 'color[=COLOR]'       , 'COLOR is optional'],
        ['m' , 'multi-with-arg=ARG+' , 'multiple option with argument'],
        [''  , 'no-comment'],
        ['h' , 'help'                , 'display this help'],
        ['v' , 'version'             , 'show version']
    ])              // create Getopt instance
    .bindHelp()     // bind option 'help' to default action
    .parseSystem(); // parse command line

    console.info(opt);
}

function simple() {
    // examples/simple.js
    // argv parse
    // Getopt = require('node-getopt');

    // Getopt arguments options
    //   '=':   has argument
    //   '[=]': has argument but optional
    //   '+':   multiple option supported
    var getopt = new Getopt([
        ['s'],
        ['S' , '='],
        [''  , 'long-with-arg=ARG'],
        ['m' , '=+'],
        [''  , 'color[=COLOR]'],
        ['h' , 'help']
    ]).bindHelp();

    // process.argv needs slice(2) for it starts with 'node' and 'script name'
    // parseSystem is alias  of parse(process.argv.slice(2))
    // opt = getopt.parseSystem();
    var opt = getopt.parse(process.argv.slice(2));
    console.info(opt);

}
