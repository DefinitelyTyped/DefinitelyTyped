import {
    Finger,
    FingerCurl,
    FingerDirection,
    GestureDescription,
    GestureEstimator,
    ThumbsUpGesture,
    VictoryGesture,
} from "fingerpose"; 

function assert(condition: boolean, message: string) {
    console.assert(condition, message);
}

const customGesture = new GestureDescription("CustomGesture");
customGesture.addCurl(Finger.Index, FingerCurl.HalfCurl);
customGesture.addDirection(Finger.Index, FingerDirection.HorizontalRight);

const customCurls = [FingerCurl.HalfCurl, FingerCurl.NoCurl];
const customDirections = [FingerDirection.HorizontalRight, FingerDirection.VerticalUp];

const customMatchScore = customGesture.matchAgainst(customCurls, customDirections);
assert(customMatchScore > 0.5, "Custom gesture matching failed");

const estimator = new GestureEstimator();

const points = [
    [0, 0],
    [1, 1],
    [2, 2],
];

const { curls, directions } = estimator.estimate(points);

assert(curls.length === 5, "Unexpected number of curls");
assert(directions.length === 5, "Unexpected number of directions");

const victoryGesture = VictoryGesture;
const thumbsUpGesture = ThumbsUpGesture;

const victoryCurls = [FingerCurl.NoCurl, FingerCurl.FullCurl];
const victoryDirections = [FingerDirection.VerticalUp, FingerDirection.HorizontalRight];

const victoryMatchScore = victoryGesture.matchAgainst(victoryCurls, victoryDirections);
assert(victoryMatchScore > 0.8, "Victory gesture matching failed");

const thumbsUpCurls = [FingerCurl.HalfCurl, FingerCurl.FullCurl];
const thumbsUpDirections = [FingerDirection.VerticalUp, FingerDirection.HorizontalLeft];

const thumbsUpMatchScore = thumbsUpGesture.matchAgainst(thumbsUpCurls, thumbsUpDirections);
assert(thumbsUpMatchScore > 0.8, "Thumbs-up gesture matching failed");
