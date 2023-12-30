
import co2 = require("./co2");
import averageIntensity = require("./data/average-intensities.min");
import marginalIntensity = require("./data/marginal-intensities-2021.min");
import hosting = require("./hosting");

export { co2, hosting, averageIntensity, marginalIntensity };

export namespace co2js {
    export { co2 };
    export { hosting };
    export { averageIntensity };
    export { marginalIntensity };
}
