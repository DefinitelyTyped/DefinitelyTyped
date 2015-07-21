// Type definitions for commanderjs 2.3.0
// Project: https://github.com/visionmedia/commander.js
// Definitions by: Marcelo Dezem <http://github.com/mdezem>, vvakame <http://github.com/vvakame>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference path="../node/node.d.ts" />

declare module commander {
    interface ICommandStatic {
        /**
         * Initialize a new `Command`.
         *
         * @param {String} name
         * @api public
         */
        new (name?:string):ICommand;
    }

    interface ICommand extends NodeJS.EventEmitter {
        args: string[];
        _args: { required:boolean; name: string; }[];

        /**
         * Add command `name`.
         *
         * The `.action()` callback is invoked when the
         * command `name` is specified via __ARGV__,
         * and the remaining arguments are applied to the
         * function for access.
         *
         * When the `name` is "*" an un-matched command
         * will be passed as the first arg, followed by
         * the rest of __ARGV__ remaining.
         *
         * Examples:
         *
         *      program
         *        .version('0.0.1')
         *        .option('-C, --chdir <path>', 'change the working directory')
         *        .option('-c, --config <path>', 'set config path. defaults to ./deploy.conf')
         *        .option('-T, --no-tests', 'ignore test hook')
         *
         *      program
         *        .command('setup')
         *        .description('run remote setup commands')
         *        .action(function(){
         *          console.log('setup');
         *        });
         *
         *      program
         *        .command('exec <cmd>')
         *        .description('run the given remote command')
         *        .action(function(cmd){
         *          console.log('exec "%s"', cmd);
         *        });
         *
         *      program
         *        .command('*')
         *        .description('deploy the given env')
         *        .action(function(env){
         *          console.log('deploying "%s"', env);
         *        });
         *
         *      program.parse(process.argv);
         *
         * @param {String} name
         * @param {String} [desc]
         * @return {Command} the new command
         * @api public
         */
        command(name:string, desc?:string):ICommand;

        /**
         * Add an implicit `help [cmd]` subcommand
         * which invokes `--help` for the given command.
         *
         * @api private
         */
        addImplicitHelpCommand():void;

        /**
         * Parse expected `args`.
         *
         * For example `["[type]"]` becomes `[{ required: false, name: 'type' }]`.
         *
         * @param {Array} args
         * @return {Command} for chaining
         * @api public
         */
        parseExpectedArgs(args:string[]):ICommand;

        /**
         * Register callback `fn` for the command.
         *
         * Examples:
         *
         *      program
         *        .command('help')
         *        .description('display verbose help')
         *        .action(function(){
         *           // output help here
         *        });
         *
         * @param {Function} fn
         * @return {Command} for chaining
         * @api public
         */
        action(fn:(...args:any[])=>void):ICommand;

        /**
         * Define option with `flags`, `description` and optional
         * coercion `fn`.
         *
         * The `flags` string should contain both the short and long flags,
         * separated by comma, a pipe or space. The following are all valid
         * all will output this way when `--help` is used.
         *
         *    "-p, --pepper"
         *    "-p|--pepper"
         *    "-p --pepper"
         *
         * Examples:
         *
         *     // simple boolean defaulting to false
         *     program.option('-p, --pepper', 'add pepper');
         *
         *     --pepper
         *     program.pepper
         *     // => Boolean
         *
         *     // simple boolean defaulting to true
         *     program.option('-C, --no-cheese', 'remove cheese');
         *
         *     program.cheese
         *     // => true
         *
         *     --no-cheese
         *     program.cheese
         *     // => false
         *
         *     // required argument
         *     program.option('-C, --chdir <path>', 'change the working directory');
         *
         *     --chdir /tmp
         *     program.chdir
         *     // => "/tmp"
         *
         *     // optional argument
         *     program.option('-c, --cheese [type]', 'add cheese [marble]');
         *
         * @param {String} flags
         * @param {String} description
         * @param {Function|Mixed} fn or default
         * @param {Mixed} defaultValue
         * @return {Command} for chaining
         * @api public
         */
        option(flags:string, description?:string, fn?:(arg1:any, arg2:any)=>void, defaultValue?:any):ICommand;
        option(flags:string, description?:string, defaultValue?:any):ICommand;

        /**
         * Parse `argv`, settings options and invoking commands when defined.
         *
         * @param {Array} argv
         * @return {Command} for chaining
         * @api public
         */
        parse(argv:string[]):ICommand;

