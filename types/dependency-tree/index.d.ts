// Type definitions for dependency-tree 8.0
// Project: https://github.com/mrjoelkemp/node-dependency-tree
// Definitions by: Joscha Feth <https://github.com/joscha>
//                 Alex <https://github.com/adjerbetian>
//                 Christian Rackerseder <https://github.com/screendriver>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import { CompilerOptions } from 'typescript';

declare namespace dependencyTree {
    interface DependencyObj {
        [k: string]: DependencyObj;
    }

    interface TsConfigCompilerOptions extends Omit<CompilerOptions, 'module' | 'target'> {
        module?: 'None' | 'CommonJS' | 'AMD' | 'System' | 'UMD' | 'ES6' | 'ES2015' | 'ES2020' | 'ESNext';
        target?: 'ES3' | 'ES5' | 'ES6' | 'ES2015' | 'ES2016' | 'ES2017' | 'ES2018' | 'ES2019' | 'ES2020' | 'ESNext';
    }

    interface TsConfig {
        extends?: string;
        compilerOptions: TsConfigCompilerOptions;
        exclude?: string[];
        include?: string[];
        files?: string[];
        compileOnSave?: boolean;
        references?: Array<{ path: string }>;
    }

    interface Options {
        filename: string;
        directory?: string;
        requireConfig?: string;
        webpackConfig?: string;
        tsConfig?: string | TsConfig;
        nodeModulesConfig?: any;
        detective?: any;
        visited?: DependencyObj;
        filter?(path: string): boolean;
        nonExistent?: string[];
        isListForm?: boolean;
    }

    function toList(options: Options): string[];
}

declare function dependencyTree(options: dependencyTree.Options): dependencyTree.DependencyObj;

export = dependencyTree;
