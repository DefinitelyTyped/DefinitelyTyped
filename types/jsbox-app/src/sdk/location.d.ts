// JSBox Location API TypeScript Declaration

declare namespace LocationTypes {
    interface LocationResponse {
        lat: number;
        lng: number;
        alt: number;
    }

    interface HeadingResponse {
        magneticHeading: number;
        trueHeading: number;
        headingAccuracy: number;
        x: number;
        y: number;
        z: number;
    }

    interface Region {
        lat: number;
        lng: number;
        distance?: number;
    }

    interface SnapshotOptions {
        region: Region;
        size?: { width: number; height: number };
        showsPin?: boolean;
        style?: 0 | 1 | 2; // 0: unspecified, 1: light, 2: dark
    }

    interface SelectResult {
        lat: number;
        lng: number;
    }
}

interface JBLocation {
    available: boolean;
    fetch(options: { handler: (resp: LocationTypes.LocationResponse) => void }): void;
    startUpdates(options: { handler: (resp: LocationTypes.LocationResponse) => void }): void;
    trackHeading(options: { handler: (resp: LocationTypes.HeadingResponse) => void }): void;
    stopUpdates(): void;
    select(options: { handler: (result: LocationTypes.SelectResult) => void }): void;
    get(): Promise<LocationTypes.LocationResponse>;
    snapshot(options: LocationTypes.SnapshotOptions): Promise<UIImage>;
}

declare const $location: JBLocation;
