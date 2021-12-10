import { Emitter, EmitterMixinDelegateChain } from '@ckeditor/ckeditor5-utils/src/emittermixin';
import EventInfo from '@ckeditor/ckeditor5-utils/src/eventinfo';
import { PriorityString } from '@ckeditor/ckeditor5-utils/src/priorities';
import DocumentFragment from './documentfragment';
import DocumentSelection from './documentselection';
import Element from './element';
import LivePosition from './liveposition';
import LiveRange from './liverange';
import Node from './node';
import Position from './position';
import Range from './range';
import RootElement from './rootelement';
import Selection from './selection';
import Text from './text';
import TextProxy from './textproxy';

export default class MarkerCollection implements Iterable<Marker>, Emitter {
    [Symbol.iterator](): Iterator<Marker>;
    destroy(): void;
    get(markerName: string): Marker | null;
    getMarkersAtPosition(position: Position): Generator<Marker>;
    getMarkersGroup(prefix: string): Generator<Marker>;
    getMarkersIntersectingRange(range: Range): Generator<Marker>;
    has(markerName: string | Marker): boolean;

    on<K extends string>(
        event: K,
        callback: (info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (ev: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}

/**
 * `Marker` is a continuous parts of model (like a range), is named and represent some kind of information about marked
 * part of model document. In contrary to {@link module:engine/model/node~Node nodes}, which are building blocks of
 * model document tree, markers are not stored directly in document tree but in
 * {@link module:engine/model/model~Model#markers model markers' collection}. Still, they are document data, by giving
 * additional meaning to the part of a model document between marker start and marker end.
 *
 * In this sense, markers are similar to adding and converting attributes on nodes. The difference is that attribute is
 * connected with a given node (e.g. a character is bold no matter if it gets moved or content around it changes).
 * Markers on the other hand are continuous ranges and are characterized by their start and end position. This means that
 * any character in the marker is marked by the marker. For example, if a character is moved outside of marker it stops being
 * "special" and the marker is shrunk. Similarly, when a character is moved into the marker from other place in document
 * model, it starts being "special" and the marker is enlarged.
 *
 * Another upside of markers is that finding marked part of document is fast and easy. Using attributes to mark some nodes
 * and then trying to find that part of document would require traversing whole document tree. Marker gives instant access
 * to the range which it is marking at the moment.
 *
 * Markers are built from a name and a range.
 *
 * Range of the marker is updated automatically when document changes, using
 * {@link module:engine/model/liverange~LiveRange live range} mechanism.
 *
 * Name is used to group and identify markers. Names have to be unique, but markers can be grouped by
 * using common prefixes, separated with `:`, for example: `user:john` or `search:3`. That's useful in term of creating
 * namespaces for custom elements (e.g. comments, highlights). You can use this prefixes in
 * {@link module:engine/model/markercollection~MarkerCollection#event:update} listeners to listen on changes in a group of markers.
 * For instance: `model.markers.on( 'update:user', callback );` will be called whenever any `user:*` markers changes.
 *
 * There are two types of markers.
 *
 * 1. Markers managed directly, without using operations. They are added directly by {@link module:engine/model/writer~Writer}
 * to the {@link module:engine/model/markercollection~MarkerCollection} without any additional mechanism. They can be used
 * as bookmarks or visual markers. They are great for showing results of the find, or select link when the focus is in the input.
 *
 * 1. Markers managed using operations. These markers are also stored in {@link module:engine/model/markercollection~MarkerCollection}
 * but changes in these markers is managed the same way all other changes in the model structure - using operations.
 * Therefore, they are handled in the undo stack and synchronized between clients if the collaboration plugin is enabled.
 * This type of markers is useful for solutions like spell checking or comments.
 *
 * Both type of them should be added / updated by {@link module:engine/model/writer~Writer#addMarker}
 * and removed by {@link module:engine/model/writer~Writer#removeMarker} methods.
 *
 *    model.change( ( writer ) => {
 *       const marker = writer.addMarker( name, { range, usingOperation: true } );
 *
 *       // ...
 *
 *       writer.removeMarker( marker );
 *    } );
 *
 * See {@link module:engine/model/writer~Writer} to find more examples.
 *
 * Since markers need to track change in the document, for efficiency reasons, it is best to create and keep as little
 * markers as possible and remove them as soon as they are not needed anymore.
 *
 * Markers can be downcasted and upcasted.
 *
 * Markers downcast happens on {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:addMarker} and
 * {@link module:engine/conversion/downcastdispatcher~DowncastDispatcher#event:removeMarker} events.
 * Use {@link module:engine/conversion/downcasthelpers downcast converters} or attach a custom converter to mentioned events.
 * For {@link module:engine/controller/datacontroller~DataController data pipeline}, marker should be downcasted to an element.
 * Then, it can be upcasted back to a marker. Again, use {@link module:engine/conversion/upcasthelpers upcast converters} or
 * attach a custom converter to {@link module:engine/conversion/upcastdispatcher~UpcastDispatcher#event:element}.
 *
 * `Marker` instances are created and destroyed only by {@link ~MarkerCollection MarkerCollection}.
 */
export class Marker implements Emitter {
    constructor(name: string, liveRange: LiveRange, managedUsingOperations: boolean, affectsData: boolean);
    readonly name: string;
    getEnd(): Position;
    getRange(): Range;
    getStart(): Position;
    is(type: 'position' | 'model:position'): this is Position | LivePosition;
    is(type: 'livePosition' | 'model:livePosition'): this is LivePosition;
    is(type: 'range' | 'model:range'): this is Range | LiveRange;
    is(type: 'liveRange' | 'model:liveRange'): this is LiveRange;
    is(type: 'marker' | 'model:marker'): this is Marker;
    is(type: '$textProxy' | 'model:$textProxy' | 'textProxy' | 'model:textProxy'): this is TextProxy;
    is(type: 'documentFragment' | 'model:documentFragment'): this is DocumentFragment;
    is(type: 'selection' | 'model:selection'): this is Selection | DocumentSelection;
    is(type: 'documentSelection' | 'model:documentSelection'): this is DocumentSelection;
    is(type: 'node' | 'model:node'): this is Node | Element | Text | RootElement;
    is(type: '$text' | 'model:$text' | 'text' | 'model:text'): this is Text;
    is(type: 'element' | 'model:element'): this is Element | RootElement;
    is(type: 'rootElement' | 'model:rootElement'): this is RootElement;
    is<K extends string>(type: 'element' | 'model:element', name: K): this is (Element | RootElement) & { name: K };
    is<K extends string>(type: 'rootElement' | 'model:rootElement', name: K): this is RootElement & { name: K };
    is(type: string, name?: string): boolean;

    on<K extends string>(
        event: K,
        callback: (info: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    once<K extends string>(
        event: K,
        callback: (ev: EventInfo<this, K>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    off<K extends string>(event: K, callback?: (info: EventInfo<this, K>, ...args: any[]) => void): void;
    listenTo<P extends string, E extends Emitter>(
        emitter: E,
        event: P,
        callback: (info: EventInfo<E, P>, ...args: any[]) => void,
        options?: { priority?: number | PriorityString | undefined },
    ): void;
    stopListening<E extends Emitter, P extends string>(
        emitter?: E,
        event?: P,
        callback?: (info: EventInfo<E, P>, ...args: any[]) => void,
    ): void;
    fire(eventOrInfo: string | EventInfo, ...args: any[]): unknown;
    delegate(...events: string[]): EmitterMixinDelegateChain;
    stopDelegating(event?: string, emitter?: Emitter): void;
}
