import * as L from "leaflet";

declare module "leaflet" {
    namespace Icon {
        class Glyph extends Icon {
            constructor(options?: GlyphOptions | GlyphIconOptions);
            options: GlyphIconOptions;
            createIcon(): HTMLElement;
        }

        interface GlyphOptions extends BaseIconOptions {
            className?: string | undefined;
            bgPos?: PointExpression | undefined;
            bgSize?: PointExpression | undefined;
            prefix?: string | undefined;
            glyph?: string | undefined;
            glyphColor?: string | undefined;
            glyphSize?: string | undefined;
            glyphAnchor?: PointExpression | undefined;
        }

        interface GlyphIconOptions extends IconOptions {
            className?: string | undefined;
            bgPos?: PointExpression | undefined;
            bgSize?: PointExpression | undefined;
            prefix?: string | undefined;
            glyph?: string | undefined;
            glyphColor?: string | undefined;
            glyphSize?: string | undefined;
            glyphAnchor?: PointExpression | undefined;
        }
    }

    namespace icon {
        function glyph(options?: Icon.GlyphOptions | Icon.GlyphIconOptions): Icon.Glyph;
    }
}
