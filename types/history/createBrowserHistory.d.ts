import { History, LocationState } from './index';
import { getConfirmation } from './DOMUtils';

export interface BrowserHistoryBuildOptions {
  basename?: string;
  forceRefresh?: boolean;
  getUserConfirmation?: typeof getConfirmation;
  keyLength?: number;
}

export default function createBrowserHistory<S = LocationState>(
  options?: BrowserHistoryBuildOptions,
): History<S>;
