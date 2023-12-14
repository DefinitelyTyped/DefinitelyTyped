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

    addCurl(finger: Finger, curl: FingerCurl, contrib?: number): void;

    addDirection(
        finger: Finger,
        direction: FingerDirection,
        contrib?: number,
    ): void;

    matchAgainst(
        detectedCurls: FingerCurl[],
        detectedDirections: FingerDirection[],
    ): number;
}

interface GestureEstimate {
    name: string;
    score: number;
};

interface Keypoint3D {
    x: number;
    y: number;
    z: number;
};

export class GestureEstimator {
    constructor(
        knownGestures: GestureDescription[],
        estimatorOptions?: {
            HALF_CURL_START_LIMIT?: number;
            NO_CURL_START_LIMIT?: number;
            DISTANCE_VOTE_POWER?: number;
            SINGLE_ANGLE_VOTE_POWER?: number;
            TOTAL_ANGLE_VOTE_POWER?: number;
        },
    );

    estimate(
        keypoints3D: Keypoint3D[],
        minScore: number,
    ): {
        poseData: GestureDescription[];
        gestures: GestureEstimate[];
    };
}

export const VictoryGesture: GestureDescription;
export const ThumbsUpGesture: GestureDescription;

export {};