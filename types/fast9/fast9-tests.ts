import { detect, fast9_detect, fast9_score, nonmax_suppression } from "fast9";

const width = 480;
const height = 640;
const gs = new Uint8Array(width * height);

const threshold = 20;
// $ExpectType Corner[]
let corners = detect(gs, width, height, threshold, true);

// $ExpectType Corner[]
corners = fast9_detect(gs, width, height, threshold);

// $ExpectType number[]
const scores = fast9_score(gs, width, height, corners, threshold);

// $ExpectType Corner[]
corners = nonmax_suppression(corners, scores);
