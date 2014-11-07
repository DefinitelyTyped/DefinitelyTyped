// Tests for shelljs.d.ts
// Project: http://shelljs.org
// Definitions by: Niklas Mollenhauer <https://github.com/nikeee>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// Tests taken from documentation samples.

///<reference path="../node/node.d.ts" />
///<reference path="../shelljs/shelljs.d.ts" />

import shell = require("shelljs");

if (!shell.which("git"))
{
    shell.echo("Sorry, this script requires git");
    shell.exit(1);
}

// Copy files to release dir
shell.mkdir("-p", "out/Release");
shell.cp("-R", "stuff/*", "out/Release");

// Replace macros in each .js file
shell.cd("lib");
shell.ls("*.js").forEach( file => {
    shell.sed("-i", "BUILD_VERSION", "v0.1.2", file);
    shell.sed("-i", /.*REMOVE_THIS_LINE.*\n/, "", file);
    shell.sed("-i", /.*REPLACE_LINE_WITH_MACRO.*\n/, shell.cat("macro.js"), file);
});

shell.cd("..");

// Run external tool synchronously
if (shell.exec('git commit -am "Auto-commit"').code !== 0)
{
    shell.echo("Error: Git commit failed");
    shell.exit(1);
}

shell.ls("projs/*.js");
shell.ls("-R", "/users/me", "/tmp");
shell.ls("-R", ["/users/me", "/tmp"]); // same as above

shell.find("src", "lib");
shell.find(["src", "lib"]); // same as above
shell.find(".").filter((file, i, n) => !!file.match(/\.js$/));

shell.cp("file1", "dir1");
shell.cp("-Rf", ["/tmp/*", "/usr/local/*"], "/home/tmp"); // same as aboveshell.

shell.rm("-rf", "/tmp/*");
shell.rm("some_file.txt", "another_file.txt");
shell.rm(["some_file.txt", "another_file.txt"]); // same as above

shell.mv(["file1", "file2"], "dir/"); // same as above

shell.mkdir("-p", "/tmp/a/b/c/d", "/tmp/e/f/g");
shell.mkdir("-p", ["/tmp/a/b/c/d", "/tmp/e/f/g"]); // same as above

if (shell.test("-d", "/tmp/a/b/c/d")) { /* do something with dir */ }
if (!shell.test("-f", "/tmp/a/b/c/d")) { /* do something with dir */ }

var str = shell.cat("file*.txt");
str = shell.cat("file1", "file2");
str = shell.cat(["file1", "file2"]); // same as above

shell.sed("-i", "PROGRAM_VERSION", "v0.1.3", "source.js");
shell.sed(/.*DELETE_THIS_LINE.*\n/, "", "source.js");

shell.grep("-v", "GLOBAL_VARIABLE", "*.js");
shell.grep("GLOBAL_VARIABLE", "*.js");

var nodeExec = shell.which("node");

shell.pushd("/etc"); // Returns /etc /usr
shell.pushd("+1");   // Returns /usr /etc

shell.echo(process.cwd()); // '/usr'
shell.pushd("/etc");       // '/etc /usr'
shell.echo(process.cwd()); // '/etc'
shell.popd();              // '/usr'
shell.echo(process.cwd()); // '/usr'

shell.ln("file", "newlink");
shell.ln("-sf", "file", "existing");

var testPath = shell.env["path"];

var version = shell.exec("node --version").output;

shell.chmod(755, "/Users/brandon");
shell.chmod("755", "/Users/brandon"); // same as above
shell.chmod("u+x", "/Users/brandon");

shell.exit(0);

var tmp = shell.tempdir(); // "/tmp" for most *nix platforms

var errorlol = shell.error();

shell.config.fatal = true;
shell.config.silent = true;
