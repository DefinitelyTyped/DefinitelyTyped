// Type definitions for gulp-nunit-runner 1.2
// Project: https://github.com/keithmorris/gulp-nunit-runner
// Definitions by: Spicy Pixel <https://spicypixel.com>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

declare namespace nunit {
    type NUnit = (options?: Options) => NodeJS.ReadWriteStream;

    interface ConsoleRunnerOptions {
        // [3.x] Name of the test case(s), fixture(s) or namespace(s) to run.
        test?: string[]; // ['TestSuite.Unit', 'TestSuite.Integration'],

        // [3.x] Name of a file containing a list of the tests to run, one per line.
        testist?: string; // 'TestsToRun.txt',

        // [2.x] Name of the test case(s), fixture(s) or namespace(s) to run.
        // NOTE: This has been superseded by the 'test' option above in 3.x.
        run?: string[]; // ['TestSuite.Unit', 'TestSuite.Integration'],

        // [2.x] Name of a file containing a list of the tests to run, one per line.
        // NOTE: This has been superseded by the 'testlist' option above in 3.x.
        runlist?: string; // 'TestsToRun.txt',

        // List of categories to include.
        include?: string[]; // ['BaseLine', 'Unit'],

        // List of categories to exclude.
        exclude?: string[]; // ['Database', 'Network'],

        // Project configuration (e.g.: Debug) to load.
        config?: string; // 'Debug',

        // Process model for tests.
        process?: string; // 'Single|Separate|Multiple',

        // AppDomain Usage for tests.
        domain?: string; // 'None|Single|Multiple',

        // Framework version to be used for tests.
        framework?: string; // 'net-1.1',

        // [3.x] Run tests in a 32-bit process on 64-bit systems.
        x86?: boolean; // true|false,

        // [3.x] Dispose each test runner after it has finished running its tests.
        "dispose-runners"?: boolean; // true|false,

        // Timeout for each test case in milliseconds.
        timeout?: number; // 1000,

        // [3.x] Random seed used to generate test cases.
        seed?: number; // 5150,

        // [3.x] Number of worker threads to be used in running tests.
        workers?: number; // 5,

        // Stop after the first test failure or error.
        stoponerror?: boolean; // true|false,

        // Wait for input before closing console window.
        wait?: boolean; // true|false,

        // [3.x] Pause before run to allow debugging.
        pause?: boolean; // true|false,

        // Work directory for output files.
        work?: string; // 'BuildArtifacts',

        // File to receive test output.
        output?: string; // 'TestOutput.txt',

        // File to receive test error output.
        err?: string; // 'TestErrors.txt',

        // Name of XML result file (Default: TestResult.xml)
        result?: string; // 'TestResult.xml',

        // [3.x] Save test info rather than running tests. Name of output file.
        explore?: string; // 'TestInfo.xml',

        // Suppress XML result output.
        noresult?: boolean; // true|false,

        // Label each test in stdOut.
        labels?: boolean; // true|false,

        // Set internal trace level.
        trace?: string; // 'Off|Error|Warning|Info|Verbose',

        // [3.x] Tells .NET to copy loaded assemblies to the shadowcopy directory.
        shadowcopy?: boolean; // true|false,

        // [2.x] Disable shadow copy when running in separate domain.
        // NOTE In 3.x, The console runner now disables shadow copy by
        // default. use new 'shadowcopy' option in 3.x to turn it on.
        noshadow?: boolean; // true|false,

        // [3.x] Turns on use of TeamCity service messages.
        teamcity?: boolean; // true|false,

        // [3.x] Suppress display of program information at start of run.
        noheader?: boolean; // true|false,

        // [3.x] Displays console output without color.
        nocolor?: boolean; // true|false,

        // [3.x] Display additional information as the test runs.
        verbose?: boolean; // true|false,

        // [2.x] Do not display the logo.
        nologo?: boolean; // true|false,

        // [2.x] Do not display progress.
        nodots?: boolean; // true|false,

        // [2.x] Apartment for running tests (Default is MTA).
        apartment?: string; // 'MTA|STA',

        // [2.x] Disable use of a separate thread for tests.
        nothread?: boolean; // true|false,

        // [2.x] Base path to be used when loading the assemblies.
        basepath?: string; // 'src',

        // [2.x] Additional directories to be probed when loading assemblies.
        privatebinpath?: string[]; // ['lib', 'bin'],

        // [2.x] Erase any leftover cache files and exit.
        cleanup?: boolean; // true|false
    }

    interface Options {
        // The NUnit bin folder or the full path of the console runner.
        // If not specified the NUnit bin folder must be in the `PATH`.
        executable?: string; // 'c:/Program Files/NUnit/bin'

        // [2.x] If the full path of the console runner is not specified this determines
        // what version of the console runner is used. Defaults to anycpu.
        // NOTE: This has been superseded by the 'x86' option below in 3.x.
        // http://www.nunit.org/index.php?p=nunit-console&r=2.6.3
        platform?: string; // 'anycpu|x86'

        // [2.x] Output TeamCity service messages.
        // NOTE: This has been superseded by the 'teamcity' option below in 3.x.
        // https://confluence.jetbrains.com/display/TCD8/Build+Script+Interaction+with+TeamCity
        teamcity?: boolean; // true|false

        // The options below map directly to the NUnit console runner. See here
        // for more info: http://www.nunit.org/index.php?p=consoleCommandLine&r=2.6.3
        options?: ConsoleRunnerOptions;
    }
}

declare var nunit: nunit.NUnit;
export = nunit;
