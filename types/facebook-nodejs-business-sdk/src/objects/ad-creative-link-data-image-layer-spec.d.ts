import { AbstractCrudObject } from "./../abstract-crud-object";
export default class AdCreativeLinkDataImageLayerSpec extends AbstractCrudObject {
    static get Fields(): Record<string, any>;
    static get BlendingMode(): Record<string, any>;
    static get FrameSource(): Record<string, any>;
    static get ImageSource(): Record<string, any>;
    static get LayerType(): Record<string, any>;
    static get OverlayPosition(): Record<string, any>;
    static get OverlayShape(): Record<string, any>;
    static get TextFont(): Record<string, any>;
}
