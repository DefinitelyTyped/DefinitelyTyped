export const Finger: {
    Thumb: 0;
    Index: 1;
    Middle: 2;
    Ring: 3;
    Pinky: 4;

    all: [0, 1, 2, 3, 4];

    nameMapping: {
        0: "Thumb";
        1: "Index";
        2: "Middle";
        3: "Ring";
        4: "Pinky";
    };

    pointsMapping: {
        0: [[0, 1], [1, 2], [2, 3], [3, 4]];
        1: [[0, 5], [5, 6], [6, 7], [7, 8]];
        2: [[0, 9], [9, 10], [10, 11], [11, 12]];
        3: [[0, 13], [13, 14], [14, 15], [15, 16]];
        4: [[0, 17], [17, 18], [18, 19], [19, 20]];
    };

    getName(value: number): string | false;
    getPoints(value: number): number[][] | false;
};

export const FingerCurl: {
    NoCurl: 0;
    HalfCurl: 1;
    FullCurl: 2;

    nameMapping: {
        0: "No Curl";
        1: "Half Curl";
        2: "Full Curl";
    };

    getName(value: number): string | false;
};

export const FingerDirection: {
    VerticalUp: 0;
    VerticalDown: 1;
    HorizontalLeft: 2;
    HorizontalRight: 3;
    DiagonalUpRight: 4;
    DiagonalUpLeft: 5;
    DiagonalDownRight: 6;
    DiagonalDownLeft: 7;

    nameMapping: {
        0: "Vertical Up";
        1: "Vertical Down";
        2: "Horizontal Left";
        3: "Horizontal Right";
        4: "Diagonal Up Right";
        5: "Diagonal Up Left";
        6: "Diagonal Down Right";
        7: "Diagonal Down Left";
    };

    getName(value: number): string | false;
};

export class GestureDescription {
    constructor(name: string);

    addCurl(finger: number, curl: number, contrib?: number): void;

    addDirection(
        finger: number,
        position: number,
        contrib?: number,
    ): void;

    matchAgainst(
        detectedCurls: number[],
        detectedDirections: number[],
    ): number;
}

interface GestureEstimate {
    name: string;
    score: number;
}

interface Keypoint3D {
    x: number;
    y: number;
    z: number;
}

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
        poseData: Array<[name: string, curl: string, direction: string]>;
        gestures: GestureEstimate[];
    };
}

export const Gestures: {
    VictoryGesture: GestureDescription;
    ThumbsUpGesture: GestureDescription;
};

export {};
