import g = require('geobuckets');

interface testDataType {
    data: number[];
    numClasses: number;
    answers?: any;
}

export const testDataA: testDataType = {
    data: [60, 26, 20, 17, 10, 27, 98, 42, 55, 35],
    numClasses: 3,
    answers: {
        APG: [10, 24.666666666666664, 54, 98],
        EQI_A: [10, 39.33333333333333, 68.66666666666666, 98],
        GPG: [10, 21.399749611301587, 45.79492834264024, 98],
        JNK: [10, 35, 60, 98],
        QNT: [10, 26, 42, 98],
        STD_A: [1.6442775468068334, 26.548092515602278, 51.45190748439772, 76.35572245319317],
        STD_B: [10, 26.548092515602278, 51.45190748439772, 98],
    },
};

export const testDataEmptyArray: testDataType = {
    data: [],
    numClasses: 0,
};

g.equalIntervalBuckets(testDataA.data, testDataA.numClasses);
g.arithmeticProgressionBuckets(testDataA.data, testDataA.numClasses);
g.geometricProgressionBuckets(testDataA.data, testDataA.numClasses);
g.jenksBuckets(testDataA.data, testDataA.numClasses);
g.quantileBuckets(testDataA.data, testDataA.numClasses);
g.standardDeviationBuckets(testDataA.data, testDataA.numClasses, true);
