/**
 * Concatenate two or more React children objects.
 *
 * @param  childrenArguments Array of children arguments (array of arrays/strings/objects) to concatenate.
 *
 * @return  The concatenated value.
 */
export function concatChildren(...childrenArguments: any[]): any[];
/**
 * Switches the nodeName of all the elements in the children object.
 *
 * @param  children Children object.
 * @param   nodeName Node name.
 *
 * @return  The updated children object.
 */
export function switchChildrenNodeName(children: any, nodeName: string): any;
/**
 * Object containing a React element.
 */
export type WPElement = import('react').ReactElement<
    any,
    string | ((props: any) => import('react').ReactElement<any, any>) | (new (props: any) => Component<any, any>)
>;
/**
 * Object containing a React component.
 */
export type WPComponent = import('react').ComponentClass<{}, any> | import('react').FunctionComponent<{}>;
/**
 * Object containing a React synthetic event.
 */
export type WPSyntheticEvent = import('react').SyntheticEvent<Element, Event>;
import {
    Children,
    cloneElement,
    Component,
    createContext,
    createElement,
    createRef,
    forwardRef,
    Fragment,
    isValidElement,
    memo,
    StrictMode,
    useCallback,
    useContext,
    useDebugValue,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    lazy,
    Suspense,
} from 'react';
export {
    Children,
    cloneElement,
    Component,
    createContext,
    createElement,
    createRef,
    forwardRef,
    Fragment,
    isValidElement,
    memo,
    StrictMode,
    useCallback,
    useContext,
    useDebugValue,
    useEffect,
    useImperativeHandle,
    useLayoutEffect,
    useMemo,
    useReducer,
    useRef,
    useState,
    lazy,
    Suspense,
};