        /**
         * Execute a sub-command executable.
         *
         * @param {Array} argv
         * @param {Array} args
         * @param {Array} unknown
         * @api private
         */
        executeSubCommand(argv:string[], args:string[], unknown:string[]):any; /* child_process.ChildProcess */

        /**
         * Normalize `args`, splitting joined short flags. For example
         * the arg "-abc" is equivalent to "-a -b -c".
         * This also normalizes equal sign and splits "--abc=def" into "--abc def".
         *
         * @param {Array} args
         * @return {Array}
         * @api private
         */
        normalize(args:string[]):string[];

        /**
         * Parse command `args`.
         *
         * When listener(s) are available those
         * callbacks are invoked, otherwise the "*"
         * event is emitted and those actions are invoked.
         *
         * @param {Array} args
         * @return {Command} for chaining
         * @api private
         */
        parseArgs(args:string[], unknown:string[]):ICommand;

        /**
         * Return an option matching `arg` if any.
         *
         * @param {String} arg
         * @return {Option}
         * @api private
         */
        optionFor(arg:string):IOption;

        /**
         * Parse options from `argv` returning `argv`
         * void of these options.
         *
         * @param {Array} argv
         * @return {Array}
         * @api public
         */
        parseOptions(argv:string[]): {args:string[]; unknown:string[];};

        /**
         * Return an object containing options as key-value pairs
         *
         * @return {Object}
         * @api public
         */
        opts():any;

        /**
         * Argument `name` is missing.
         *
         * @param {String} name
         * @api private
         */
        missingArgument(name:string):void;

        /**
         * `Option` is missing an argument, but received `flag` or nothing.
         *
         * @param {String} option
         * @param {String} flag
         * @api private
         */
        optionMissingArgument(option:{flags:string;}, flag?:string):void;

        /**
         * Unknown option `flag`.
         *
         * @param {String} flag
         * @api private
         */
        unknownOption(flag:string):void;

        /**
         * Set the program version to `str`.
         *
         * This method auto-registers the "-V, --version" flag
         * which will print the version number when passed.
         *
         * @param {String} str
         * @param {String} flags
         * @return {Command} for chaining
         * @api public
         */
        version(str:string, flags?:string):ICommand;

        /**
         * Set the description to `str`.
         *
         * @param {String} str
         * @return {String|Command}
         * @api public
         */
        description(str:string):ICommand;
        description():string;

        /**
         * Set an alias for the command
         *
         * @param {String} alias
         * @return {String|Command}
         * @api public
         */
        alias(alias:string):ICommand;
        alias():string;

        /**
         * Set / get the command usage `str`.
         *
         * @param {String} str
         * @return {String|Command}
         * @api public
         */
        usage(str:string):ICommand;
        usage():string;

        /**
         * Get the name of the command
         *
         * @param {String} name
         * @return {String|Command}
         * @api public
         */
        name():string;

        /**
         * Return the largest option length.
         *
         * @return {Number}
         * @api private
         */
        largestOptionLength():number;

        /**
         * Return help for options.
         *
         * @return {String}
         * @api private
         */
        optionHelp():string;

        /**
         * Return command help documentation.
         *
         * @return {String}
         * @api private
         */
        commandHelp():string;

        /**
         * Return program help documentation.
         *
         * @return {String}
         * @api private
         */
        helpInformation():string;

        /**
         * Output help information for this command
         *
         * @api public
         */
        outputHelp():void;

        /**
         * Output help information and exit.
         *
         * @api public
         */
        help():void;
    }

    interface IOptionStatic {
        /**
         * Initialize a new `Option` with the given `flags` and `description`.
         *
         * @param {String} flags
         * @param {String} description
         * @api public
         */
        new (flags:string, description?:string):IOption;
    }

    interface IOption {
        flags:string;
        required:boolean;
        optional:boolean;
        bool:boolean;
        short?:string;
        long:string;
        description:string;

        /**
         * Return option name.
         *
         * @return {String}
         * @api private
         */
        name():string;

        /**
         * Check if `arg` matches the short or long flag.
         *
         * @param {String} arg
         * @return {Boolean}
         * @api private
         */
        is(arg:string):boolean;
    }

    interface IExportedCommand extends ICommand {
        Command: commander.ICommandStatic;
        Option: commander.IOptionStatic;
    }
}

declare module "commander" {
    var _tmp:commander.IExportedCommand;
    export = _tmp;
}
