/// <reference types="node" />

declare namespace nunit {
    type NUnit = (options?: Options) => NodeJS.ReadWriteStream;

    interface ConsoleRunnerOptions {
        // [3.x] Name of the test case(s), fixture(s) or namespace(s) to run.
        test?: string[] | undefined; // ['TestSuite.Unit', 'TestSuite.Integration'],

        // [3.x] Name of a file containing a list of the tests to run, one per line.
        testist?: string | undefined; // 'TestsToRun.txt',

        // [2.x] Name of the test case(s), fixture(s) or namespace(s) to run.
        // NOTE: This has been superseded by the 'test' option above in 3.x.
        run?: string[] | undefined; // ['TestSuite.Unit', 'TestSuite.Integration'],

        // [2.x] Name of a file containing a list of the tests to run, one per line.
        // NOTE: This has been superseded by the 'testlist' option above in 3.x.
        runlist?: string | undefined; // 'TestsToRun.txt',

        // List of categories to include.
        include?: string[] | undefined; // ['BaseLine', 'Unit'],

        // List of categories to exclude.
        exclude?: string[] | undefined; // ['Database', 'Network'],

        // Project configuration (e.g.: Debug) to load.
        config?: string | undefined; // 'Debug',

        // Process model for tests.
        process?: string | undefined; // 'Single|Separate|Multiple',

        // AppDomain Usage for tests.
        domain?: string | undefined; // 'None|Single|Multiple',

        // Framework version to be used for tests.
        framework?: string | undefined; // 'net-1.1',

        // [3.x] Run tests in a 32-bit process on 64-bit systems.
        x86?: boolean | undefined; // true|false,

        // [3.x] Dispose each test runner after it has finished running its tests.
        "dispose-runners"?: boolean | undefined; // true|false,

        // Timeout for each test case in milliseconds.
        timeout?: number | undefined; // 1000,

        // [3.x] Random seed used to generate test cases.
        seed?: number | undefined; // 5150,

        // [3.x] Number of worker threads to be used in running tests.
        workers?: number | undefined; // 5,

        // Stop after the first test failure or error.
        stoponerror?: boolean | undefined; // true|false,

        // Wait for input before closing console window.
        wait?: boolean | undefined; // true|false,

        // [3.x] Pause before run to allow debugging.
        pause?: boolean | undefined; // true|false,

        // Work directory for output files.
        work?: string | undefined; // 'BuildArtifacts',

        // File to receive test output.
        output?: string | undefined; // 'TestOutput.txt',

        // File to receive test error output.
        err?: string | undefined; // 'TestErrors.txt',

        // Name of XML result file (Default: TestResult.xml)
        result?: string | undefined; // 'TestResult.xml',

        // [3.x] Save test info rather than running tests. Name of output file.
        explore?: string | undefined; // 'TestInfo.xml',

        // Suppress XML result output.
        noresult?: boolean | undefined; // true|false,

        // Label each test in stdOut.
        labels?: boolean | undefined; // true|false,

        // Set internal trace level.
        trace?: string | undefined; // 'Off|Error|Warning|Info|Verbose',

        // [3.x] Tells .NET to copy loaded assemblies to the shadowcopy directory.
        shadowcopy?: boolean | undefined; // true|false,

        // [2.x] Disable shadow copy when running in separate domain.
        // NOTE In 3.x, The console runner now disables shadow copy by
        // default. use new 'shadowcopy' option in 3.x to turn it on.
        noshadow?: boolean | undefined; // true|false,

        // [3.x] Turns on use of TeamCity service messages.
        teamcity?: boolean | undefined; // true|false,

        // [3.x] Suppress display of program information at start of run.
        noheader?: boolean | undefined; // true|false,

        // [3.x] Displays console output without color.
        nocolor?: boolean | undefined; // true|false,

        // [3.x] Display additional information as the test runs.
        verbose?: boolean | undefined; // true|false,

        // [2.x] Do not display the logo.
        nologo?: boolean | undefined; // true|false,

        // [2.x] Do not display progress.
        nodots?: boolean | undefined; // true|false,

        // [2.x] Apartment for running tests (Default is MTA).
        apartment?: string | undefined; // 'MTA|STA',

        // [2.x] Disable use of a separate thread for tests.
        nothread?: boolean | undefined; // true|false,

        // [2.x] Base path to be used when loading the assemblies.
        basepath?: string | undefined; // 'src',

        // [2.x] Additional directories to be probed when loading assemblies.
        privatebinpath?: string[] | undefined; // ['lib', 'bin'],

        // [2.x] Erase any leftover cache files and exit.
        cleanup?: boolean | undefined; // true|false
    }

    interface Options {
        // The NUnit bin folder or the full path of the console runner.
        // If not specified the NUnit bin folder must be in the `PATH`.
        executable?: string | undefined; // 'c:/Program Files/NUnit/bin'

        // [2.x] If the full path of the console runner is not specified this determines
        // what version of the console runner is used. Defaults to anycpu.
        // NOTE: This has been superseded by the 'x86' option below in 3.x.
        // http://www.nunit.org/index.php?p=nunit-console&r=2.6.3
        platform?: string | undefined; // 'anycpu|x86'

        // [2.x] Output TeamCity service messages.
        // NOTE: This has been superseded by the 'teamcity' option below in 3.x.
        // https://confluence.jetbrains.com/display/TCD8/Build+Script+Interaction+with+TeamCity
        teamcity?: boolean | undefined; // true|false

        // The options below map directly to the NUnit console runner. See here
        // for more info: http://www.nunit.org/index.php?p=consoleCommandLine&r=2.6.3
        options?: ConsoleRunnerOptions | undefined;
    }
}

declare var nunit: nunit.NUnit;
export = nunit;
