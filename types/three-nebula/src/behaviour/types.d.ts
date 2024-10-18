export const BEHAVIOUR_TYPE_ABSTRACT: "Behaviour";
export const BEHAVIOUR_TYPE_ALPHA: "Alpha";
export const BEHAVIOUR_TYPE_ATTRACTION: "Attraction";
export const BEHAVIOUR_TYPE_COLLISION: "Collision";
export const BEHAVIOUR_TYPE_COLOR: "Color";
export const BEHAVIOUR_TYPE_CROSS_ZONE: "CrossZone";
export const BEHAVIOUR_TYPE_FORCE: "Force";
export const BEHAVIOUR_TYPE_GRAVITY: "Gravity";
export const BEHAVIOUR_TYPE_RANDOM_DRIFT: "RandomDrift";
export const BEHAVIOUR_TYPE_REPULSION: "Repulsion";
export const BEHAVIOUR_TYPE_ROTATE: "Rotate";
export const BEHAVIOUR_TYPE_SCALE: "Scale";
export const BEHAVIOUR_TYPE_SPRING: "Spring";

export type BEHAVIOUR_TYPES =
    | typeof BEHAVIOUR_TYPE_ABSTRACT
    | typeof BEHAVIOUR_TYPE_ALPHA
    | typeof BEHAVIOUR_TYPE_ATTRACTION
    | typeof BEHAVIOUR_TYPE_COLLISION
    | typeof BEHAVIOUR_TYPE_COLOR
    | typeof BEHAVIOUR_TYPE_CROSS_ZONE
    | typeof BEHAVIOUR_TYPE_FORCE
    | typeof BEHAVIOUR_TYPE_GRAVITY
    | typeof BEHAVIOUR_TYPE_RANDOM_DRIFT
    | typeof BEHAVIOUR_TYPE_REPULSION
    | typeof BEHAVIOUR_TYPE_ROTATE
    | typeof BEHAVIOUR_TYPE_SCALE
    | typeof BEHAVIOUR_TYPE_SPRING;
