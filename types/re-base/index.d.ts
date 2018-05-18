// Type definitions for re-base 3.2
// Project: https://github.com/tylermcginnis/re-base#readme
// Definitions by: jordandrako <https://github.com/jordandrako>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface QueryOptions {}

interface RebaseBinding {}

declare namespace firebase {

}

declare namespace firebase.app {
    interface App {}
}

declare namespace firebase.database {
    interface Database {}
}

declare namespace firebase.firestore {
    class Firestore {}
}

declare namespace rebase {
    interface SyncStateOptions {
        /**
         * The context of your component.
         */
        context: {};

        /**
         * The state property you want to sync with Firebase; can be an arbitrarily nested property a là `foo.bar`.
         */
        state: string;

        /**
         * A default value to set when the Firebase endpoint has no value (i.e., on init) (use this if you want a value other than an empty object or empty array)
         */
        defaultValue?: string | boolean | number | {};

        /**
         * Returns the Firebase data at the specified endpoint as an Array instead of an Object.
         */
        asArray?: boolean;

        /**
         * Will keep any firebase generated keys intact when manipulating data using the asArray option.
         */
        keepKeys?: boolean;

        /**
         * Queries to be used with your read operations. See [Query Options](https://github.com/tylermcginnis/re-base#queries) for more details.
         */
        queries?: QueryOptions;

        /**
         * The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with syncState) to change this.state.loading to false.
         */
        then?: () => void;

        /**
         * A callback function that will be invoked if the current user does not have read or write permissions at the location.
         */
        onFailure?: () => void;
    }

    interface BindToStateOptions {
        /**
         * The context of your component.
         */
        context: {};

        /**
         * The state property you want to sync with Firebase; can be an arbitrarily nested property a là `foo.bar` (no arrays).
         */
        state: string;

        /**
         * Returns the Firebase data at the specified endpoint as an Array instead of an Object.
         */
        asArray?: boolean;

        /**
         * Queries to be used with your read operations. See [Query Options](https://github.com/tylermcginnis/re-base#queries) for more details.
         */
        queries?: QueryOptions;

        /**
         * The callback function that will be invoked when the initial listener is established with Firebase. Typically used (with bindToState) to change this.state.loading to false.
         */
        then?: () => void;

        /**
         * A callback function that will be invoked if the current user does not have read permissions at the location.
         */
        onFailure?: () => void;
    }

    interface ListenToOptions {
        /**
         * The context of your component.
         */
        context: {};

        /**
         * Returns the Firebase data at the specified endpoint as an Array instead of an Object.
         */
        asArray?: boolean;

        /**
         * The callback function that will be invoked with the data from the specified endpoint when the endpoint changes.
         */
        then: (result: any) => void;

        /**
         * The callback function that will be invoked if the current user does not have read permissions at the location.
         */
        onFailure?: (error: any) => void;

        /**
         * Queries to be used with your read operations. See [Query Options](https://github.com/tylermcginnis/re-base#queries) for more details.
         */
        queries?: QueryOptions;
    }

    interface FetchOptions {
        /**
         * The context of your component.
         */
        context: {};

        /**
         * Returns the Firebase data at the specified endpoint as an Array instead of an Object.
         */
        asArray?: boolean;

        /**
         * The callback function that will be invoked with the data from the specified endpoint when the endpoint changes.
         */
        then?: (result: any) => void;

        /**
         * The callback function that will be invoked with an error that occurs reading data from the specified endpoint.
         */
        onFailure?: () => void;

        /**
         * Queries to be used with your read operations. See [Query Options](https://github.com/tylermcginnis/re-base#queries) for more details.
         */
        queries?: QueryOptions;
    }

    interface PostOptions {
        /**
         * The data you're wanting to persist to Firebase.
         */
        data: any;

        /**
         * A callback that will get invoked once the new data has been saved to Firebase. If there is an error, it will be the only argument to this function.
         */
        then?: (result: any) => void;
    }

    interface PushOptions {
        /**
         * The data you're wanting to persist to Firebase.
         */
        data: any;

        /**
         * A callback that will get invoked once the new data has been saved to Firebase. If there is an error, it will be the only argument to this function.
         */
        then?: (result: any) => void;
    }

