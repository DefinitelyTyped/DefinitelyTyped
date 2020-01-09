/** @internal */
declare class DOMExceptionImpl {
	constructor(globalObject: object, [message, name]: [string?, string?], privateData?: {});

	message: string;
	name: string;

	readonly code: string;
}
export { DOMExceptionImpl as implementation };

/**
 * Adds the `stack` property to the associated wrapper.
 *
 * @internal
 */
export function init(impl: DOMExceptionImpl): void;
