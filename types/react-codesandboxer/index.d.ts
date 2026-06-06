import * as React from "react";

export interface GitInfo {
    account: string;
    repository: string;
    branch?: string | undefined;
    host: "bitbucket" | "github";
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
    description?: string | undefined;
    content?: string | undefined;
}

export interface State {
    parameters: string;
    isLoading: boolean;
    isDeploying: boolean;
    sandboxId?: string | undefined;
    sandboxUrl?: string | undefined;
    deployPromise?: Promise<any> | undefined;
    files?: Files | undefined;
    error?: Error | undefined;
    fileName: string;
}

export interface Props {
    examplePath: string;
    name?: string | undefined;
    gitInfo: GitInfo;
    example?: string | Promise<string> | undefined;
    pkgJSON?: Package | string | Promise<Package | string> | undefined;
    importReplacements?: ImportReplacement[] | undefined;
    dependencies?: { [key: string]: string } | undefined;
    skipRedirect?: boolean | undefined;
    ignoreInternalImports?: boolean | undefined;
    preload?: boolean | undefined;
    autoDeploy?: boolean | undefined;
    onLoadComplete?:
        | ((
            arg: { parameters: string; files: Files } | { error: any },
        ) => unknown)
        | undefined;
    afterDeploy?: ((sandboxUrl: string, sandboxId: string) => unknown) | undefined;
    afterDeployError?: ((error: Error) => unknown) | undefined;
    providedFiles?: Files | undefined;
    children: (obj: {
        isLoading: boolean;
        files?: Files | undefined;
        sandboxId?: string | undefined;
        sandboxUrl?: string | undefined;
    }) => React.ReactNode;
    style?: object | undefined;
    extensions?: string[] | undefined;
    template?: "create-react-app" | "create-react-app-typescript" | "vue-cli" | undefined;
}

export default class CodeSandboxDeployer extends React.Component<Props, State> {}
