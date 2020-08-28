import { History, LocationState } from './index';
import { getConfirmation } from './DOMUtils';

export type HashType = 'hashbang' | 'noslash' | 'slash';

export interface HashHistoryBuildOptions {
    basename?: string;
    hashType?: HashType;
    getUserConfirmation?: typeof getConfirmation;
}

export default function createHashHistory<S = LocationState>(options?: HashHistoryBuildOptions): History<S>;
