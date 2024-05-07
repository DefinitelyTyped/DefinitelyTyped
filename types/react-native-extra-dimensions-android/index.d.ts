export type Dimensions =
    | "REAL_WINDOW_HEIGHT"
    | "REAL_WINDOW_WIDTH"
    | "STATUS_BAR_HEIGHT"
    | "SOFT_MENU_BAR_HEIGHT"
    | "SMART_BAR_HEIGHT";

export function get(dimension: Dimensions): number;
export function getRealWindowHeight(): number;
export function getRealWindowWidth(): number;
export function getStatusBarHeight(): number;
export function getSoftMenuBarHeight(): number;
export function getSmartBarHeight(): number;
export function isSoftMenuBarEnabled(): boolean;
