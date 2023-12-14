export enum Finger {
    Thumb = 0,
    Index = 1,
    Middle = 2,
    Ring = 3,
    Pinky = 4,
}

export enum FingerCurl {
    NoCurl = 0,
    HalfCurl = 1,
    FullCurl = 2,
}

export enum FingerDirection {
    VerticalUp = 0,
    VerticalDown = 1,
    HorizontalLeft = 2,
    HorizontalRight = 3,
    DiagonalUpRight = 4,
    DiagonalUpLeft = 5,
    DiagonalDownRight = 6,
    DiagonalDownLeft = 7,
}

export class GestureDescription {
    constructor(name: string);
    curls: Record<Finger, FingerCurl[]>;
    directions: Record<Finger, FingerDirection[]>;
    addCurl(finger: Finger, curl: FingerCurl, weight?: number): void;
    addDirection(
        finger: Finger,
        direction: FingerDirection,
        weight?: number,
    ): void;
    matchAgainst(curls: FingerCurl[], directions: FingerDirection[]): number;
}

export class GestureEstimator {
    constructor(options?: {
        HALF_CURL_START_LIMIT?: number;
        NO_CURL_START_LIMIT?: number;
        DISTANCE_VOTE_POWER?: number;
        SINGLE_ANGLE_VOTE_POWER?: number;
        TOTAL_ANGLE_VOTE_POWER?: number;
    });

    estimate(points: number[][]): {
        curls: FingerCurl[];
        directions: FingerDirection[];
    };
}

export const VictoryGesture: GestureDescription;
export const ThumbsUpGesture: GestureDescription;
