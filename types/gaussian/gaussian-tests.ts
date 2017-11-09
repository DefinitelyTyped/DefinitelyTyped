import * as gaussian from "gaussian";

const d = gaussian(0, 1);
const a = d.mean !== d.variance;
const b = d.mean * d.standardDeviation;
d.pdf(-2);
d.cdf(-1.28155);
d.ppf(0.1);

gaussian(0, 1).mul(gaussian(0, 1));
gaussian(1, 1).mul(2);
gaussian(1, 1).add(gaussian(1, 2));
gaussian(1, 1).sub(gaussian(1, 2));
gaussian(1, 1).div(gaussian(1, 2));
gaussian(1, 1).div(2);
gaussian(1, 1).scale(2);
