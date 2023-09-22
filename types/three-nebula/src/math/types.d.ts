export const MATH_TYPE_ARRAY_SPAN: "ArraySpan";
export const MATH_TYPE_COLOR_SPAN: "ColorSpan";
export const MATH_TYPE_BOX: "Box";
export const MATH_TYPE_POLAR_3D: "Polar3D";
export const MATH_TYPE_SPAN: "Span";
export const MATH_TYPE_VECTOR_3D: "Vector3D";

export type MATH_TYPES =
    | typeof MATH_TYPE_ARRAY_SPAN
    | typeof MATH_TYPE_COLOR_SPAN
    | typeof MATH_TYPE_BOX
    | typeof MATH_TYPE_POLAR_3D
    | typeof MATH_TYPE_SPAN
    | typeof MATH_TYPE_VECTOR_3D;
