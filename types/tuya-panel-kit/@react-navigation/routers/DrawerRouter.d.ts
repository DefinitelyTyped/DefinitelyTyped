import { TabActionHelpers, TabActionType, TabNavigationState, TabRouterOptions } from "./TabRouter";
import type { CommonNavigationAction, ParamListBase, Router } from "./types";
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type DrawerActionType = TabActionType | {
    type: "OPEN_DRAWER" | "CLOSE_DRAWER" | "TOGGLE_DRAWER";
    source?: string | undefined;
    target?: string | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type DrawerRouterOptions = TabRouterOptions & {
    openByDefault?: boolean | undefined;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type DrawerNavigationState<ParamList extends ParamListBase> =
    & Omit<TabNavigationState<ParamList>, "type" | "history">
    & {
        /**
         * Type of the router, in this case, it's drawer.
         */
        type: "drawer";
        /**
         * List of previously visited route keys and drawer open status.
         */
        // tslint:disable-next-line array-type
        history: Array<
            {
                type: "route";
                key: string;
            } | {
                type: "drawer";
            }
        >;
    };
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare type DrawerActionHelpers<ParamList extends ParamListBase> = TabActionHelpers<ParamList> & {
    /**
     * Open the drawer sidebar.
     */
    openDrawer(): void;
    /**
     * Close the drawer sidebar.
     */
    closeDrawer(): void;
    /**
     * Open the drawer sidebar if closed, or close if opened.
     */
    toggleDrawer(): void;
};
// eslint-disable-next-line @definitelytyped/strict-export-declare-modifiers
export declare const DrawerActions: {
    openDrawer(): DrawerActionType;
    closeDrawer(): DrawerActionType;
    // tslint:disable-next-line no-redundant-undefined
    toggleDrawer(): DrawerActionType;
    // tslint:disable-next-line no-redundant-undefined
    jumpTo(name: string, params?: object): TabActionType;
};
export default function DrawerRouter(
    { openByDefault, ...rest }: DrawerRouterOptions,
): Router<DrawerNavigationState<ParamListBase>, DrawerActionType | CommonNavigationAction>;
