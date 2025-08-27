import { IITC } from "./iitctypes";

export {};

declare global {
    /**
     * Added as part of the Ingress #Helios in 2014, ornaments
     * are additional image overlays for portals.
     *
     * currently there are 6 known types of ornaments: ap$x$suffix
     *  - cluster portals (without suffix)
     *  - volatile portals (_v)
     *  - meeting points (_start)
     *  - finish points (_end)
     *
     * Beacons and Frackers were introduced at the launch of the Ingress
     * ingame store on November 1st, 2015
     *  - Beacons (pe$TAG - $NAME) ie: 'peNIA - NIANTIC'
     *  - Frackers ('peFRACK')
     * (there are 7 different colors for each of them)
     */
    class Ornaments {
        _portals: {};
        _layer: L.LayerGroup;
        _beacons: L.LayerGroup;
        _frackers: L.LayerGroup;
        OVERLAY_SIZE: number; // 60,
        OVERLAY_OPACITY: number; // 0.6,

        setup(): void;
        addPortal(portal: IITC.Portal): void;
        removePortal(portal: IITC.Portal): void;
    }

    const ornaments: Ornaments;
}
