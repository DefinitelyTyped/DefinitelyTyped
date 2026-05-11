declare const Cache: {
    /**
     * @default false
     */
    enabled: boolean;

    /**
     * @default {}
     */
    files: any;

    add(key: string, file: any): void;

    get(key: string): any;

    remove(key: string): void;

    clear(): void;
};

export { Cache };
