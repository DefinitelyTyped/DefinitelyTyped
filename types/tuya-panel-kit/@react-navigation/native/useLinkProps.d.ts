import * as React from "react";
import { GestureResponderEvent } from "react-native";
import { NavigationAction } from "../core";
// tslint:disable:interface-over-type-literal
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
declare type Props = {
    to: string;
    action?: NavigationAction | undefined;
};
/**
 * Hook to get props for an anchor tag so it can work with in page navigation.
 *
 * @param props.to Absolute path to screen (e.g. `/feeds/hot`).
 * @param props.action Optional action to use for in-page navigation. By default, the path is parsed to an action based on linking config.
 */
export default function useLinkProps({ to, action }: Props): {
    href: string;
    accessibilityRole: "link";
    // tslint:disable-next-line no-redundant-undefined
    onPress: (e?: React.MouseEvent<HTMLAnchorElement, MouseEvent> | GestureResponderEvent) => void;
};
export {};
