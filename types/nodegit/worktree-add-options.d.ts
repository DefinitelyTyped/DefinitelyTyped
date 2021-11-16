import { Reference } from './reference';

export interface WorktreeAddOptions {
    lock?: number;
    /**
     * reference to use for the new worktree HEAD
     */
    ref?: Reference;
    version?: number;
}
