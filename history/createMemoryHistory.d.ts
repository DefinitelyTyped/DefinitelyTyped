import { History, Location } from './';

export interface MemoryHistoryBuildOptions {
  getUserConfirmation?: Function;
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
