import { QueueItem } from './queue';

export default function(loadParameter?: string): FSBackend;

export class FSBackend {
  laoded: boolean;
  index: number[];
  location: string;

  fileExists(location: string): boolean;
  isDirectory(location: string): boolean;
  load(): void;
  saveCache(callback?: (err: NodeJS.ErrnoException | null) => void): void;
  setItem(queueObject: QueueItem, data: any, callback?: () => void): void;
  getItem(queueObject: QueueItem, callback?: (error?: Error, data?: any) => void): false;
}
