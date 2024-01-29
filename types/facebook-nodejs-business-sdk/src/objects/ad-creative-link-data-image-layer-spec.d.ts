import { AbstractCrudObject } from './../abstract-crud-object';
/**
 * AdCreativeLinkDataImageLayerSpec
 * @see {@link https://developers.facebook.com/docs/marketing-api/}
 */
export default class AdCreativeLinkDataImageLayerSpec extends AbstractCrudObject {
    static get Fields(): Readonly<{
        blending_mode: "blending_mode";
        content: "content";
        frame_image_hash: "frame_image_hash";
        frame_source: "frame_source";
        image_source: "image_source";
        layer_type: "layer_type";
        opacity: "opacity";
        overlay_position: "overlay_position";
        overlay_shape: "overlay_shape";
        scale: "scale";
        shape_color: "shape_color";
        text_color: "text_color";
        text_font: "text_font";
    }>;
    static get BlendingMode(): Readonly<{
        lighten: "lighten";
        multiply: "multiply";
        normal: "normal";
    }>;
    static get FrameSource(): Readonly<{
        custom: "custom";
    }>;
    static get ImageSource(): Readonly<{
        catalog: "catalog";
    }>;
    static get LayerType(): Readonly<{
        frame_overlay: "frame_overlay";
        image: "image";
        text_overlay: "text_overlay";
    }>;
    static get OverlayPosition(): Readonly<{
        bottom: "bottom";
        bottom_left: "bottom_left";
        bottom_right: "bottom_right";
        center: "center";
        left: "left";
        right: "right";
        top: "top";
        top_left: "top_left";
        top_right: "top_right";
    }>;
    static get OverlayShape(): Readonly<{
        circle: "circle";
        none: "none";
        pill: "pill";
        rectangle: "rectangle";
        triangle: "triangle";
    }>;
    static get TextFont(): Readonly<{
        droid_serif_regular: "droid_serif_regular";
        lato_regular: "lato_regular";
        noto_sans_regular: "noto_sans_regular";
        nunito_sans_bold: "nunito_sans_bold";
        open_sans_bold: "open_sans_bold";
        open_sans_condensed_bold: "open_sans_condensed_bold";
        pt_serif_bold: "pt_serif_bold";
        roboto_condensed_regular: "roboto_condensed_regular";
        roboto_medium: "roboto_medium";
    }>;
}
