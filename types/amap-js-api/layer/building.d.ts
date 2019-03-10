declare namespace AMap {
    namespace Buildings {
        interface Options extends Layer.Options {
            zooms?: [number, number];
            opacity?: number;
            heightFactor?: number;
            visible?: boolean;
            zIndex?: number;
            // inner
            merge?: boolean;
            sort?: boolean;
        }
        interface AreaStyle {
            color1: string;
            path: LocationValue[];
            color2?: string;
            visible?: boolean;
            rejectTexture?: boolean;
        }
        interface Style {
            hideWithoutStyle?: boolean;
            areas: AreaStyle[];
        }
    }

    class Buildings extends Layer {
        constructor(opts?: Buildings.Options);
        setStyle(style: Buildings.Style): void;
    }
}
