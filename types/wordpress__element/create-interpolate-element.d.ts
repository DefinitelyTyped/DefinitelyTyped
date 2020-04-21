export default createInterpolateElement;
/**
 * The stack frame tracking parse progress.
 */
export type Frame = {
    /**
     * A parent element which may still have
     */
    element: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
    /**
     * Offset at which parent element first
     * appears.
     */
    tokenStart: number;
    /**
     * Length of string marking start of parent
     * element.
     */
    tokenLength: number;
    /**
     * Running offset at which parsing should
     *        continue.
     */
    prevOffset?: number;
    /**
     * Offset at which last closing element
     *  finished, used for finding text between
     *  elements.
     */
    leadingTextStart?: number;
    /**
     * Children.
     */
    children: import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>[];
};
export type WPElement = import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
declare function createInterpolateElement(interpolatedString: string, conversionMap: any): import("react").ReactElement<any, string | ((props: any) => import("react").ReactElement<any, string | any | (new (props: any) => import("react").Component<any, any, any>)>) | (new (props: any) => import("react").Component<any, any, any>)>;
