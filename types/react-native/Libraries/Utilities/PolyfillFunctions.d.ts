// Based on https://github.com/facebook/react-native/blob/main/packages/react-native/Libraries/Utilities/PolyfillFunctions.js

/**
 * Sets an object's property. If a property with the same name exists, this will
 * replace it but maintain its descriptor configuration. The property will be
 * replaced with a lazy getter.
 *
 * In DEV mode the original property value will be preserved as `original[PropertyName]`
 * so that, if necessary, it can be restored. For example, if you want to route
 * network requests through DevTools (to trace them):
 *
 *   global.XMLHttpRequest = global.originalXMLHttpRequest;
 *
 * @see https://github.com/facebook/react-native/issues/934
 */
export function polyfillObjectProperty<T>(
    object: {},
    name: string,
    getValue: () => T,
);

export function polyfillGlobal<T>(name: string, getValue: () => T);
