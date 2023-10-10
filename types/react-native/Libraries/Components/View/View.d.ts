import type * as React from "react";
import { Constructor } from "../../../private/Utilities";
import { NativeMethods } from "../../../public/ReactNativeTypes";
import { ViewProps } from "./ViewPropTypes";

/**
 * The most fundamental component for building UI, View is a container that supports layout with flexbox, style, some touch handling,
 * and accessibility controls, and is designed to be nested inside other views and to have 0 to many children of any type.
 * View maps directly to the native view equivalent on whatever platform React is running on,
 * whether that is a UIView, <div>, android.view, etc.
 */
declare class ViewComponent extends React.Component<ViewProps> {}
declare const ViewBase: Constructor<NativeMethods> & typeof ViewComponent;
export class View extends ViewBase {
    /**
     * Is 3D Touch / Force Touch available (i.e. will touch events include `force`)
     * @platform ios
     */
    static forceTouchAvailable: boolean;
}
