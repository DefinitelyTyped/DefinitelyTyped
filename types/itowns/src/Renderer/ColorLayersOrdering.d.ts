import View from "../Core/View";

export const COLOR_LAYERS_ORDER_CHANGED: "layers-order-changed";

declare namespace _default {
    function moveLayerUp(view: View, layerId: string): void;

    function moveLayerDown(view: View, layerId: string): void;

    function moveLayerToIndex(view: View, layerId: string, index: number): void;
}
export default _default;
