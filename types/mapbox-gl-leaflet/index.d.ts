import * as L from "leaflet";

declare module "leaflet" {
    class MapboxGL extends Layer {
        constructor(options: MapboxGLOptions);
    }

    function mapboxGL(options: MapboxGLOptions): MapboxGL;

    interface MapboxGLOptions {
        accessToken: string;
        style: string;
    }
}
