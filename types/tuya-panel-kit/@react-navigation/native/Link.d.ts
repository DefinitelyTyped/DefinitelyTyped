import * as React from "react";
import { GestureResponderEvent, Text, TextProps } from "react-native";
import type { NavigationAction } from "../core";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props =
    & {
        to: string;
        action?: NavigationAction | undefined;
        target?: string | undefined;
        onPress?: ((e: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void) | undefined;
    }
    & (TextProps & {
        children: React.ReactNode;
    });
/**
 * Component to render link to another screen using a path.
 * Uses an anchor tag on the web.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 * @param props.children Child elements to render the content.
 */
export default function Link({ to, action, ...rest }: Props): React.CElement<TextProps, Text>;
export {};
