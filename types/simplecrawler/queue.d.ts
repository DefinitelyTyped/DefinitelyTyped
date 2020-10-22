export type QueueItemStatus = 'queued' | 'spooled' | 'headers' | 'downloaded' | 'redirected' | 'notfound' | 'failed';
export interface QueueItem {
  id: number;
  url: string;
  protocol: string;
  host: string;
  port: number;
  path: string;
  uriPath: string;
  depth: number;
  referrer: string;
  fetched: boolean;
  status: QueueItemStatus;
  stateData: {
    requestLatency: number;
    requestTime: number;
    downloadTime: number;
    contentLength: number;
    contentType: string;
    code: number;
    headers: object;
    actualDataSize: number;
    sentIncorrectSize: boolean;
  };
}

export default class FetchQueue extends Array {
  add(queueItem: QueueItem, force?: boolean, callback?: (error?: Error, queueItem?: QueueItem) => void): void;
  exists(url: string, callback: (error: Error | null, exists: 0 | 1) => void): void;
  get(index: number, callback?: (error?: Error, queueItem?: QueueItem) => void): void;
  update(id: number, updates: object, callback?: (error?: Error, queueItem?: QueueItem) => void): void;
  oldestUnfetchedItem(callback?: (error?: Error, queueItem?: QueueItem) => void): void;
  max(statisticName: string, callback?: (error?: Error, maximum?: number) => void): void;
  min(statisticName: string, callback?: (error?: Error, minimum?: number) => void): void;
  avg(statisticName: string, callback?: (error?: Error, average?: number) => void): void;
  countItems(comparator: object, callback?: (error?: Error, count?: number) => void): void;
  filterItems(comparator: object, callback?: (error?: Error, items?: QueueItem[]) => void): void;
  getLength(callback?: (error?: Error, length?: number) => void): void;
  freeze(filename: string, callback?: (error?: Error) => void): void;
  defrost(filename: string, callback?: (error?: Error) => void): void;
}
