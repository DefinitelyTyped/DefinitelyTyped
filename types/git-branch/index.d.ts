export = GitBranch;

declare function GitBranch(cwd?: string): Promise<string>;
declare function GitBranch(cwd?: string, callback?: (err: null | string, name: string) => void): void;
declare function GitBranch(callback: (err: null | string, name: string) => void): void;

declare namespace GitBranch {
    function sync(cwd?: string): string;
}
