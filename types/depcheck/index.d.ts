// Type definitions for depcheck 0.6
// Project: https://github.com/depcheck/depcheck
// Definitions by: ark120202 <https://github.com/ark120202>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare function depcheck(
    rootDir: string,
    options: depcheck.Options,
): Promise<depcheck.Results>;

declare function depcheck<T>(
    rootDir: string,
    options: depcheck.Options,
    callback: (results: depcheck.Results) => T,
): Promise<T>;

declare namespace depcheck {
    interface Node {
        [key: string]: any;
    }

    type Parser = (
        content: string,
        filePath: string,
        deps: ReadonlyArray<string>,
        rootDir: string,
    ) => Node;

    type Detector = (node: Node) => ReadonlyArray<string> | string;

    interface Options {
        withoutDev?: boolean;
        ignoreBinPackage?: boolean;
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
        missing: string[];
        using: string[];
        invalidFiles: string[];
        invalidDirs: string[];
    }

    const parser: {
        coffee: Parser;
        es6: Parser;
        es7: Parser;
        jsx: Parser;
        sass: Parser;
        typescript: Parser;
    };

    const detector: {
        expressViewEngine: Detector;
        gruntLoadTaskCallExpression: Detector;
        importDeclaration: Detector;
        requireCallExpression: Detector;
        requireResolveCallExpression: Detector;
    };

    const special: {
        babel: Parser;
        bin: Parser;
        commitizen: Parser;
        eslint: Parser;
        'feross-standard': Parser;
        'gulp-load-plugins': Parser;
        mocha: Parser;
        webpack: Parser;
    };
}

export = depcheck;
