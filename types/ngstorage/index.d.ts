// Type definitions for ngstorage 0.3
// Project: https://github.com/gsklee/ngStorage
// Definitions by: Jakub Pistek <https://github.com/kubiq>
// Definitions: https://github.com/kubiq/DefinitelyTyped

export namespace ngstorage {
    interface StorageService {
        $default(items: {}): StorageService;
        $reset(items?: {}): StorageService;
        $apply(): void;
        $sync(): void;
        get<T>(key: string): T;
    }

    interface StorageProvider extends angular.IServiceProvider {
        get<T>(key: string): T;
        set<T>(key: string, value: T): T;

        setKeyPrefix(prefix: string): void;
        setSerializer(serializer: (value: any) => string): void;
        setDeserializer(deserializer: (value: string) => any): void;
    }
}
