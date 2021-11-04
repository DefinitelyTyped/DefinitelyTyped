import { History, LocationState } from './index';
import { getConfirmation } from './DOMUtils';

export interface BrowserHistoryBuildOptions {
    basename?: string | undefined;
    forceRefresh?: boolean | undefined;
    getUserConfirmation?: typeof getConfirmation | undefined;
    keyLength?: number | undefined;
}

export default function createBrowserHistory<S = LocationState>(options?: BrowserHistoryBuildOptions): History<S>;
