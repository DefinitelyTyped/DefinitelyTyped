import { Cfg, Consts, feature, layer, Map } from "./sitna";

declare global {
    interface Window {
        SITNA: {
            Cfg: typeof Cfg;
            Map: typeof Map;
            Consts: typeof Consts;
            feature: feature;
            layer: layer;
        };
    }
    // For environments where globalThis is used
    var SITNA: {
        Cfg: typeof Cfg;
        Map: typeof Map;
        Consts: typeof Consts;
        feature: feature;
        layer: layer;
    };
}

export { Cfg, Consts, feature, layer, Map as default };
