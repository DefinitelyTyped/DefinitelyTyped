export interface RebaseBinding {
    context: object;
    endpoint: string;
    id: number;
    method: string;
}

export interface SyncStateOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * The state property you want to sync with Firebase; can be an
     * arbitrarily nested property a là `foo.bar`.
     */
    state: string;

    /**
     * A default value to set when the Firebase endpoint has no value (i.e.,
     * on init) (use this if you want a value other than an empty object or
     * empty array)
     */
    defaultValue?: string | boolean | number | object | undefined;

    /**
     * Returns the Firebase data at the specified endpoint as an Array
     * instead of an Object.
     */
    asArray?: boolean | undefined;

    /**
     * Will keep any firebase generated keys intact when manipulating data
     * using the asArray option.
     */
    keepKeys?: boolean | undefined;

    /**
     * Queries to be used with your read operations. See
     * [Query Options](https://github.com/tylermcginnis/re-base#queries)
     * for more details.
     */
    queries?: object | undefined;

    /**
     * The callback function that will be invoked when the initial listener
     * is established with Firebase. Typically used (with syncState) to
     * change this.state.loading to false.
     */
    then?: (() => void) | undefined;

    /**
     * A callback function that will be invoked if the current user does
     * not have read or write permissions at the location.
     */
    onFailure?: (() => void) | undefined;
}

export interface BindToStateOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * The state property you want to sync with Firebase; can be an
     * arbitrarily nested property a là `foo.bar` (no arrays).
     */
    state: string;

    /**
     * Returns the Firebase data at the specified endpoint as an Array
     * instead of an Object.
     */
    asArray?: boolean | undefined;

    /**
     * Queries to be used with your read operations. See
     * [Query Options](https://github.com/tylermcginnis/re-base#queries)
     * for more details.
     */
    queries?: object | undefined;

    /**
     * The callback function that will be invoked when the initial listener
     * is established with Firebase. Typically used (with bindToState) to
     * change this.state.loading to false.
     */
    then?: (() => void) | undefined;

    /**
     * A callback function that will be invoked if the current user does
     * not have read permissions at the location.
     */
    onFailure?: (() => void) | undefined;
}

export interface ListenToOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * Returns the Firebase data at the specified endpoint as an Array
     * instead of an Object.
     */
    asArray?: boolean | undefined;

    /**
     * The callback function that will be invoked with the data from the
     * specified endpoint when the endpoint changes.
     */
    then: (result: any) => void;

    /**
     * The callback function that will be invoked if the current user does
     * not have read permissions at the location.
     */
    onFailure?: ((error: any) => void) | undefined;

    /**
     * Queries to be used with your read operations. See
     * [Query Options](https://github.com/tylermcginnis/re-base#queries)
     * for more details.
     */
    queries?: object | undefined;
}

export interface FetchOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * Returns the Firebase data at the specified endpoint as an Array
     * instead of an Object.
     */
    asArray?: boolean | undefined;

    /**
     * The callback function that will be invoked with the data from the
     * specified endpoint when the endpoint changes.
     */
    then?: ((result: any) => void) | undefined;

    /**
     * The callback function that will be invoked with an error that occurs
     * reading data from the specified endpoint.
     */
    onFailure?: (() => void) | undefined;

    /**
     * Queries to be used with your read operations. See
     * [Query Options](https://github.com/tylermcginnis/re-base#queries)
     * for more details.
     */
    queries?: object | undefined;
}

export interface PostOptions {
    /**
     * The data you're wanting to persist to Firebase.
     */
    data: any;

    /**
     * A callback that will get invoked once the new data has been saved to
     * Firebase. If there is an error, it will be the only argument to this
     * function.
     */
    then?: ((result: any) => void) | undefined;
}

export interface PushOptions {
    /**
     * The data you're wanting to persist to Firebase.
     */
    data: any;

    /**
     * A callback that will get invoked once the new data has been saved to
     * Firebase. If there is an error, it will be the only argument to this
     * function.
     */
    then?: ((result: any) => void) | undefined;
}

export interface UpdateOptions {
    /**
     * The data you're wanting to persist to Firebase.
     */
    data: any;

