import { MapKit } from "./mapkit";
export * from "./mapkit";

declare global {
    interface Window {
        mapkit: MapKit;
    }

    const mapkit: MapKit;
}
