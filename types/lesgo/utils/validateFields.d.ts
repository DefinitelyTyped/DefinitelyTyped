export interface Validation<T> {
    key: T;
    type: "string" | "object" | "number" | "decimal" | "email" | "array" | "enum";
    required?: boolean;
}

declare function validateFields<TParams extends Record<string, any>>(
    params: Record<keyof TParams, any>,
    validFields: Array<Validation<keyof TParams>>,
): boolean;

export default validateFields;
