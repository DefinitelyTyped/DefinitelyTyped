import { detect } from "fast9";

const width = 480;
const height = 640;
const gs = new Uint8Array(width * height);

const threshold = 20;
// $ExpectType Corner[]
const corners = detect(gs, width, height, threshold, true);
