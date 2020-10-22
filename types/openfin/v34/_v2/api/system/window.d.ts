export interface WindowInfo {
    uuid: string;
    mainWindow: WindowDetail;
    childWindows: Array<WindowDetail>;
}
export interface WindowDetail {
    name: string;
    top: number;
    right: number;
    bottom: number;
    height: number;
    width: number;
    left: number;
}
