import type { MapKit } from "./mapkit";
export type * from "./mapkit";

declare global {
    interface Window {
        mapkit: MapKit;
    }

    const mapkit: MapKit;
}
