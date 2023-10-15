import type * as React from "react";
import { Constructor } from "../../../private/Utilities";
import { NativeMethods } from "../../../public/ReactNativeTypes";
import { ViewProps } from "../View/ViewPropTypes";

/**
 * Renders nested content and automatically applies paddings reflect the portion of the view
 * that is not covered by navigation bars, tab bars, toolbars, and other ancestor views.
 * Moreover, and most importantly, Safe Area's paddings reflect physical limitation of the screen,
 * such as rounded corners or camera notches (aka sensor housing area on iPhone X).
 */
declare class SafeAreaViewComponent extends React.Component<ViewProps> {}
declare const SafeAreaViewBase:
    & Constructor<NativeMethods>
    & typeof SafeAreaViewComponent;
export class SafeAreaView extends SafeAreaViewBase {}
