declare namespace co2js {
    export { co2 };
    export { hosting };
    export { averageIntensity };
    export { marginalIntensity };
}

import co2 from "./co2.d.ts";
import hosting from "./hosting.d.ts";
import averageIntensity from "./data/average-intensities.min.d.ts";
import marginalIntensity from "./data/marginal-intensities-2021.min.d.ts";
export { co2, hosting, averageIntensity, marginalIntensity };

export default co2js;
