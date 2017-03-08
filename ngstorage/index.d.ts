// Type definitions for ngstorage 0.3.11
// Project: https://github.com/gsklee/ngStorage
// Definitions by: Jakub Pistek <https://github.com/kubiq>
// Definitions: https://github.com/kubiq/DefinitelyTyped

declare module 'ngstorage' {

    interface IStorageService {
        $default(items: {}): IStorageService;
        $reset(items?: {}): IStorageService;
        $apply(): void;
        $sync(): void;
        get<T>(key: string): T;
    }

    interface IStorageProvider extends angular.IServiceProvider {

        get<T>(key: string): T;
        set<T>(key: string, value: T): T;

        setKeyPrefix(prefix: string): void;
        setSerializer(serializer: (value: any) => string): void;
        setDeserializer(deserializer: (value: string) => any): void;
    }
}
