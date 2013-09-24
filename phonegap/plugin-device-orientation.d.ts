interface CompassOptions {
    frequency?: number;
    filter?: number;
}

interface CompassHeading {
    magneticHeading?: number;
    trueHeading?: number;
    headingAccuracy?: number;
    timestamp?: number;
}

interface CompassError {
    code: number;
}

declare var CompassError: {
    COMPASS_INTERNAL_ERR: number;
    COMPASS_NOT_SUPPORTED: number;
}

interface Compass {
    getCurrentHeading(compassSuccess: (heading: CompassHeading) => void , compassError: (error: CompassError) => void , compassOptions?: CompassOptions): void;
    watchHeading(compassSuccess: (heading: CompassHeading) => void , compassError: (error: CompassError) => void , compassOptions?: CompassOptions): void;
    clearWatch(watchID: number): void;
}

interface Navigator {
    compass: Compass;
}