    /**
     * A callback that will get invoked once the new data has been saved to
     * Firebase. If there is an error, it will be the only argument to this
     * function.
     */
    then?: ((result: any) => void) | undefined;
}

export interface bindDocOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * A property name on your state to bind your document to, if omitted
     * the document will be merged into your existing state.
     */
    state?: string | undefined;

    /**
     * A callback that will be called when the listener is set, use for
     * loading indicators.
     */
    then?: (() => void) | undefined;

    /**
     * A callback that will be called with any errors such as permissions
     * errors.
     */
    onFailure?: (() => void) | undefined;
}

export interface listenToDocOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * A callback that will be called when the listener is set, use for
     * loading indicators.
     */
    then?: (() => void) | undefined;

    /**
     * A callback that will be called with any errors such as permissions
     * errors.
     */
    onFailure?: (() => void) | undefined;
}

export interface bindCollectionOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * The state property to bind the collection to.
     */
    state?: string | undefined;

    /**
     * A function that receives the created ref as its only argument. You
     * can chain any Firestore queries you want to perform. See
     * [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
     */
    query?: (() => void) | undefined;

    /**
     * Will embed firestore generated document ids inside each document in
     * your collections on the `id` property.
     */
    withIds?: boolean | undefined;

    /**
     * will embed the DocumentReference inside each document in your
     * collection on the `ref` property.
     */
    withRefs?: boolean | undefined;

    /**
     * A callback that will be called when the listener is set, use for
     * loading indicators.
     */
    then?: (() => void) | undefined;

    /**
     * A callback that will be called with any errors such as permissions
     * errors.
     */
    onFailure?: (() => void) | undefined;
}

export interface listenToCollectionOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * A callback that will be called with the data.
     */
    then: () => void;

    /**
     * A function that receives the created ref as its only argument. You
     * can chain any Firestore queries you want to perform. See
     * [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
     */
    query?: (() => void) | undefined;

    /**
     * Will embed firestore generated document ids inside each document in
     * your collections on the `id` property.
     */
    withIds?: boolean | undefined;

    /**
     * will embed the DocumentReference inside each document in your
     * collection on the `ref` property.
     */
    withRefs?: boolean | undefined;

    /**
     * A callback that will be called with any errors such as permissions
     * errors.
     */
    onFailure?: (() => void) | undefined;
}

export interface getOptions {
    /**
     * A function that receives the created ref as its only argument. You
     * can chain any Firestore queries you want to perform. See
     * [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
     */
    query?: (() => void) | undefined;

    /**
     * Will embed firestore generated document ids inside each document in
     * your collections on the `id` property.
     */
    withIds?: boolean | undefined;

    /**
     * will embed the DocumentReference inside each document in your
     * collection on the `ref` property.
     */
    withRefs?: boolean | undefined;
}

export interface removeFromCollectionOptions {
    /**
     * A function that receives the created ref as its only argument. You
     * can chain any Firestore queries you want to perform. See
     * [Using Firestore Queries](https://github.com/tylermcginnis/re-base#firestorequeries).
     */
    query?: (() => void) | undefined;
}

export interface syncDocOptions {
    /**
     * The context of your component.
     */
    context: object;

    /**
     * The state property to sync.
     */
    state: string;

    /**
     * A callback that will be called when the listener is set, use for
     * loading indicators.
     */
    then?: (() => void) | undefined;

    /**
     * A callback that will be called with any errors such as permissions
     * errors.
     */
    onFailure?: (() => void) | undefined;
}

export interface Rebase {
    /**
     * This property contains the initialized firebase app that was passed
     * into re-base. You can access any of the firebase services that you
     * are using off this object. For instance, if you want to use some
     * firebase database methods that re-base doesn't have helpers for or
     * if you are using the auth service and want to quickly access it off
     * of re-base.
     */
    initializedApp: object;

    /**
     * This property contains an object that you can use when adding data
     * that will be converted to a timestamp by Firebase. See
     * [the docs](https://firebase.google.com/docs/reference/js/firebase.database.ServerValue)
     * for more info.
     */
    timestamp: object;

