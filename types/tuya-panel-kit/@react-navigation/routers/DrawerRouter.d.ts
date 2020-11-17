import type { CommonNavigationAction, Router, ParamListBase } from './types';
import { TabActionType, TabRouterOptions, TabNavigationState, TabActionHelpers } from './TabRouter';
export declare type DrawerActionType = TabActionType | {
    type: 'OPEN_DRAWER' | 'CLOSE_DRAWER' | 'TOGGLE_DRAWER';
    source?: string;
    target?: string;
};
export declare type DrawerRouterOptions = TabRouterOptions & {
    openByDefault?: boolean;
};
export declare type DrawerNavigationState<ParamList extends ParamListBase> = Omit<TabNavigationState<ParamList>, 'type' | 'history'> & {
    /**
     * Type of the router, in this case, it's drawer.
     */
    type: 'drawer';
    /**
     * List of previously visited route keys and drawer open status.
     */
    history: ({
        type: 'route';
        key: string;
    } | {
        type: 'drawer';
    })[];
};
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
export declare const DrawerActions: {
    openDrawer(): DrawerActionType;
    closeDrawer(): DrawerActionType;
    toggleDrawer(): DrawerActionType;
    jumpTo(name: string, params?: object | undefined): TabActionType;
};
export default function DrawerRouter({ openByDefault, ...rest }: DrawerRouterOptions): Router<DrawerNavigationState<ParamListBase>, DrawerActionType | CommonNavigationAction>;
