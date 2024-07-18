import {
    BEHAVIOUR_TYPE_ALPHA,
    BEHAVIOUR_TYPE_ATTRACTION,
    BEHAVIOUR_TYPE_COLOR,
    BEHAVIOUR_TYPE_CROSS_ZONE,
    BEHAVIOUR_TYPE_FORCE,
    BEHAVIOUR_TYPE_GRAVITY,
    BEHAVIOUR_TYPE_RANDOM_DRIFT,
    BEHAVIOUR_TYPE_REPULSION,
    BEHAVIOUR_TYPE_ROTATE,
    BEHAVIOUR_TYPE_SCALE,
    BEHAVIOUR_TYPE_SPRING,
} from "../behaviour/types";
import {
    INITIALIZER_TYPE_BODY,
    INITIALIZER_TYPE_BODY_SPRITE,
    INITIALIZER_TYPE_LIFE,
    INITIALIZER_TYPE_MASS,
    INITIALIZER_TYPE_POLAR_VELOCITY,
    INITIALIZER_TYPE_POSITION,
    INITIALIZER_TYPE_RADIAL_VELOCITY,
    INITIALIZER_TYPE_RADIUS,
    INITIALIZER_TYPE_ROTATION,
    INITIALIZER_TYPE_TEXTURE,
    INITIALIZER_TYPE_VECTOR_VELOCITY,
} from "../initializer/types";
import { ZONE_TYPE_BOX, ZONE_TYPE_LINE, ZONE_TYPE_MESH, ZONE_TYPE_POINT, ZONE_TYPE_SPHERE } from "../zone/types";

import { ease } from "../ease";
import { RENDERER_TYPE_SPRITE } from "../renderer/types";

/**
 * @description Default particle life
 */
export const DEFAULT_LIFE: number;
/**
 * @description Default particle age
 */
export const DEFAULT_AGE: number;
/**
 * @description Default particle energy
 */
export const DEFAULT_ENERGY: number;
/**
 * @description Default particle dead
 */
export const DEFAULT_DEAD: boolean;
/**
 * @description Default particle sleep
 */
export const DEFAULT_SLEEP: boolean;

/**
 * @description Default particle index
 */
export const DEFAULT_INDEX: number;
/**
 * @description Default particle body
 */
export const DEFAULT_BODY: null;
/**
 * @description Default particle parent
 */
export const DEFAULT_PARENT: null;
/**
 * @description Default particle mass
 */
export const DEFAULT_MASS: number;
/**
 * @description Default particle radius
 */
export const DEFAULT_RADIUS: number;
/**
 * @description Default particle alpha
 */
export const DEFAULT_ALPHA: number;
/**
 * @description Default particle scale
 */
export const DEFAULT_SCALE: number;
/**
 * @description Default particle useColor
 */
export const DEFAULT_USE_COLOR: boolean;
/**
 * @description Default particle useAlpha
 */
export const DEFAULT_USE_ALPHA: boolean;
/**
 * @description Default particle easing
 */
export const DEFAULT_EASING: typeof ease.easeLinear;

/**
 * @description The default delta provided to the System instance
 */
export const DEFAULT_SYSTEM_DELTA: number;

/**
 * @description The types of initializers supported by the System.fromJSON method.
 */
export const SUPPORTED_JSON_INITIALIZER_TYPES: [
    typeof INITIALIZER_TYPE_POSITION,
    typeof INITIALIZER_TYPE_ROTATION,
    typeof INITIALIZER_TYPE_LIFE,
    typeof INITIALIZER_TYPE_RADIUS,
    typeof INITIALIZER_TYPE_MASS,
    typeof INITIALIZER_TYPE_BODY,
    typeof INITIALIZER_TYPE_BODY_SPRITE,
    typeof INITIALIZER_TYPE_TEXTURE,
    typeof INITIALIZER_TYPE_POLAR_VELOCITY,
    typeof INITIALIZER_TYPE_RADIAL_VELOCITY,
    typeof INITIALIZER_TYPE_VECTOR_VELOCITY,
];

/**
 * @description The types of behaviours supported by the System.fromJSON method.
 */
export const SUPPORTED_JSON_BEHAVIOUR_TYPES: [
    typeof BEHAVIOUR_TYPE_ALPHA,
    typeof BEHAVIOUR_TYPE_ATTRACTION,
    typeof BEHAVIOUR_TYPE_COLOR,
    typeof BEHAVIOUR_TYPE_CROSS_ZONE,
    typeof BEHAVIOUR_TYPE_FORCE,
    typeof BEHAVIOUR_TYPE_GRAVITY,
    typeof BEHAVIOUR_TYPE_RANDOM_DRIFT,
    typeof BEHAVIOUR_TYPE_REPULSION,
    typeof BEHAVIOUR_TYPE_ROTATE,
    typeof BEHAVIOUR_TYPE_SCALE,
    typeof BEHAVIOUR_TYPE_SPRING,
];

/**
 * @description The types of renderers supported by the System.fromJSON method.
 */
export const SUPPORTED_JSON_RENDERER_TYPES: typeof RENDERER_TYPE_SPRITE;

/**
 * @description The types of zones supported by the System.fromJSON method.
 */
export const SUPPORTED_JSON_ZONE_TYPES: [
    typeof ZONE_TYPE_BOX,
    typeof ZONE_TYPE_LINE,
    typeof ZONE_TYPE_MESH,
    typeof ZONE_TYPE_POINT,
    typeof ZONE_TYPE_SPHERE,
];

export { INITIALIZER_TYPES_THAT_REQUIRE_THREE } from "../initializer/types";