    interface UpdateOptions {
        /**
         * The data you're wanting to persist to Firebase.
         */
        data: any;

        /**
         * A callback that will get invoked once the new data has been saved to Firebase. If there is an error, it will be the only argument to this function.
         */
        then?: (result: any) => void;
    }

    interface DocumentReference {}

    interface CollectionReference {}

    interface bindDocOptions {
        /**
         * Your react component.
         */
        context: {};

        /**
         * A property name on your state to bind your document to, if omitted the document will be merged into your existing state.
         */
        state?: string;

        /**
         * A callback that will be called when the listener is set, use for loading indicators.
         */
        then?: () => void;

        /**
         * A callback that will be called with any errors such as permissions errors.
         */
        onFailure?: () => void;
    }

    interface listenToDocOptions {
        /**
         * Your react component.
         */
        context: {};

        /**
         * A callback that will be called when the listener is set, use for loading indicators.
         */
        then?: () => void;

        /**
         * A callback that will be called with any errors such as permissions errors.
         */
        onFailure?: () => void;
    }

    interface bindCollectionOptions {
        /**
         * Your react component.
         */
        context: {};

        /**
         * The state property to bind the collection to.
         */
        state?: string;

        /**
         * A function that receives the created ref as its only argument. You can chain any Firestore queries you want to perform. See [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
         */
        query?: () => void;

        /**
         * Will embed firestore generated document ids inside each document in your collections on the `id` property.
         */
        withIds?: boolean;

        /**
         * will embed the DocumentReference inside each document in your collection on the `ref` property.
         */
        withRefs?: boolean;

        /**
         * A callback that will be called when the listener is set, use for loading indicators.
         */
        then?: () => void;

        /**
         * A callback that will be called with any errors such as permissions errors.
         */
        onFailure?: () => void;
    }

    interface listenToCollectionOptions {
        /**
         * Your react component.
         */
        context: {};

        /**
         * A callback that will be called with the data.
         */
        then: () => void;

        /**
         * A function that receives the created ref as its only argument. You can chain any Firestore queries you want to perform. See [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
         */
        query?: () => void;

        /**
         * Will embed firestore generated document ids inside each document in your collections on the `id` property.
         */
        withIds?: boolean;

        /**
         * will embed the DocumentReference inside each document in your collection on the `ref` property.
         */
        withRefs?: boolean;

        /**
         * A callback that will be called with any errors such as permissions errors.
         */
        onFailure?: () => void;
    }

    interface getOptions {
        /**
         * A function that receives the created ref as its only argument. You can chain any Firestore queries you want to perform. See [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
         */
        query?: () => void;

        /**
         * Will embed firestore generated document ids inside each document in your collections on the `id` property.
         */
        withIds?: boolean;

        /**
         * will embed the DocumentReference inside each document in your collection on the `ref` property.
         */
        withRefs?: boolean;
    }

    interface removeFromCollectionOptions {
        /**
         * A function that receives the created ref as its only argument. You can chain any Firestore queries you want to perform. See [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
         */
        query?: () => void;
    }

    interface syncDocOptions {
        /**
         * Your react component.
         */
        context: {};

        /**
         * The state property to sync.
         */
        state: string;

        /**
         * A callback that will be called when the listener is set, use for loading indicators.
         */
        then?: () => void;

        /**
         * A callback that will be called with any errors such as permissions errors.
         */
        onFailure?: () => void;
    }

    interface Rebase {
        /**
         * This property contains the initialized firebase app that was passed into re-base. You can access any of the firebase services that you are using off this object. For instance, if you want to use some firebase database methods that re-base doesn't have helpers for or if you are using the auth service and want to quickly access it off of re-base.
         */
        initializedApp: firebase.app.App;

        /**
         * This property contains an object that you can use when adding data that will be converted to a timestamp by Firebase. See [the docs](https://firebase.google.com/docs/reference/js/firebase.database.ServerValue) for more info.
         */
        timestamp: {};

