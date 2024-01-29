import * as THREE from "three";
import View from "./View";

export const RENDERING_PAUSED: 0;
export const RENDERING_SCHEDULED: 1;
export type RenderingState = typeof RENDERING_SCHEDULED | typeof RENDERING_SCHEDULED;

export enum MAIN_LOOP_EVENTS {
    UPDATE_START = "update_start",
    BEFORE_CAMERA_UPDATE = "before_camera_update",
    AFTER_CAMERA_UPDATE = "after_camera_update",
    BEFORE_LAYER_UPDATE = "before_layer_update",
    AFTER_LAYER_UPDATE = "after_layer_update",
    BEFORE_RENDER = "before_render",
    AFTER_RENDER = "after_render",
    UPDATE_END = "update_end",
}

// TODO: THREE.Event or MAIN_LOOP_EVENTS?
// TODO: Missing types
// TODO: Usefulness of THREE.EventDispatcher?
export default class MainLoop extends THREE.EventDispatcher {
    constructor(scheduler: any, engine: any);

    renderingState: RenderingState;
    scheduler: any;
    gfxEngine: any;

    scheduleViewUpdate(view: View, forceRedraw: boolean): void;
}
