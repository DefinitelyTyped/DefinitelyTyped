/// <reference path='src/exec.ts' />
/// <reference path='src/io.ts' />

var cfg = {
    root: '.',
    pattern: /.\-tests\.ts/g,
    tsc: 'node ./_infrastructure/tests/typescript_0.8.3/tsc.js ',
    exclude: {
        '.git': true,
        '.gitignore': true,
        'package.json': true,
        '_infrastructure': true,
        '.travis.yml': true,
        'LICENSE': true,
        'README.md': true,
        '_ReSharper.DefinitelyTyped': true,
        'obj': true,
        'bin': true,
        'Properties': true,
        'DefinitelyTyped.csproj': true,
        'DefinitelyTyped.csproj.user': true,
        'DefinitelyTyped.sln': true,
        'DefinitelyTyped.v11.suo': true
    }
};

if (process.argv.length > 2) {
    cfg.root = process.argv[2];
}

class TestFile {
    public name: string;
    public errors: string[] = [];
}

class Test {
    public files: TestFile[] = [];
    constructor(public lib: string) { }
}

class Tests {
    public tests: Test[] = [];
}

function getLibDirectory(file: string) {
    return file.substr(cfg.root.length).split('/')[1];
}

function getErrorList(out): string[] {
    var splitContentByNewlines = function (content: string) {
        var lines = content.split('\r\n');
        if (lines.length === 1) {
            lines = content.split('\n');
        }
        return lines;
    }

    var result: string[] = [];

    var lines = splitContentByNewlines(out);

    for (var i = 0; i < lines.length; i++) {
        if (lines[i]) {
            result.push(lines[i]);
        }
    }

    return result;
}

function runTests(testFiles) {
    var tests = new Tests();

    Exec.exec(
        cfg.tsc,
		[testFiles[testIndex]],
        (ExecResult) => {
            var lib = getLibDirectory(testFiles[testIndex]);

            cache_visited_libs[lib] = true;

            var testFile = new TestFile();
            testFile.name = testFiles[testIndex];
            testFile.errors = getErrorList(ExecResult.stderr);

            if (testFile.errors.length == 0) {
                total_success++;
            } else {
                total_failure++;
            }

            console.log('  [\033[36m' + lib + '\033[0m] ' + testFiles[testIndex].substr(cfg.root.length)
                + ' - ' + (testFile.errors.length == 0 ? '\033[32msuccess\033[0m' : '\033[31mfailure\033[0m'));

            var test = new Test(lib);
            test.files.push(testFile);
            tests.tests.push(test);

            testIndex++;
            if (testIndex < totalTest) {
                Exec.exec(
					cfg.tsc,
					[testFiles[testIndex]],
					<(ExecResult) => any>arguments.callee);
            } else {
                var withoutTests = {};
                for (var k = 0; k < allFiles.length; k++) {
                    var rootFolder = allFiles[k].substr(cfg.root.length).split('/')[1];
                    if (!(rootFolder in cfg.exclude)) {
                        if (!(rootFolder in cache_visited_libs)) {
                            withoutTests[rootFolder] = true;
                        }
                    }
                }

                var withoutTestsCount = 0;
                for (var attr in withoutTests) {

                    var test = new Test(attr);
                    tests.tests.push(test);

                    console.log('  [\033[36m' + attr + '\033[0m] without tests');
                    withoutTestsCount++;
                }

                console.log('\n> ' + (total_failure + total_success + withoutTestsCount)
                    + ' tests. '
                    + '\033[32m' + total_success + ' tests success\033[0m, '
                    + '\033[31m' + total_failure + ' tests failed\033[0m and '
                    + withoutTestsCount + ' definitions without tests.\n');

                if (total_failure > 0) {
                    process.exit(1);
                }
            }
        });
}

////// GLOBAL VARS

// get all files: "*-tests.ts"
var testFiles = IO.dir(cfg.root, cfg.pattern, { recursive: true, deep: 1 });

// get all proect files
var allFiles = IO.dir(cfg.root, null, { recursive: true });

var totalTest = testFiles.length;
var testIndex = 0;
var cache_visited_libs = {};

// total
var total_failure = 0;
var total_success = 0;

// var to have current typescript version
var tscVersion = '?.?.?';

////// END GLOBAL VARS

// entry point
Exec.exec(cfg.tsc, ['-version'], (ExecResult) => {
    tscVersion = ExecResult.stdout;

    console.log('$ tsc -version');
    console.log(tscVersion);

    runTests(testFiles);
});