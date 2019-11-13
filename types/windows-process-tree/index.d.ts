// Type definitions for windows-process-tree 0.2
// Project: https://github.com/Microsoft/vscode-windows-process-tree
// Definitions by: Rachel Macfarlane <https://github.com/DefinitelyTyped>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export enum ProcessDataFlag {
    None = 0,
    Memory = 1,
    CommandLine = 2
}

export interface ProcessInfo {
    pid: number;
    ppid: number;
    name: string;

    /**
     * The working set size of the process, in bytes.
     */
    memory?: number;

    /**
     * The string returned is at most 512 chars, strings exceeding this length are truncated.
     */
    commandLine?: string;
}

export interface ProcessCpuInfo extends ProcessInfo {
    cpu?: number;
}

export interface ProcessTreeNode {
    pid: number;
    name: string;
    memory?: number;
    commandLine?: string;
    children: ProcessTreeNode[];
}

/**
 * Returns a tree of processes with the rootPid process as the root.
 * @param rootPid - The pid of the process that will be the root of the tree.
 * @param callback - The callback to use with the returned list of processes.
 * @param flags - The flags for what process data should be included.
 */
export function getProcessTree(rootPid: number, callback: (tree: ProcessTreeNode) => void, flags?: ProcessDataFlag): void;

/**
 * Returns a list of processes containing the rootPid process and all of its descendants.
 * @param rootPid - The pid of the process of interest.
 * @param callback - The callback to use with the returned set of processes.
 * @param flags - The flags for what process data should be included.
 */
export function getProcessList(rootPid: number, callback: (processList: ProcessInfo[]) => void, flags?: ProcessDataFlag): void;

/**
 * Returns the list of processes annotated with cpu usage information.
 * @param processList - The list of processes.
 * @param callback - The callback to use with the returned list of processes.
 */
export function getProcessCpuUsage(processList: ReadonlyArray<ProcessInfo>, callback: (processListWithCpu: ProcessCpuInfo[]) => void): void;
