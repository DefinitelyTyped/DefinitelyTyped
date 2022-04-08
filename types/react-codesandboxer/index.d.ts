// Type definitions for react-codesandboxer 3.1
// Project: https://github.com/codesandbox/codesandboxer#readme
// Definitions by: Nathan Bierema <https://github.com/Methuselah96>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

import * as React from 'react';

export interface GitInfo {
    account: string;
    repository: string;
    branch?: string;
    host: 'bitbucket' | 'github';
}

export interface Files {
    [key: string]: { content: string };
}

export interface Package {
    name: string;
    version: string;
    dependencies: {
        [key: string]: string;
    };
    devDependencies: {
        [key: string]: string;
    };
    peerDependencies: {
        [key: string]: string;
    };
}

export type ImportReplacement = [string, string];

export interface Error {
    name: string;
    description?: string;
    content?: string;
}

export interface State {
    parameters: string;
    isLoading: boolean;
    isDeploying: boolean;
    sandboxId?: string;
    sandboxUrl?: string;
    deployPromise?: Promise<any>;
    files?: Files;
    error?: Error;
    fileName: string;
}

export interface Props {
    examplePath: string;
    name?: string;
    gitInfo: GitInfo;
    example?: string | Promise<string>;
    pkgJSON?: Package | string | Promise<Package | string>;
    importReplacements?: ImportReplacement[];
    dependencies?: { [key: string]: string };
    skipRedirect?: boolean;
    ignoreInternalImports?: boolean;
    preload?: boolean;
    autoDeploy?: boolean;
    onLoadComplete?: (
        arg: { parameters: string; files: Files } | { error: any }
    ) => unknown;
    afterDeploy?: (sandboxUrl: string, sandboxId: string) => unknown;
    afterDeployError?: (error: Error) => unknown;
    providedFiles?: Files;
    children: (obj: {
        isLoading: boolean;
        files?: Files;
        sandboxId?: string;
        sandboxUrl?: string;
    }) => React.ReactNode;
    style?: object;
    extensions?: string[];
    template?: 'create-react-app' | 'create-react-app-typescript' | 'vue-cli';
}

export default class CodeSandboxDeployer extends React.Component<Props, State> {}
