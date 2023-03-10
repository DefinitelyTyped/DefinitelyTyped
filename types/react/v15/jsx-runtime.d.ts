import { ElementType, Key, ReactElement, ReactNode } from '.';

interface ExoticComponent<P = {}> {
    /**
     * **NOTE**: Exotic components are not callable.
     */
    (props: P): ReactElement | null;
    readonly $$typeof: symbol;
}

export const Fragment: ExoticComponent<{ children?: ReactNode | undefined }>;

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsx(type: ElementType, props: unknown, key?: Key | undefined): JSX.Element;

/**
 * Create a React element.
 *
 * You should not use this function directly. Use JSX and a transpiler instead.
 */
export function jsxs(type: ElementType, props: unknown, key?: Key | undefined): JSX.Element;
