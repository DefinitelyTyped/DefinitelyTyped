import { Interface as ReadlineInterface, Key } from 'readline';
import { Observable } from 'rxjs';

/**
 * Provides a description about a key.
 */
interface KeyDescriptor {
    /**
     * The value of the key.
     */
    value: string;

    /**
     * The description of the key.
     */
    key: Key;
}

/**
 * A set of events.
 */
interface Events {
    /**
     * The event-flow of the `line`-event of the {@link ReadlineInterface `readline.Interface`}-object.
     */
    line: Observable<string>;

    /**
     * The event-flow of the `keypress`-event of the {@link ReadlineInterface `readline.Interface`}-object.
     */
    keypress: Observable<KeyDescriptor>;

    /**
     * The event-flow of the `normalizedUpKey`-event.
     */
    normalizedUpKey: Observable<KeyDescriptor>;

    /**
     * The event-flow of the `normalizedDownKey`-event.
     */
    normalizedDownKey: Observable<KeyDescriptor>;

    /**
     * The event-flow of the `numberKey`-event.
     */
    numberKey: Observable<KeyDescriptor>;

    /**
     * The event-flow of the `spaceKey`-event.
     */
    spaceKey: Observable<KeyDescriptor>;

    /**
     * The event-flow of the `aKey`-event.
     */
    aKey: Observable<KeyDescriptor>;

    /**
     * The event-flow of the `iKey`-event.
     */
    iKey: Observable<KeyDescriptor>;
}

/**
 * Observes a {@link ReadlineInterface `readline.Interface`}-object.
 *
 * @param readline
 * The readline-object to observe.
 */
export default function(readline: ReadlineInterface): Events;

export {};
