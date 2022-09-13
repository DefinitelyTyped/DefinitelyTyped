import { Disposable } from '../index';

/**
 *  History manager for remembering which projects have been opened.
 *  An instance of this class is always available as the atom.history global.
 *  The project history is used to enable the 'Reopen Project' menu.
 */
export interface HistoryManager {
    /** Obtain a list of previously opened projects. */
    getProjects(): ProjectHistory[];

    /**
     *  Clear all projects from the history.
     *  Note: This is not a privacy function - other traces will still exist, e.g.
     *  window state.
     */
    clearProjects(): void;

    /** Invoke the given callback when the list of projects changes. */
    onDidChangeProjects(callback: (args: { reloaded: boolean }) => void): Disposable;
}

export interface ProjectHistory {
    paths: string[];
    lastOpened: Date;
}
