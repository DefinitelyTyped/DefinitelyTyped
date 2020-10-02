interface NanoidAsync {
  (size?: number): Promise<string>;
  (size: number | null, callback: (error: Error | null, id: string) => any): void;
}

declare const nanoidAsync: NanoidAsync;

export = nanoidAsync;
