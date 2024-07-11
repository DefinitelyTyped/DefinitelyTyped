import { BrowserWindow, Rectangle } from "electron";

declare namespace ElectronPositioner {
    type Position =
        | "topLeft"
        | "topRight"
        | "bottomLeft"
        | "bottomRight"
        | "topCenter"
        | "bottomCenter"
        | "leftCenter"
        | "rightCenter"
        | "center";

    type TrayPosition =
        | "trayLeft"
        | "trayBottomLeft"
        | "trayRight"
        | "trayBottomRight"
        | "trayCenter"
        | "trayBottomCenter";
}

declare class ElectronPositioner {
    constructor(browserWindow: BrowserWindow);

    move(position: ElectronPositioner.Position, trayBounds?: Rectangle): void;
    move(position: ElectronPositioner.Position | ElectronPositioner.TrayPosition, trayBounds: Rectangle): void;

    calculate(position: ElectronPositioner.Position, trayBounds?: Rectangle): { x: number; y: number };
    calculate(
        position: ElectronPositioner.Position | ElectronPositioner.TrayPosition,
        trayBounds: Rectangle,
    ): { x: number; y: number };
}

export = ElectronPositioner;
