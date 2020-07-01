import { DiffDelta } from './diff-delta';
import { StatusFileOptions } from './status-file-options';

export class StatusFile {
    constructor(args: StatusFileOptions);
    headToIndex(): DiffDelta;
    indexToWorkdir(): DiffDelta;
    inIndex(): boolean;
    inWorkingTree(): boolean;
    isConflicted(): boolean;
    isDeleted(): boolean;
    isIgnored(): boolean;
    isModified(): boolean;
    isNew(): boolean;
    isRenamed(): boolean;
    isTypechange(): boolean;
    path(): string;
    status(): string[];
    statusBit(): number;
}
