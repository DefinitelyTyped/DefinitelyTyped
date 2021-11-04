import { BaseEventMap, WindowEvent } from './base';
export interface FrameEvent<Type> extends WindowEvent<'frame', Type> {
    entityType: 'iframe';
    frameName: string;
}
export interface FrameEvents extends BaseEventMap {
    connected: FrameEvent<'connected'>;
    disconnected: FrameEvent<'disconnected'>;
}