        /**
         * Allows you to set up two way data binding between your component's state and your Firebase. Whenever your Firebase changes, your component's state will change. Whenever your component's state changes, Firebase will change.
         * @param endpoint The relative Firebase endpoint to which you'd like to bind your component's state.
         * @param options syncState Options.
         * @returns An object which you can pass to `removeBinding` if you want to remove the listener while the component is still mounted.
         */
        syncState(endpoint: string, options: SyncStateOptions): RebaseBinding;

        /**
         * One way data binding from Firebase to your component's state. Allows you to bind a component's state property to a Firebase endpoint so whenever that Firebase endpoint changes, your component's state will be updated with that change.
         * @param endpoint The relative Firebase endpoint that you'd like to bind to your component's state.
         * @param options bindToState Options.
         * @returns An object which you can pass to removeBinding if you want to remove the listener while the component is still mounted.
         */
        bindToState(
            endpoint: string,
            options: BindToStateOptions
        ): RebaseBinding;

        /**
         * Allows you to listen to Firebase endpoints without binding those changes to a state property. Instead, a callback will be invoked with the newly updated data.
         * @param endpoint The relative Firebase endpoint which contains the data with which you'd like to invoke your callback function.
         * @param options listenTo Options.
         * @returns An object which you can pass to removeBinding when your component unmounts to remove the Firebase listeners.
         */
        listenTo(endpoint: string, options: ListenToOptions): RebaseBinding;

        /**
         * Allows you to retrieve the data from a Firebase endpoint just once without subscribing or listening for data changes.
         * @param endpoint The relative Firebase endpoint which contains the data you're wanting to fetch.
         * @param options fetch Options.
         * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise) which resolves when the write is complete and rejects if there is an error.
         */
        fetch(endpoint: string, options: FetchOptions): Promise<any>;

        /**
         * Allows you to update a Firebase endpoint with new data. *Replace all the data at this endpoint with the new data*.
         * @param endpoint The relative Firebase endpoint that you'd like to update with the new data.
         * @param options post Options.
         * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise) which resolves when the write is complete and rejects if there is an error.
         */
        post(endpoint: string, options: PostOptions): Promise<any>;

        /**
         * Allows you to add data to a Firebase endpoint. *Adds data to a child of the endpoint with a new Firebase push key*.
         * @param endpoint The relative Firebase endpoint that you'd like to push the new data to.
         * @param options push Options.
         * @returns A Firebase [ThenableReference](https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference) which is defined by Firebase as a "Combined Promise and reference; resolves when write is complete, but can be used immediately as the reference to the child location."
         */
        push(endpoint: string, options: PushOptions): Promise<any>;

        /**
         * Allows you to update data at a Firebase endpoint changing only the properties you pass to it. **Warning: calling update with `options.data` being null will remove all the data at that endpoint**.
         * @param endpoint The relative Firebase endpoint that you'd like to update.
         * @param options update Options.
         * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise) which resolves when the write is complete and rejects if there is an error.
         */
        update(endpoint: string, options: UpdateOptions): Promise<any>;

        /**
         * Allows you to delete all data at the endpoint location.
         * @param endpoint The relative Firebase endpoint that you'd like to delete data from.
         * @param callback A callback that will get invoked once the data is successfully removed Firebase. If there is an error, it will be the only argument to this function.
         * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise) which resolves when the write is complete and rejects if there is an error.
         */
        remove(
            endpoint: string,
            callback?: (result: Promise<any>) => void
        ): Promise<any>;

        /**
         * Bind a document to your component. When then document changes in firestore, your component will re-render with the latest data.
         * @param refOrPath DocumentReference or path.
         * @param options bindDoc Options.
         * @returns An object which you can pass to `removeBinding` if you want to remove the listener while the component is still mounted.
         */
        bindDoc(
            refOrPath: DocumentReference | string,
            options: bindDocOptions
        ): RebaseBinding;

        /**
         * Listen to a document, when the data changes it will invoke a callback passing it the new data from Firestore.
         * @param refOrPath DocumentReference or path.
         * @param options listenToDoc Options.
         * @returns An object which you can pass to `removeBinding` if you want to remove the listener while the component is still mounted.
         */
        listenToDoc(
            refOrPath: DocumentReference | string,
            options: listenToDocOptions
        ): RebaseBinding;

