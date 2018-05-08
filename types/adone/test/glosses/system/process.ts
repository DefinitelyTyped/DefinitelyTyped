namespace adoneTests.system.process {
    const {
        system: {
            process
        }
    } = adone;

    let str: string;
    let num: number;
    let bool: boolean;
    let anyArr: any[];

    str = process.errname(1);

    str = process.errnameFallback({}, 1);

    anyArr = process.stdio({});

    namespace exec {
        process.exec("node");
        process.exec("node", ["1.js"]);
        process.exec("node", ["1.js"], {});
        process.exec("node", ["1.js"], {
            cwd: "hello"
        });
        process.exec("node", ["1.js"], {
            env: {
                a: "a"
            }
        });
        process.exec("node", ["1.js"], {
            extendEnv: true
        });
        process.exec("node", ["1.js"], {
            argv0: "a"
        });
        {
            process.exec("node", ["1.js"], {
                stdio: "pipe"
            });
            process.exec("node", ["1.js"], {
                stdio: "ignore"
            });
            process.exec("node", ["1.js"], {
                stdio: "inherit"
            });
            process.exec("node", ["1.js"], {
                stdio: ["pipe"]
            });
            process.exec("node", ["1.js"], {
                stdio: ["ipc"]
            });
            process.exec("node", ["1.js"], {
                stdio: ["ignore"]
            });
            process.exec("node", ["1.js"], {
                stdio: [new adone.std.stream.Stream()]
            });
            process.exec("node", ["1.js"], {
                stdio: [0]
            });
            process.exec("node", ["1.js"], {
                stdio: [null]
            });
            process.exec("node", ["1.js"], {
                stdio: [undefined]
            });
        }
        process.exec("node", ["1.js"], {
            detached: true
        });
        process.exec("node", ["1.js"], {
            uid: 1000
        });
        process.exec("node", ["1.js"], {
            gid: 1000
        });
        process.exec("node", ["1.js"], {
            shell: true
        });
        process.exec("node", ["1.js"], {
            windowsVerbatimArguments: true
        });
        process.exec("node", ["1.js"], {
            stripEof: true
        });
        process.exec("node", ["1.js"], {
            preferLocal: true
        });
        process.exec("node", ["1.js"], {
            localDir: "a"
        });
        process.exec("node", ["1.js"], {
            reject: false
        });
        process.exec("node", ["1.js"], {
            cleanup: true
        });
        process.exec("node", ["1.js"], {
            encoding: "utf8"
        });
        process.exec("node", ["1.js"], {
            timeout: 100
        });
        process.exec("node", ["1.js"], {
            maxBuffer: 1010101
        });
        process.exec("node", ["1.js"], {
            killSignal: "SIGINT"
        });
        {
            process.exec("node", ["1.js"], {
                stdin: "pipe"
            });
            process.exec("node", ["1.js"], {
                stdin: "ignore"
            });
            process.exec("node", ["1.js"], {
                stdin: "ipc"
            });
            process.exec("node", ["1.js"], {
                stdin: "ignore"
            });
            process.exec("node", ["1.js"], {
                stdin: new adone.std.stream.Stream()
            });
            process.exec("node", ["1.js"], {
                stdin: 0
            });
            process.exec("node", ["1.js"], {
                stdin: null
            });
            process.exec("node", ["1.js"], {
                stdin: undefined
            });
        }
        {
            process.exec("node", ["1.js"], {
                stdout: "pipe"
            });
            process.exec("node", ["1.js"], {
                stdout: "ignore"
            });
            process.exec("node", ["1.js"], {
                stdout: "ipc"
            });
            process.exec("node", ["1.js"], {
                stdout: "ignore"
            });
            process.exec("node", ["1.js"], {
                stdout: new adone.std.stream.Stream()
            });
            process.exec("node", ["1.js"], {
                stdout: 0
            });
            process.exec("node", ["1.js"], {
                stdout: null
            });
            process.exec("node", ["1.js"], {
                stdout: undefined
            });
        }
        {
            process.exec("node", ["1.js"], {
                stderr: "pipe"
            });
            process.exec("node", ["1.js"], {
                stderr: "ignore"
            });
            process.exec("node", ["1.js"], {
                stderr: "ipc"
            });
            process.exec("node", ["1.js"], {
                stderr: "ignore"
            });
            process.exec("node", ["1.js"], {
                stderr: new adone.std.stream.Stream()
            });
            process.exec("node", ["1.js"], {
                stderr: 0
            });
            process.exec("node", ["1.js"], {
                stderr: null
            });
            process.exec("node", ["1.js"], {
                stderr: undefined
            });
        }
        {
            process.exec("node", ["1.js"], {
                input: "a"
            });
            process.exec("node", ["1.js"], {
                input: Buffer.from("a")
            });
            process.exec("node", ["1.js"], {
                input: adone.fs.createReadStream(__filename)
            });
        }
        {
            const ret = process.exec("node", ["1.js"]);
            ret.then((x) => {
                str = x.cmd;
                num = x.code;
                bool = x.killed;
                if (!adone.is.null(x.signal)) {
                    str = x.signal;
                }
                str = x.stderr;
                str = x.stdout;
                bool = x.timedOut;
            });
            ret.catch((x) => {
                str = x.cmd;
                num = x.code;
                bool = x.killed;
                if (!adone.is.null(x.signal)) {
                    str = x.signal;
                }
                str = x.stderr;
                str = x.stdout;
                bool = x.timedOut;
            });

            ret.on("message", () => {});
            ret.stdout.pipe(adone.fs.createWriteStream(__filename));
        }
    }

    namespace execStdout {
        process.execStdout("node");
        process.execStdout("node", ["1.js"]);
        process.execStdout("node", ["1.js"], {});
        process.execStdout("node", ["1.js"], {
            cwd: "hello"
        });
        process.execStdout("node", ["1.js"], {
            env: {
                a: "a"
            }
        });
        process.execStdout("node", ["1.js"], {
            extendEnv: true
        });
        process.execStdout("node", ["1.js"], {
            argv0: "a"
        });
        {
            process.execStdout("node", ["1.js"], {
                stdio: "pipe"
            });
            process.execStdout("node", ["1.js"], {
                stdio: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stdio: "inherit"
            });
            process.execStdout("node", ["1.js"], {
                stdio: ["pipe"]
            });
            process.execStdout("node", ["1.js"], {
                stdio: ["ipc"]
            });
            process.execStdout("node", ["1.js"], {
                stdio: ["ignore"]
            });
            process.execStdout("node", ["1.js"], {
                stdio: [new adone.std.stream.Stream()]
            });
            process.execStdout("node", ["1.js"], {
                stdio: [0]
            });
            process.execStdout("node", ["1.js"], {
                stdio: [null]
            });
            process.execStdout("node", ["1.js"], {
                stdio: [undefined]
            });
        }
        process.execStdout("node", ["1.js"], {
            detached: true
        });
        process.execStdout("node", ["1.js"], {
            uid: 1000
        });
        process.execStdout("node", ["1.js"], {
            gid: 1000
        });
        process.execStdout("node", ["1.js"], {
            shell: true
        });
        process.execStdout("node", ["1.js"], {
            windowsVerbatimArguments: true
        });
        process.execStdout("node", ["1.js"], {
            stripEof: true
        });
        process.execStdout("node", ["1.js"], {
            preferLocal: true
        });
        process.execStdout("node", ["1.js"], {
            localDir: "a"
        });
        process.execStdout("node", ["1.js"], {
            reject: false
        });
        process.execStdout("node", ["1.js"], {
            cleanup: true
        });
        process.execStdout("node", ["1.js"], {
            encoding: "utf8"
        });
        process.execStdout("node", ["1.js"], {
            timeout: 100
        });
        process.execStdout("node", ["1.js"], {
            maxBuffer: 1010101
        });
        process.execStdout("node", ["1.js"], {
            killSignal: "SIGINT"
        });
        {
            process.execStdout("node", ["1.js"], {
                stdin: "pipe"
            });
            process.execStdout("node", ["1.js"], {
                stdin: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stdin: "ipc"
            });
            process.execStdout("node", ["1.js"], {
                stdin: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stdin: new adone.std.stream.Stream()
            });
            process.execStdout("node", ["1.js"], {
                stdin: 0
            });
            process.execStdout("node", ["1.js"], {
                stdin: null
            });
            process.execStdout("node", ["1.js"], {
                stdin: undefined
            });
        }
        {
            process.execStdout("node", ["1.js"], {
                stdout: "pipe"
            });
            process.execStdout("node", ["1.js"], {
                stdout: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stdout: "ipc"
            });
            process.execStdout("node", ["1.js"], {
                stdout: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stdout: new adone.std.stream.Stream()
            });
            process.execStdout("node", ["1.js"], {
                stdout: 0
            });
            process.execStdout("node", ["1.js"], {
                stdout: null
            });
            process.execStdout("node", ["1.js"], {
                stdout: undefined
            });
        }
        {
            process.execStdout("node", ["1.js"], {
                stderr: "pipe"
            });
            process.execStdout("node", ["1.js"], {
                stderr: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stderr: "ipc"
            });
            process.execStdout("node", ["1.js"], {
                stderr: "ignore"
            });
            process.execStdout("node", ["1.js"], {
                stderr: new adone.std.stream.Stream()
            });
            process.execStdout("node", ["1.js"], {
                stderr: 0
            });
            process.execStdout("node", ["1.js"], {
                stderr: null
            });
            process.execStdout("node", ["1.js"], {
                stderr: undefined
            });
        }
        {
            process.execStdout("node", ["1.js"], {
                input: "a"
            });
            process.execStdout("node", ["1.js"], {
                input: Buffer.from("a")
            });
            process.execStdout("node", ["1.js"], {
                input: adone.fs.createReadStream(__filename)
            });
        }
        {
            const ret = process.execStdout("node", ["1.js"]);
            ret.then((x) => {
                str = x;
            });
        }
    }

    namespace execStderr {
        process.execStderr("node");
        process.execStderr("node", ["1.js"]);
        process.execStderr("node", ["1.js"], {});
        process.execStderr("node", ["1.js"], {
            cwd: "hello"
        });
        process.execStderr("node", ["1.js"], {
            env: {
                a: "a"
            }
        });
        process.execStderr("node", ["1.js"], {
            extendEnv: true
        });
        process.execStderr("node", ["1.js"], {
            argv0: "a"
        });
        {
            process.execStderr("node", ["1.js"], {
                stdio: "pipe"
            });
            process.execStderr("node", ["1.js"], {
                stdio: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stdio: "inherit"
            });
            process.execStderr("node", ["1.js"], {
                stdio: ["pipe"]
            });
            process.execStderr("node", ["1.js"], {
                stdio: ["ipc"]
            });
            process.execStderr("node", ["1.js"], {
                stdio: ["ignore"]
            });
            process.execStderr("node", ["1.js"], {
                stdio: [new adone.std.stream.Stream()]
            });
            process.execStderr("node", ["1.js"], {
                stdio: [0]
            });
            process.execStderr("node", ["1.js"], {
                stdio: [null]
            });
            process.execStderr("node", ["1.js"], {
                stdio: [undefined]
            });
        }
        process.execStderr("node", ["1.js"], {
            detached: true
        });
        process.execStderr("node", ["1.js"], {
            uid: 1000
        });
        process.execStderr("node", ["1.js"], {
            gid: 1000
        });
        process.execStderr("node", ["1.js"], {
            shell: true
        });
        process.execStderr("node", ["1.js"], {
            windowsVerbatimArguments: true
        });
        process.execStderr("node", ["1.js"], {
            stripEof: true
        });
        process.execStderr("node", ["1.js"], {
            preferLocal: true
        });
        process.execStderr("node", ["1.js"], {
            localDir: "a"
        });
        process.execStderr("node", ["1.js"], {
            reject: false
        });
        process.execStderr("node", ["1.js"], {
            cleanup: true
        });
        process.execStderr("node", ["1.js"], {
            encoding: "utf8"
        });
        process.execStderr("node", ["1.js"], {
            timeout: 100
        });
        process.execStderr("node", ["1.js"], {
            maxBuffer: 1010101
        });
        process.execStderr("node", ["1.js"], {
            killSignal: "SIGINT"
        });
        {
            process.execStderr("node", ["1.js"], {
                stdin: "pipe"
            });
            process.execStderr("node", ["1.js"], {
                stdin: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stdin: "ipc"
            });
            process.execStderr("node", ["1.js"], {
                stdin: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stdin: new adone.std.stream.Stream()
            });
            process.execStderr("node", ["1.js"], {
                stdin: 0
            });
            process.execStderr("node", ["1.js"], {
                stdin: null
            });
            process.execStderr("node", ["1.js"], {
                stdin: undefined
            });
        }
        {
            process.execStderr("node", ["1.js"], {
                stdout: "pipe"
            });
            process.execStderr("node", ["1.js"], {
                stdout: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stdout: "ipc"
            });
            process.execStderr("node", ["1.js"], {
                stdout: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stdout: new adone.std.stream.Stream()
            });
            process.execStderr("node", ["1.js"], {
                stdout: 0
            });
            process.execStderr("node", ["1.js"], {
                stdout: null
            });
            process.execStderr("node", ["1.js"], {
                stdout: undefined
            });
        }
        {
            process.execStderr("node", ["1.js"], {
                stderr: "pipe"
            });
            process.execStderr("node", ["1.js"], {
                stderr: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stderr: "ipc"
            });
            process.execStderr("node", ["1.js"], {
                stderr: "ignore"
            });
            process.execStderr("node", ["1.js"], {
                stderr: new adone.std.stream.Stream()
            });
            process.execStderr("node", ["1.js"], {
                stderr: 0
            });
            process.execStderr("node", ["1.js"], {
                stderr: null
            });
            process.execStderr("node", ["1.js"], {
                stderr: undefined
            });
        }
        {
            process.execStderr("node", ["1.js"], {
                input: "a"
            });
            process.execStderr("node", ["1.js"], {
                input: Buffer.from("a")
            });
            process.execStderr("node", ["1.js"], {
                input: adone.fs.createReadStream(__filename)
            });
        }
        {
            const ret = process.execStderr("node", ["1.js"]);
            ret.then((x) => {
                str = x;
            });
        }
    }

    namespace shell {
        process.shell("node 1.js");
        process.shell("node 1.js", {});
        process.shell("node 1.js", {
            cwd: "hello"
        });
        process.shell("node 1.js", {
            env: {
                a: "a"
            }
        });
        process.shell("node 1.js", {
            extendEnv: true
        });
        process.shell("node 1.js", {
            argv0: "a"
        });
        {
            process.shell("node 1.js", {
                stdio: "pipe"
            });
            process.shell("node 1.js", {
                stdio: "ignore"
            });
            process.shell("node 1.js", {
                stdio: "inherit"
            });
            process.shell("node 1.js", {
                stdio: ["pipe"]
            });
            process.shell("node 1.js", {
                stdio: ["ipc"]
            });
            process.shell("node 1.js", {
                stdio: ["ignore"]
            });
            process.shell("node 1.js", {
                stdio: [new adone.std.stream.Stream()]
            });
            process.shell("node 1.js", {
                stdio: [0]
            });
            process.shell("node 1.js", {
                stdio: [null]
            });
            process.shell("node 1.js", {
                stdio: [undefined]
            });
        }
        process.shell("node 1.js", {
            detached: true
        });
        process.shell("node 1.js", {
            uid: 1000
        });
        process.shell("node 1.js", {
            gid: 1000
        });
        process.shell("node 1.js", {
            shell: true
        });
        process.shell("node 1.js", {
            windowsVerbatimArguments: true
        });
        process.shell("node 1.js", {
            stripEof: true
        });
        process.shell("node 1.js", {
            preferLocal: true
        });
        process.shell("node 1.js", {
            localDir: "a"
        });
        process.shell("node 1.js", {
            reject: false
        });
        process.shell("node 1.js", {
            cleanup: true
        });
        process.shell("node 1.js", {
            encoding: "utf8"
        });
        process.shell("node 1.js", {
            timeout: 100
        });
        process.shell("node 1.js", {
            maxBuffer: 1010101
        });
        process.shell("node 1.js", {
            killSignal: "SIGINT"
        });
        {
            process.shell("node 1.js", {
                stdin: "pipe"
            });
            process.shell("node 1.js", {
                stdin: "ignore"
            });
            process.shell("node 1.js", {
                stdin: "ipc"
            });
            process.shell("node 1.js", {
                stdin: "ignore"
            });
            process.shell("node 1.js", {
                stdin: new adone.std.stream.Stream()
            });
            process.shell("node 1.js", {
                stdin: 0
            });
            process.shell("node 1.js", {
                stdin: null
            });
            process.shell("node 1.js", {
                stdin: undefined
            });
        }
        {
            process.shell("node 1.js", {
                stdout: "pipe"
            });
            process.shell("node 1.js", {
                stdout: "ignore"
            });
            process.shell("node 1.js", {
                stdout: "ipc"
            });
            process.shell("node 1.js", {
                stdout: "ignore"
            });
            process.shell("node 1.js", {
                stdout: new adone.std.stream.Stream()
            });
            process.shell("node 1.js", {
                stdout: 0
            });
            process.shell("node 1.js", {
                stdout: null
            });
            process.shell("node 1.js", {
                stdout: undefined
            });
        }
        {
            process.shell("node 1.js", {
                stderr: "pipe"
            });
            process.shell("node 1.js", {
                stderr: "ignore"
            });
            process.shell("node 1.js", {
                stderr: "ipc"
            });
            process.shell("node 1.js", {
                stderr: "ignore"
            });
            process.shell("node 1.js", {
                stderr: new adone.std.stream.Stream()
            });
            process.shell("node 1.js", {
                stderr: 0
            });
            process.shell("node 1.js", {
                stderr: null
            });
            process.shell("node 1.js", {
                stderr: undefined
            });
        }
        {
            process.shell("node 1.js", {
                input: "a"
            });
            process.shell("node 1.js", {
                input: Buffer.from("a")
            });
            process.shell("node 1.js", {
                input: adone.fs.createReadStream(__filename)
            });
        }
        {
            const ret = process.shell("node 1.js");
            ret.then((x) => {
                str = x.cmd;
                num = x.code;
                bool = x.killed;
                if (!adone.is.null(x.signal)) {
                    str = x.signal;
                }
                str = x.stderr;
                str = x.stdout;
                bool = x.timedOut;
            });
            ret.catch((x) => {
                str = x.cmd;
                num = x.code;
                bool = x.killed;
                if (!adone.is.null(x.signal)) {
                    str = x.signal;
                }
                str = x.stderr;
                str = x.stdout;
                bool = x.timedOut;
            });

            ret.on("message", () => {});
            ret.stdout.pipe(adone.fs.createWriteStream(__filename));
        }
    }

    namespace execSync {
        process.execSync("node");
        process.execSync("node", ["1.js"]);
        process.execSync("node", ["1.js"], {});
        process.execSync("node", ["1.js"], {
            cwd: "hello"
        });
        process.execSync("node", ["1.js"], {
            env: {
                a: "a"
            }
        });
        process.execSync("node", ["1.js"], {
            extendEnv: true
        });
        process.execSync("node", ["1.js"], {
            argv0: "a"
        });
        {
            process.execSync("node", ["1.js"], {
                stdio: "pipe"
            });
            process.execSync("node", ["1.js"], {
                stdio: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stdio: "inherit"
            });
            process.execSync("node", ["1.js"], {
                stdio: ["pipe"]
            });
            process.execSync("node", ["1.js"], {
                stdio: ["ipc"]
            });
            process.execSync("node", ["1.js"], {
                stdio: ["ignore"]
            });
            process.execSync("node", ["1.js"], {
                stdio: [new adone.std.stream.Stream()]
            });
            process.execSync("node", ["1.js"], {
                stdio: [0]
            });
            process.execSync("node", ["1.js"], {
                stdio: [null]
            });
            process.execSync("node", ["1.js"], {
                stdio: [undefined]
            });
        }
        process.execSync("node", ["1.js"], {
            detached: true
        });
        process.execSync("node", ["1.js"], {
            uid: 1000
        });
        process.execSync("node", ["1.js"], {
            gid: 1000
        });
        process.execSync("node", ["1.js"], {
            shell: true
        });
        process.execSync("node", ["1.js"], {
            windowsVerbatimArguments: true
        });
        process.execSync("node", ["1.js"], {
            stripEof: true
        });
        process.execSync("node", ["1.js"], {
            preferLocal: true
        });
        process.execSync("node", ["1.js"], {
            localDir: "a"
        });
        process.execSync("node", ["1.js"], {
            reject: false
        });
        process.execSync("node", ["1.js"], {
            cleanup: true
        });
        process.execSync("node", ["1.js"], {
            encoding: "utf8"
        });
        process.execSync("node", ["1.js"], {
            timeout: 100
        });
        process.execSync("node", ["1.js"], {
            maxBuffer: 1010101
        });
        process.execSync("node", ["1.js"], {
            killSignal: "SIGINT"
        });
        {
            process.execSync("node", ["1.js"], {
                stdin: "pipe"
            });
            process.execSync("node", ["1.js"], {
                stdin: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stdin: "ipc"
            });
            process.execSync("node", ["1.js"], {
                stdin: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stdin: new adone.std.stream.Stream()
            });
            process.execSync("node", ["1.js"], {
                stdin: 0
            });
            process.execSync("node", ["1.js"], {
                stdin: null
            });
            process.execSync("node", ["1.js"], {
                stdin: undefined
            });
        }
        {
            process.execSync("node", ["1.js"], {
                stdout: "pipe"
            });
            process.execSync("node", ["1.js"], {
                stdout: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stdout: "ipc"
            });
            process.execSync("node", ["1.js"], {
                stdout: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stdout: new adone.std.stream.Stream()
            });
            process.execSync("node", ["1.js"], {
                stdout: 0
            });
            process.execSync("node", ["1.js"], {
                stdout: null
            });
            process.execSync("node", ["1.js"], {
                stdout: undefined
            });
        }
        {
            process.execSync("node", ["1.js"], {
                stderr: "pipe"
            });
            process.execSync("node", ["1.js"], {
                stderr: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stderr: "ipc"
            });
            process.execSync("node", ["1.js"], {
                stderr: "ignore"
            });
            process.execSync("node", ["1.js"], {
                stderr: new adone.std.stream.Stream()
            });
            process.execSync("node", ["1.js"], {
                stderr: 0
            });
            process.execSync("node", ["1.js"], {
                stderr: null
            });
            process.execSync("node", ["1.js"], {
                stderr: undefined
            });
        }
        {
            process.execSync("node", ["1.js"], {
                input: "a"
            });
            process.execSync("node", ["1.js"], {
                input: Buffer.from("a")
            });
        }
        {
            const x = process.execSync("node", ["1.js"]);
            str = x.cmd;
            num = x.code;
            bool = x.killed;
            if (!adone.is.null(x.signal)) {
                str = x.signal;
            }
            str = x.stderr;
            str = x.stdout;
            bool = x.timedOut;
        }
    }

    namespace shell {
        process.shellSync("node 1.js");
        process.shellSync("node 1.js", {});
        process.shellSync("node 1.js", {
            cwd: "hello"
        });
        process.shellSync("node 1.js", {
            env: {
                a: "a"
            }
        });
        process.shellSync("node 1.js", {
            extendEnv: true
        });
        process.shellSync("node 1.js", {
            argv0: "a"
        });
        {
            process.shellSync("node 1.js", {
                stdio: "pipe"
            });
            process.shellSync("node 1.js", {
                stdio: "ignore"
            });
            process.shellSync("node 1.js", {
                stdio: "inherit"
            });
            process.shellSync("node 1.js", {
                stdio: ["pipe"]
            });
            process.shellSync("node 1.js", {
                stdio: ["ipc"]
            });
            process.shellSync("node 1.js", {
                stdio: ["ignore"]
            });
            process.shellSync("node 1.js", {
                stdio: [new adone.std.stream.Stream()]
            });
            process.shellSync("node 1.js", {
                stdio: [0]
            });
            process.shellSync("node 1.js", {
                stdio: [null]
            });
            process.shellSync("node 1.js", {
                stdio: [undefined]
            });
        }
        process.shellSync("node 1.js", {
            detached: true
        });
        process.shellSync("node 1.js", {
            uid: 1000
        });
        process.shellSync("node 1.js", {
            gid: 1000
        });
        process.shellSync("node 1.js", {
            shell: true
        });
        process.shellSync("node 1.js", {
            windowsVerbatimArguments: true
        });
        process.shellSync("node 1.js", {
            stripEof: true
        });
        process.shellSync("node 1.js", {
            preferLocal: true
        });
        process.shellSync("node 1.js", {
            localDir: "a"
        });
        process.shellSync("node 1.js", {
            reject: false
        });
        process.shellSync("node 1.js", {
            cleanup: true
        });
        process.shellSync("node 1.js", {
            encoding: "utf8"
        });
        process.shellSync("node 1.js", {
            timeout: 100
        });
        process.shellSync("node 1.js", {
            maxBuffer: 1010101
        });
        process.shellSync("node 1.js", {
            killSignal: "SIGINT"
        });
        {
            process.shellSync("node 1.js", {
                stdin: "pipe"
            });
            process.shellSync("node 1.js", {
                stdin: "ignore"
            });
            process.shellSync("node 1.js", {
                stdin: "ipc"
            });
            process.shellSync("node 1.js", {
                stdin: "ignore"
            });
            process.shellSync("node 1.js", {
                stdin: new adone.std.stream.Stream()
            });
            process.shellSync("node 1.js", {
                stdin: 0
            });
            process.shellSync("node 1.js", {
                stdin: null
            });
            process.shellSync("node 1.js", {
                stdin: undefined
            });
        }
        {
            process.shellSync("node 1.js", {
                stdout: "pipe"
            });
            process.shellSync("node 1.js", {
                stdout: "ignore"
            });
            process.shellSync("node 1.js", {
                stdout: "ipc"
            });
            process.shellSync("node 1.js", {
                stdout: "ignore"
            });
            process.shellSync("node 1.js", {
                stdout: new adone.std.stream.Stream()
            });
            process.shellSync("node 1.js", {
                stdout: 0
            });
            process.shellSync("node 1.js", {
                stdout: null
            });
            process.shellSync("node 1.js", {
                stdout: undefined
            });
        }
        {
            process.shellSync("node 1.js", {
                stderr: "pipe"
            });
            process.shellSync("node 1.js", {
                stderr: "ignore"
            });
            process.shellSync("node 1.js", {
                stderr: "ipc"
            });
            process.shellSync("node 1.js", {
                stderr: "ignore"
            });
            process.shellSync("node 1.js", {
                stderr: new adone.std.stream.Stream()
            });
            process.shellSync("node 1.js", {
                stderr: 0
            });
            process.shellSync("node 1.js", {
                stderr: null
            });
            process.shellSync("node 1.js", {
                stderr: undefined
            });
        }
        {
            process.shellSync("node 1.js", {
                input: "a"
            });
            process.shellSync("node 1.js", {
                input: Buffer.from("a")
            });
        }
        {
            const x = process.shellSync("node 1.js");
            str = x.cmd;
            num = x.code;
            bool = x.killed;
            if (!adone.is.null(x.signal)) {
                str = x.signal;
            }
            str = x.stderr;
            str = x.stdout;
            bool = x.timedOut;
        }
    }
}
