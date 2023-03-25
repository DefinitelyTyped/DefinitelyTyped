import type { DuplicatesSet } from '../flow-types';

export class DuplicateHasteCandidatesError extends Error {
    hasteName: string;
    platform: string | null;
    supportsNativePlatform: boolean;
    duplicatesSet: DuplicatesSet;
    constructor(name: string, platform: string, supportsNativePlatform: boolean, duplicatesSet: DuplicatesSet);
}
