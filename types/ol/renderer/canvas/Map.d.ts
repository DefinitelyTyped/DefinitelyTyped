import PluggableMap, { FrameState } from 'ol/PluggableMap';
import EventType from 'ol/render/EventType';
import MapRenderer from 'ol/renderer/Map';
import { Transform } from 'ol/transform';
export default class CanvasMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    protected getTransform(frameState: FrameState): Transform;
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
}
