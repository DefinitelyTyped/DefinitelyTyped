/**
 * Returns true if the specified string is prefixed by one of an array of
 * possible prefixes.
 *
 * @param string   String to check.
 * @param prefixes Possible prefixes.
 *
 * @return Whether string has prefix.
 */
export function hasPrefix(string: string, prefixes: string[]): boolean;
/**
 * Serializes a React element to string.
 *
 * @param element       Element to serialize.
 * @param context       Context object.
 * @param legacyContext Legacy context object.
 *
 * @return Serialized element.
 */
export function renderElement(element: import('react').ReactNode, context?: any, legacyContext?: any): string;
/**
 * Serializes a native component type to string.
 *
 * @param type          Native component type to serialize, or null if
 *                      rendering as fragment of children content.
 * @param props         Props object.
 * @param context       Context object.
 * @param legacyContext Legacy context object.
 *
 * @return  Serialized element.
 */
export function renderNativeComponent(type: string, props: any, context?: any, legacyContext?: any): string;
/**
 * Serializes a non-native component type to string.
 *
 * @param Component     Component type to serialize.
 * @param props         Props object.
 * @param context       Context object.
 * @param legacyContext Legacy context object.
 *
 * @return Serialized element
 */
export function renderComponent(
    Component: import('react').ComponentType<{}>,
    props: any,
    context?: any,
    legacyContext?: any,
): string;
/**
 * Renders a props object as a string of HTML attributes.
 *
 * @param props Props object.
 *
 * @return Attributes string.
 */
export function renderAttributes(props: any): string;
/**
 * Renders a style object as a string attribute value.
 *
 * @param style Style object.
 *
 * @return Style attribute value.
 */
export function renderStyle(style: any): string;
export default renderElement;
export type WPComponent = import('react').ComponentClass<{}, any> | import('react').FunctionComponent<{}>;
export type WPElement = import('react').ReactElement<
    any,
    | string
    | ((props: any) => import('react').ReactElement<any, any>)
    | (new (props: any) => import('react').Component<any, any, any>)
>;
