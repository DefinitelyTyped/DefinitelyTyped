

declare module Backbone {
    interface Serializer {
        serialize(item: any): any;
        deserialize(data: any): any;
    }

    declare class LocalStorage {
        name: string;
        serializer: Serializer;
        records: string[];

        constructor(name: string, serializer?: Serializer);

        save();

        // Add a model, giving it a (hopefully)-unique GUID, if it doesn't already
        // have an id of it's own.
        create(model: any): any;

        // Update a model by replacing its copy in `this.data`.
        update(model: any): any;

        // Retrieve a model from `this.data` by id.
        find(model: any): any;

        // Return the array of all models currently in storage.
        findAll(): any;

        // Delete a model from `this.data`, returning it.
        destroy<T>(model: T): T;

        localStorage(): any;

        // Clear localStorage for specific collection.
        _clear(): void;

        _storageSize(): number;

        _itemName(id): string;
    };
}

export Store = Backbone.LocalStorage;

