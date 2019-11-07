// Type definitions for depcheck 0.9
// Project: https://github.com/depcheck/depcheck
// Definitions by: ark120202 <https://github.com/ark120202>
//                 jrnail23 <https://github.com/jrnail23>
//                 rumpl <https://github.com/rumpl>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function depcheck(rootDir: string, options: depcheck.Options): Promise<depcheck.Results>;

declare function depcheck<T>(
    rootDir: string,
    options: depcheck.Options,
    callback: (results: depcheck.Results) => T
): Promise<T>;

declare namespace depcheck {
    interface Node {
        [key: string]: any;
    }

    type Parser = (content: string, filePath: string, deps: ReadonlyArray<string>, rootDir: string) => Node;

    type Detector = (node: Node) => ReadonlyArray<string> | string;

    interface Options {
        ignoreBinPackage?: boolean;
        skipMissing?: boolean;
        ignoreDirs?: ReadonlyArray<string>;
        ignoreMatches?: ReadonlyArray<string>;
        parsers?: {
            [match: string]: Parser;
        };
        detectors?: ReadonlyArray<Detector>;
        specials?: ReadonlyArray<Parser>;
    }

    interface Results {
        dependencies: string[];
        devDependencies: string[];
        using: {
            [dependencyName: string]: string[];
        };
        missing: {
            [dependencyName: string]: string[];
        };
        invalidFiles: {
            [filePath: string]: any;
        };
        invalidDirs: {
            [filePath: string]: any;
        };
    }

    const parser: {
        coffee: Parser;
        es6: Parser;
        es7: Parser;
        jsx: Parser;
        sass: Parser;
        typescript: Parser;
        vue: Parser;
    };

    const detector: {
        exportDeclaration: Detector;
        expressViewEngine: Detector;
        gruntLoadTaskCallExpression: Detector;
        importCallExpression: Detector;
        importDeclaration: Detector;
        requireCallExpression: Detector;
        requireResolveCallExpression: Detector;
        typescriptImportEqualsDeclaration: Detector;
        detectTypescriptImportType: Detector;
    };

    const special: {
        babel: Parser;
        bin: Parser;
        commitizen: Parser;
        eslint: Parser;
        'feross-standard': Parser;
        gatsby: Parser;
        'gulp-load-plugins': Parser;
        jest: Parser;
        karma: Parser;
        mocha: Parser;
        tslint: Parser;
        webpack: Parser;
    };
}

export = depcheck;
