export interface WindowInfo {
    childWindows: Array<WindowDetail>;
    mainWindow: WindowDetail;
    uuid: string;
}
export interface WindowDetail {
    bottom: number;
    height: number;
    isShowing: boolean;
    left: number;
    name: string;
    right: number;
    state: string;
    top: number;
    width: number;
}
