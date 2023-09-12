export const ZONE_TYPE_ABSTRACT: "Zone";
export const ZONE_TYPE_BOX: "BoxZone";
export const ZONE_TYPE_LINE: "LineZone";
export const ZONE_TYPE_MESH: "MeshZone";
export const ZONE_TYPE_POINT: "PointZone";
export const ZONE_TYPE_SCREEN: "ScreenZone";
export const ZONE_TYPE_SPHERE: "SphereZone";

export type ZONE_TYPES =
    | typeof ZONE_TYPE_ABSTRACT
    | typeof ZONE_TYPE_BOX
    | typeof ZONE_TYPE_LINE
    | typeof ZONE_TYPE_MESH
    | typeof ZONE_TYPE_POINT
    | typeof ZONE_TYPE_SCREEN
    | typeof ZONE_TYPE_SPHERE;
