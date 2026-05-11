import { InspectorBase, InspectorBaseEventMap } from "three/webgpu";

export interface RendererInspectorEventMap extends InspectorBaseEventMap {
}

export class RendererInspector<TEventMap extends RendererInspectorEventMap = RendererInspectorEventMap>
    extends InspectorBase<TEventMap>
{
}
