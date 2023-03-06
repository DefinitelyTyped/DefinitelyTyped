import { Emitter } from './emittermixin';

export interface CollectionBindTo<T> {
    as: (Class: { new (item: T): any }) => void;
    using: (callbackOrProperty: keyof T | ((item: T) => any)) => void;
}

// tslint:disable-next-line:no-empty-interface
export default interface Collection extends Emitter {}

/**
 * Collections are ordered sets of objects. Items in the collection can be retrieved by their indexes
 * in the collection (like in an array) or by their ids.
 *
 * If an object without an `id` property is being added to the collection, the `id` property will be generated
 * automatically. Note that the automatically generated id is unique only within this single collection instance.
 *
 * By default an item in the collection is identified by its `id` property. The name of the identifier can be
 * configured through the constructor of the collection.
 *
 */
// prettier-ignore
export default class Collection<T extends Record<string, any> = Record<string, any>, I extends string = 'id'> implements Iterable<T>, Emitter {
    /**
     * Creates a new Collection instance.
     *
     * You can provide an iterable of initial items the collection will be created with:
     *
     *    const collection = new Collection( [ { id: 'John' }, { id: 'Mike' } ] );
     *
     *    console.log( collection.get( 0 ) ); // -> { id: 'John' }
     *    console.log( collection.get( 1 ) ); // -> { id: 'Mike' }
     *    console.log( collection.get( 'Mike' ) ); // -> { id: 'Mike' }
     *
     * Or you can first create a collection and then add new items using the {@link #add} method:
     *
     *    const collection = new Collection();
     *
     *    collection.add( { id: 'John' } );
     *    console.log( collection.get( 0 ) ); // -> { id: 'John' }
     *
     * Whatever option you choose, you can always pass a configuration object as the last argument
     * of the constructor:
     *
     *    const emptyCollection = new Collection( { idProperty: 'name' } );
     *    emptyCollection.add( { name: 'John' } );
     *    console.log( collection.get( 'John' ) ); // -> { name: 'John' }
     *
     *    const nonEmptyCollection = new Collection( [ { name: 'John' } ], { idProperty: 'name' } );
     *    nonEmptyCollection.add( { name: 'George' } );
     *    console.log( collection.get( 'George' ) ); // -> { name: 'George' }
     *    console.log( collection.get( 'John' ) ); // -> { name: 'John' }
     */
    constructor(options?: { idProperty: I });
    constructor(initialItems?: T[], options?: { idProperty: I });
    /**
     * The number of items available in the collection.
     *
     */
    readonly length: number;
    /**
     * Returns the first item from the collection or null when collection is empty.
     *
     */
    readonly first: (T & { [x in I]: string }) | null;
    /**
     * Returns the last item from the collection or null when collection is empty.
     *
     */
    readonly last: (T & { [x in I]: string }) | null;
    /**
     * Adds an item into the collection.
     *
     * If the item does not have an id, then it will be automatically generated and set on the item.
     *
     * is pushed to the collection when `index` not specified.
     */
    add(item: T, index?: number): this;
    /**
     * Adds multiple items into the collection.
     *
     * Any item not containing an id will get an automatically generated one.
     *
     */
    addMany(items: T[], index?: number): this;
    /**
     * Gets an item by its ID or index.
     *
     */
    get(idOrIndex: string | number): (T & { [x in I]: string }) | null;
    /**
     * Returns a Boolean indicating whether the collection contains an item.
     *
     */
    has(itemOrId: T | string): boolean;
    /**
     * Gets an index of an item in the collection.
     * When an item is not defined in the collection, the index will equal -1.
     *
     */
    getIndex(idOrItem: string | T): number;
    /**
     * Removes an item from the collection.
     *
     */
    remove(subject: T | number | string): T & { [x in I]: string };
    /**
     * Executes the callback for each item in the collection and composes an array or values returned by this callback.
     *
     */
    map<U>(
        callbackfn: (value: T & { [x in I]: string }, index: number, array: Array<T & { [x in I]: string }>) => U,
        thisArg?: any,
    ): U[];
    /**
     * Finds the first item in the collection for which the `callback` returns a true value.
     *
     */
    find<S extends T & { [x in I]: string }>(
        predicate: (this: undefined, value: S, index: number, obj: S[]) => boolean,
        thisArg?: any,
    ): S | undefined;
    /**
     * Returns an array with items for which the `callback` returned a true value.
     *
     */
    filter<S extends T & { [x in I]: string }>(
        predicate: (value: S, index: number, array: S[]) => boolean,
        thisArg?: any,
    ): S[];
    /**
     * Removes all items from the collection and destroys the binding created using
     * {@link #bindTo}.
     *
     */
    clear(): void;
    /**
     * Binds and synchronizes the collection with another one.
     *
     * The binding can be a simple factory:
     *
     *  class FactoryClass {
     *   constructor( data ) {
     *    this.label = data.label;
     *   }
     *  }
     *
     *  const source = new Collection( { idProperty: 'label' } );
     *  const target = new Collection();
     *
     *  target.bindTo( source ).as( FactoryClass );
     *
     *  source.add( { label: 'foo' } );
     *  source.add( { label: 'bar' } );
     *
     *  console.log( target.length ); // 2
     *  console.log( target.get( 1 ).label ); // 'bar'
     *
     *  source.remove( 0 );
     *  console.log( target.length ); // 1
     *  console.log( target.get( 0 ).label ); // 'bar'
     *
     * or the factory driven by a custom callback:
     *
     *  class FooClass {
     *   constructor( data ) {
     *    this.label = data.label;
     *   }
     *  }
     *
     *  class BarClass {
     *   constructor( data ) {
     *    this.label = data.label;
     *   }
     *  }
     *
     *  const source = new Collection( { idProperty: 'label' } );
     *  const target = new Collection();
     *
     *  target.bindTo( source ).using( ( item ) => {
     *   if ( item.label == 'foo' ) {
     *    return new FooClass( item );
     *   } else {
     *    return new BarClass( item );
     *   }
     *  } );
     *
     *  source.add( { label: 'foo' } );
     *  source.add( { label: 'bar' } );
     *
     *  console.log( target.length ); // 2
     *  console.log( target.get( 0 ) instanceof FooClass ); // true
     *  console.log( target.get( 1 ) instanceof BarClass ); // true
     *
     * or the factory out of property name:
     *
     *  const source = new Collection( { idProperty: 'label' } );
     *  const target = new Collection();
     *
     *  target.bindTo( source ).using( 'label' );
     *  console.log(options);
     *
     *  source.add( { label: { value: 'foo' } } );
     *  source.add( { label: { value: 'bar' } } );
     *
     *  console.log( target.length ); // 2
     *  console.log( target.get( 0 ).value ); // 'foo'
     *  console.log( target.get( 1 ).value ); // 'bar'
     *
     * It's possible to skip specified items by returning falsy value:
     *
     *  const source = new Collection();
     *  const target = new Collection();
     *
     *  target.bindTo( source ).using( item => {
     *   if ( item.hidden ) {
     *    return null;
     *   }
     *
     *   return item;
     *  } );
     *
     *  source.add( { hidden: true } );
     *  source.add( { hidden: false } );
     *
     *  console.log( source.length ); // 2
     *  console.log( target.length ); // 1
     *
     * **Note**: {@link #clear} can be used to break the binding.
     *
     */
    bindTo<T extends Record<string, any>, I extends string>(
        externalCollection: Collection<T, I>,
    ): CollectionBindTo<T & { [x in I]: string }>;
    /**
     * Iterable interface.
     *
     */
    [Symbol.iterator](): Iterator<T & { [x in I]: string }>;
}
