import { History, Location } from './index';
import { getConfirmation } from './DOMUtils';

export interface MemoryHistoryBuildOptions {
  getUserConfirmation?: typeof getConfirmation;
  initialEntries?: string[];
  initialIndex?: number;
  keyLength?: number;
}

export interface MemoryHistory extends History {
  index: number;
  entries: Location[];
  canGo(n: number): boolean;
}

export default function createMemoryHistory(options?: MemoryHistoryBuildOptions): MemoryHistory;
