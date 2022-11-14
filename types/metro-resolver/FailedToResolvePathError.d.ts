import { FileAndDirCandidates } from './types';

export class FailedToResolvePathError extends Error {
    candidates: FileAndDirCandidates;
    constructor(candidates: FileAndDirCandidates);
}
