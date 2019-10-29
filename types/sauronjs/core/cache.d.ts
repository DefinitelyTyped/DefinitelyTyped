declare class Cache {
  constructor();
  get(key: string): any;
  exists(key: string): boolean;
  set(key: string, value: any): void;
  clear(): void;
  keys(): string[];
  size(): number;
  forEach(fn: (key: string, value: any) => void): void;
}

declare const CacheFactory: {
  (id: string): Cache;
  (): void;
};

export = CacheFactory;
