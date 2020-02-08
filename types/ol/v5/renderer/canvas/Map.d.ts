import PluggableMap, { FrameState } from '../../PluggableMap';
import EventType from '../../render/EventType';
import { Transform } from '../../transform';
import MapRenderer from '../Map';

export default class CanvasMapRenderer extends MapRenderer {
    constructor(map: PluggableMap);
    protected getTransform(frameState: FrameState): Transform;
    dispatchRenderEvent(type: EventType, frameState: FrameState): void;
}
