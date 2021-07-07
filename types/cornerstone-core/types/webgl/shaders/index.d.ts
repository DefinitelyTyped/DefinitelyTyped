export namespace shaders {
    export { int16Shader as int16 };
    export { int8Shader as int8 };
    export { rgbShader as rgb };
    export { uint16Shader as uint16 };
    export { uint8Shader as uint8 };
}
export namespace dataUtilities {
    export { int16DataUtilities as int16 };
    export { int8DataUtilities as int8 };
    export { rgbDataUtilities as rgb };
    export { uint16DataUtilities as uint16 };
    export { uint8DataUtilities as uint8 };
}
import { int16DataUtilities, int16Shader } from "./int16.js";
import { int8DataUtilities, int8Shader } from "./int8.js";
import { rgbDataUtilities, rgbShader } from "./rgb.js";
import { uint16DataUtilities, uint16Shader } from "./uint16.js";
import { uint8DataUtilities, uint8Shader } from "./uint8.js";