    /**
     * Allows you to set up two way data binding between your component's
     * state and your Firebase. Whenever your Firebase changes, your
     * component's state will change. Whenever your component's state
     * changes, Firebase will change.
     * @param endpoint The relative Firebase endpoint to which you'd like
     * to bind your component's state.
     * @param options syncState Options.
     * @returns An object which you can pass to `removeBinding` if you want
     * to remove the listener while the component is still mounted.
     */
    syncState(endpoint: string, options: SyncStateOptions): RebaseBinding;

    /**
     * One way data binding from Firebase to your component's state. Allows
     * you to bind a component's state property to a Firebase endpoint so
     * whenever that Firebase endpoint changes, your component's state will
     * be updated with that change.
     * @param endpoint The relative Firebase endpoint that you'd like to
     * bind to your component's state.
     * @param options bindToState Options.
     * @returns An object which you can pass to `removeBinding` if you want
     * to remove the listener while the component is still mounted.
     */
    bindToState(endpoint: string, options: BindToStateOptions): RebaseBinding;

    /**
     * Allows you to listen to Firebase endpoints without binding those
     * changes to a state property. Instead, a callback will be invoked
     * with the newly updated data.
     * @param endpoint The relative Firebase endpoint which contains the
     * data with which you'd like to invoke your callback function.
     * @param options listenTo Options.
     * @returns An object which you can pass to `removeBinding` when your
     * component unmounts to remove the Firebase listeners.
     */
    listenTo(endpoint: string, options: ListenToOptions): RebaseBinding;

    /**
     * Allows you to retrieve the data from a Firebase endpoint just once
     * without subscribing or listening for data changes.
     * @param endpoint The relative Firebase endpoint which contains the
     * data you're wanting to fetch.
     * @param options fetch Options.
     * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise)
     * which resolves when the write is complete and rejects if there is an
     * error.
     */
    fetch(endpoint: string, options: FetchOptions): Promise<any>;

    /**
     * Allows you to update a Firebase endpoint with new data. *Replace all
     * the data at this endpoint with the new data*.
     * @param endpoint The relative Firebase endpoint that you'd like to
     * update with the new data.
     * @param options post Options.
     * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise)
     * which resolves when the write is complete and rejects if there is an
     * error.
     */
    post(endpoint: string, options: PostOptions): Promise<any>;

    /**
     * Allows you to add data to a Firebase endpoint. *Adds data to a child
     * of the endpoint with a new Firebase push key*.
     * @param endpoint The relative Firebase endpoint that you'd like to
     * push the new data to.
     * @param options push Options.
     * @returns A Firebase [ThenableReference](https://firebase.google.com/docs/reference/js/firebase.database.ThenableReference)
     * which is defined by Firebase as a "Combined Promise and reference;
     * resolves when write is complete, but can be used immediately as the
     * reference to the child location."
     */
    push(endpoint: string, options: PushOptions): Promise<any>;

    /**
     * Allows you to update data at a Firebase endpoint changing only the
     * properties you pass to it. **Warning: calling update with
     * `options.data` being null will remove all the data at that
     * endpoint**.
     * @param endpoint The relative Firebase endpoint that you'd like to
     * update.
     * @param options update Options.
     * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise)
     * which resolves when the write is complete and rejects if there is an
     * error.
     */
    update(endpoint: string, options: UpdateOptions): Promise<any>;

    /**
     * Allows you to delete all data at the endpoint location.
     * @param endpoint The relative Firebase endpoint that you'd like to
     * delete data from.
     * @param callback A callback that will get invoked once the data is
     * successfully removed Firebase. If there is an error, it will be the
     * only argument to this function.
     * @returns A Firebase [Promise](https://firebase.google.com/docs/reference/js/firebase.Promise)
     * which resolves when the write is complete and rejects if there is an
     * error.
     */
    remove(
        endpoint: string,
        callback?: (result: Promise<any>) => void,
    ): Promise<any>;

    /**
     * Bind a document to your component. When then document changes in
     * firestore, your component will re-render with the latest data.
     * @param refOrPath DocumentReference or path.
     * @param options bindDoc Options.
     * @returns An object which you can pass to `removeBinding` if you want
     * to remove the listener while the component is still mounted.
     */
    bindDoc(refOrPath: object | string, options: bindDocOptions): object;

