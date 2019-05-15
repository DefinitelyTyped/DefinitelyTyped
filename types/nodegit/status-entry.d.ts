import { DiffDelta } from './diff-delta';

export class StatusEntry {
    status(): number;
    headToIndex(): DiffDelta;
    indexToWorkdir(): DiffDelta;
}
