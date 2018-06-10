import * as pack from "bin-pack";

// $ExpectType PackResult<{ width: number; height: number; }>
const packResult = pack([
    { width: 50, height: 50 },
    { width: 25, height: 25 },
    { width: 25, height: 20 }
]);
