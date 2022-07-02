import { Options as WebIDLConversionOptions } from 'webidl-conversions';
import { implementation as DOMExceptionImpl } from './lib/DOMException-impl';
import DOMException = require('./index');

/**
 * Checks whether `obj` is a `DOMException` object with an implementation
 * provided by this package.
 */
export function is(obj: unknown): obj is DOMException;

/**
 * Checks whether `obj` is a `DOMException` WebIDL2JS implementation object
 * provided by this package.
 */
export function isImpl(obj: unknown): obj is DOMExceptionImpl;

/**
 * Converts the `DOMException` wrapper into a `DOMExceptionImpl` object.
 *
 * @throws {TypeError} If `obj` is not a `DOMException` wrapper instance provided by this package.
 */
export function convert(obj: unknown, options?: WebIDLConversionOptions): DOMExceptionImpl;

/**
 * Creates a new `DOMException` instance.
 *
 * @throws {Error} If the `globalObject` doesn't have a WebIDL2JS constructor
 *         registry or a `DOMException` constructor provided by this package
 *         in the WebIDL2JS constructor registry.
 */
export function create(
    globalObject: object,
    [message, name]?: [string?, string?],
    privateData?: {},
): DOMException;

/**
 * Calls `create()` and returns the internal `DOMExceptionImpl`.
 *
 * @throws {Error} If the `globalObject` doesn't have a WebIDL2JS constructor
 *         registry or a `DOMException` constructor provided by this package
 *         in the WebIDL2JS constructor registry.
 */
export function createImpl(
    globalObject: object,
    [message, name]?: [string?, string?],
    privateData?: {},
): DOMExceptionImpl;

/**
 * Initializes the `DOMException` instance, called by `create()`.
 *
 * Useful when manually sub-classing a non-constructable wrapper object.
 */
export function setup<T extends DOMException>(
    obj: T,
    globalObject: object,
    [message, name]?: [string?, string?],
    privateData?: {},
): T;

/**
 * Installs the `DOMException` constructor onto the `globalObject`.
 *
 * @throws {Error} If the target `globalObject` doesn't have an `Error` constructor.
 */
export function install(globalObject: object): void;
