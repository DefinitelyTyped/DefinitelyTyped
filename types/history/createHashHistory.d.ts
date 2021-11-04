import { History, LocationState } from './index';
import { getConfirmation } from './DOMUtils';

export type HashType = 'hashbang' | 'noslash' | 'slash';

export interface HashHistoryBuildOptions {
    basename?: string | undefined;
    hashType?: HashType | undefined;
    getUserConfirmation?: typeof getConfirmation | undefined;
}

export default function createHashHistory<S = LocationState>(options?: HashHistoryBuildOptions): History<S>;
