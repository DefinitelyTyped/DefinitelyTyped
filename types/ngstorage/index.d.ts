export namespace ngStorage {
    interface StorageService {
        /**
         * @return true if the storage service is supported by the browser.
         */
        $supported(): boolean;

        /**
         * Adds default values to the store.
         * Copies all properties of the default items to the store.
         * If the store already has one of these properties it will skip it.
         *
         * @param items object holding the default values.
         * @return the modified storage service.
         */
        $default<T>(items: T): StorageService & T;

        /**
         * Removes all properties from the store.
         *
         * @param items optional object holding the default values to initialize the store after reset.
         * @return the modified storage service.
         */
        $reset<T>(items?: T): StorageService & T;

        $apply(): void;
        $sync(): void;

        /**
         * Access to the properties of the store.
         */
        [key: string]: any;
    }

    interface StorageProvider extends angular.IServiceProvider {
        get<T>(key: string): T | boolean;
        set<T>(key: string, value: T): T | boolean;
        remove(key: string): void;

        supported(): boolean;
        setKeyPrefix(prefix: string): void;
        setSerializer(serializer: (value: any) => string): void;
        setDeserializer(deserializer: (value: string) => any): void;
    }
}
