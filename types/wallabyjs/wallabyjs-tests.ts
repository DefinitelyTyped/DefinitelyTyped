import { Application, Express } from "express";
import * as wallabyjs from "wallabyjs";

interface MyTestRunner {
    foo: number;
}

const myCompiler: wallabyjs.IWallabyCompiler = (file: wallabyjs.IWallabyFile) => {
    return {
        code: file.content,
        map: file.content,
        ranges: [],
    };
};

export class WallabyConfig implements wallabyjs.IWallabyConfig {
    public files: Array<string | wallabyjs.IWallabyFilePattern> = [
        "src/**/*.ts",
        "!src/**/*.spec.ts",
        { pattern: "src/**/*.css", instrument: false },
    ];

    public tests: Array<string | wallabyjs.IWallabyFilePattern> = [
        "src/**/*.spec.ts",
        { pattern: "src/**/*.css", instrument: false, load: true },
    ];

    public compilers: wallabyjs.IWallabyCompilers = {
        "src/**/*.js": this.wallaby.compilers.babel({ babelrc: true }),
        "src/**/*.ts": this.wallaby.compilers.typeScript({ strict: true }),
        "src/**/*.coffee": this.wallaby.compilers.coffeeScript({ bare: true }),
        "src/**/*.my": myCompiler,
    };

    public preprocessors: wallabyjs.IWallabyProcessors = {
        "**/*.js": file => file.content + "\n// this is JavaScript",
        "**/*.ts": file => file.content + "\n// this is TypeScript",
    };

    public postprocessor: wallabyjs.IWallabyProcessors = {
        "**/*.js": file => file.content + "\n// this is JavaScript",
        "**/*.ts": file => file.content + "\n// this is TypeScript",
    };

    public env: wallabyjs.IWallabyEnvironment = {
        type: "node",
        params: {
            env: "KEY1=value1;KEY2=value2",
            runner: "--arg1;--arg2;",
        },
        viewportSize: {
            width: 800,
        },
    };

    public async setup(wallaby: wallabyjs.IWallabyTestRunnerContext<MyTestRunner>) {
        const foo: number = wallaby.testFramework.foo;
    }

    public teardown(wallaby: wallabyjs.IWallabyTestRunnerContext<MyTestRunner>) {
        const foo: number = wallaby.testFramework.foo;
    }

    public middleware(app: Application, express: Express) {
        app.use((req, res, next) => {
            next();
        });
    }

    public hints = {
        ignoreCoverage: /wallaby ignore next/,
        ignoreCoverageForFile: "wallaby ignore file",
    };

    public startMode = "never" as const;

    public pattern = "**/*.js";

    public autoDetect = ["angular", "vitest"] as const;

    public delays = {
        run: 50,
    };

    public runMode = "onsave" as const;

    public logLimits = {
        inline: {
            // The depth to log for values displayed inline beside your code
            depth: 5,

            // The maximum number of elements to log for values displayed
            // inline beside your code
            elements: 5000,
        },
        values: {
            default: {
                // The string length at which strings are truncated within
                // value explorer and log messages
                stringLength: 200,
            },
            autoExpand: {
                // The string length at which strings are truncated when
                // using the auto-expand feature
                stringLength: 8192,

                // The maximum number of elements to log for values displayed
                // using the auto-expand feature
                elements: 5000,

                // The maximum depth to log for values displayed using the
                // auto-expand feature
                depth: 10,
            },
        },
    };

    constructor(private readonly wallaby: wallabyjs.IWallaby) {}
}