    /**
     * Listen to a document, when the data changes it will invoke a
     * callback passing it the new data from Firestore.
     * @param refOrPath DocumentReference or path.
     * @param options listenToDoc Options.
     * @returns An object which you can pass to `removeBinding` if you want
     * to remove the listener while the component is still mounted.
     */
    listenToDoc(
        refOrPath: object | string,
        options: listenToDocOptions,
    ): object;

    /**
     * Bind a collection to a state property in your component. When then
     * collection changes in firestore, your component will re-render with
     * the latest data.
     * @param refOrPath CollectionReference or path.
     * @param options bindCollection Options.
     * @returns An object which you can pass to `removeBinding` if you want
     * to remove the listener while the component is still mounted.
     */
    bindCollection(
        refOrPath: object | string,
        options: bindCollectionOptions,
    ): RebaseBinding;

    /**
     * Listen to a collection, when the data changes it will invoke a
     * callback passing it the new data from Firestore.
     * @param refOrPath CollectionReference or path.
     * @param options listenToCollection Options.
     * @returns An object which you can pass to `removeBinding` if you want
     * to remove the listener while the component is still mounted.
     */
    listenToCollection(
        refOrPath: object | string,
        options: listenToCollectionOptions,
    ): RebaseBinding;

    /**
     * Fetch either a Collection or Document.
     * @param refOrPath CollectionReference, DocumentReference or path.
     * @param options get Options.
     * @returns A Promise thats resolve with the resulting data or rejects
     * if the document/collection does not exist or there are any read
     * errors.
     */
    get(
        refOrPath: object | object | string,
        options: listenToCollectionOptions,
    ): Promise<any>;

    /**
     * Add a new Document to a Collection.
     * @param refOrPath CollectionReference or path.
     * @param data The document data.
     * @param id The id for the document. If omitted, the Firestore will
     * generate an id for you.
     * @returns A Promise thats resolve with the resulting data or rejects
     * if the document/collection does not exist or there are any read
     * errors.
     */
    addToCollection(
        refOrPath: object | string,
        data: object,
        id?: string,
    ): Promise<any>;

    /**
     * Update an existing document.
     * @param refOrPath DocumentReference or path.
     * @param data The document data.
     * @returns A Promise thats resolve with the resulting data or rejects
     * if the document/collection does not exist or there are any read
     * errors.
     */
    updateDoc(refOrPath: object | string, data: object): Promise<any>;

    /**
     * Deletes a document.
     * @param refOrPath DocumentReference or path.
     * @param data The document data.
     * @returns A Promise thats resolve with the resulting data or rejects
     * if the document/collection does not exist or there are any read
     * errors.
     */
    removeDoc(refOrPath: object | string, data: object): Promise<any>;

    /**
     * Removes documents from a collection. If no query is supplied, it
     * will remove all the documents. If a query is supplied, it will only
     * remove documents that match the query.
     * @param refOrPath CollectionReference or path.
     * @param options removeFromCollection Options.
     * @returns A Promise thats resolve with the resulting data or rejects
     * if the document/collection does not exist or there are any read
     * errors.
     */
    removeFromCollection(
        refOrPath: object | string,
        options: removeFromCollectionOptions,
    ): Promise<any>;

    /**
     * Syncs a component's local state with a document in Firestore.
     * @param refOrPath DocumentReference or path.
     * @param options removeFromCollection Options.
     * @returns A Promise thats resolve with the resulting data or rejects
     * if the document/collection does not exist or there are any read
     * errors.
     */
    syncDoc(refOrPath: object | string, options: syncDocOptions): object;

    /**
     * Clean up a listener. Listeners are automatically cleaned up when
     * components unmount, however if you wish to remove a listener while
     * the component is still mounted this will allow you to do that. An
     * example would be if you want to start listening to a new document or
     * change a query on all collection in response to a prop change.
     * @param ref The return value of syncState`, `bindToState`, `listenTo`,
     * `listenToCollection`, `bindCollection`, `listenToDoc`, `bindDoc` or
     * `syncDoc`.
     */
    removeBinding(ref: object): void;

    /**
     * Removes every Firebase/Firestore listener.
     */
    reset(): void;
}

/**
 * Accepts an initialized firebase/firestore database object.
 * @param database Initialized firebase/firestore
 * database.
 * @return An instance of re-base.
 */
export function createClass(database: object): Rebase;