        /**
         * Bind a collection to a state property in your component. When then collection changes in firestore, your component will re-render with the latest data.
         * @param refOrPath CollectionReference or path.
         * @param options bindCollection Options.
         * @returns An object which you can pass to `removeBinding` if you want to remove the listener while the component is still mounted.
         */
        bindCollection(
            refOrPath: CollectionReference | string,
            options: bindCollectionOptions
        ): RebaseBinding;

        /**
         * Listen to a collection, when the data changes it will invoke a callback passing it the new data from Firestore.
         * @param refOrPath CollectionReference or path.
         * @param options listenToCollection Options.
         * @returns An object which you can pass to `removeBinding` if you want to remove the listener while the component is still mounted.
         */
        listenToCollection(
            refOrPath: CollectionReference | string,
            options: listenToCollectionOptions
        ): RebaseBinding;

        /**
         * Fetch either a Collection or Document.
         * @param refOrPath CollectionReference, DocumentReference or path.
         * @param options get Options.
         * @returns A Promise thats resolve with the resulting data or rejects if the document/collection does not exist or there are any read errors.
         */
        get(
            refOrPath: CollectionReference | DocumentReference | string,
            options: listenToCollectionOptions
        ): Promise<any>;

        /**
         * Add a new Document to a Collection.
         * @param refOrPath CollectionReference or path.
         * @param data The document data.
         * @param id The id for the document. If omitted, the Firestore will generate an id for you.
         * @returns A Promise thats resolve with the resulting data or rejects if the document/collection does not exist or there are any read errors.
         */
        addToCollection(
            refOrPath: CollectionReference | string,
            data: {},
            id?: string
        ): Promise<any>;

        /**
         * Update an existing document.
         * @param refOrPath DocumentReference or path.
         * @param data The document data.
         * @returns A Promise thats resolve with the resulting data or rejects if the document/collection does not exist or there are any read errors.
         */
        updateDoc(
            refOrPath: DocumentReference | string,
            data: {}
        ): Promise<any>;

        /**
         * Deletes a document.
         * @param refOrPath DocumentReference or path.
         * @param data The document data.
         * @returns A Promise thats resolve with the resulting data or rejects if the document/collection does not exist or there are any read errors.
         */
        removeDoc(
            refOrPath: DocumentReference | string,
            data: {}
        ): Promise<any>;

        /**
         * Removes documents from a collection. If no query is supplied, it will remove all the documents. If a query is supplied, it will only remove documents that match the query.
         * @param refOrPath CollectionReference or path.
         * @param options removeFromCollection Options.
         * @returns A Promise thats resolve with the resulting data or rejects if the document/collection does not exist or there are any read errors.
         */
        removeFromCollection(
            refOrPath: CollectionReference | string,
            options: removeFromCollectionOptions
        ): Promise<any>;

        /**
         * Syncs a component's local state with a document in Firestore.
         * @param refOrPath DocumentReference or path.
         * @param options removeFromCollection Options.
         * @returns A Promise thats resolve with the resulting data or rejects if the document/collection does not exist or there are any read errors.
         */
        syncDoc(
            refOrPath: DocumentReference | string,
            options: syncDocOptions
        ): RebaseBinding;

        /**
         * Clean up a listener. Listeners are automatically cleaned up when components unmount, however if you wish to remove a listener while the component is still mounted this will allow you to do that. An example would be if you want to start listening to a new document or change a query on all collection in response to a prop change.
         * @param ref The return value of syncState`, `bindToState`, `listenTo`, `listenToCollection`, `bindCollection`, `listenToDoc`, `bindDoc` or `syncDoc`.
         */
        removeBinding(ref: RebaseBinding): void;

        /**
         * Removes every Firebase/Firestore listener.
         */
        reset(): void;
    }
}

declare module "re-base" {
    /**
     * Accepts an initialized firebase database or firestore database object.
     * @param {object} firebaseDatabase Initialized firebase or firestore
     * database.
     * @return {Rebase} An instance of re-base.
     */
    export function createClass(
        firebaseDatabase:
            | firebase.database.Database
            | firebase.firestore.Firestore
    ): rebase.Rebase;
}
