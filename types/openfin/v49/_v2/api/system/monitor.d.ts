import { Point } from './point';
export interface MonitorInfo {
    deviceScaleFactor: number;
    dpi: Point;
    nonPrimaryMonitors: Array<MonitorDetails>;
    primaryMonitor: MonitorDetails;
    reason: string;
    taskBar: TaskBar;
    virtualScreen: DipRect;
}
export interface MonitorDetails {
    available: DipScaleRects;
    availableRect: Rect;
    deviceId: string;
    displayDeviceActive: boolean;
    deviceScaleFactor: number;
    monitorRect: Rect;
    name: string;
    dpi: Point;
    monitor: DipScaleRects;
}
export interface Rect {
    bottom: number;
    left: number;
    right: number;
    top: number;
}
export interface DipRect extends Rect {
    dipRect: Rect;
    scaledRect: Rect;
}
export interface DipScaleRects {
    dipRect: Rect;
    scaledRect: Rect;
}
export interface TaskBar extends DipScaleRects {
    edge: string;
    rect: Rect;
}
