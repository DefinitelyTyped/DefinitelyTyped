/**
 * @param doc should be a string with the help message, written according to rules of the docopt language.
 */
export function docopt(doc: string, options?: DocoptOption): any;

export interface DocoptOption {
    /** is an optional argument vector. It defaults to the arguments passed to your program (process.argv[2..]). You can also supply it with an array of strings, as with process.argv. For example: ['--verbose', '-o', 'hai.txt'] */
    argv?: Array<string> | undefined;
    /** (default:true) specifies whether the parser should automatically print the help message (supplied as doc) in case -h or --help options are encountered. After showing the usage-message, the program will terminate. If you want to handle -h or --help options manually (the same as other options), set help=false. */
    help?: boolean | undefined;
    /** (default:null) is an optional argument that specifies the version of your program. If supplied, then, if the parser encounters --version option, it will print the supplied version and terminate. version could be any printable object, but most likely a string, e.g. '2.1.0rc1'. */
    version?: any;
    /** (default false) If set to true will disallow mixing options and positional argument. I.e. after first positional argument, all arguments will be interpreted as positional even if the look like options. This can be used for strict compatibility with POSIX, or if you want to dispatch your arguments to other programs. */
    options_first?: boolean | undefined;
    /** (default true) If set to false will cause docopt to throw exceptions instead of printing the error to console and terminating the application. This flag is mainly for testing purposes. */
    exit?: boolean | undefined;
}
