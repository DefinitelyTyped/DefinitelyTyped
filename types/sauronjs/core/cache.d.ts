export function CacheFactory(id: any): void | Cache;

export class Cache {
  constructor();
  get(key: string): Cache;
  exists(key: string): boolean;
  set(key: string, value: Cache): void;
  clear(): void;
  keys(): string[];
  size(): number;
  forEach(fn: (key: string, value: Cache) => void): void;
}
