export interface Validation<T> {
    key: T;
    type: 'string' | 'object' | 'number' | 'decimal' | 'email' | 'array' | 'enum' | string;
    required?: boolean;
}

declare function validateFields<TParams extends Record<string, any>>(
    params: Partial<Record<keyof TParams, any>>,
    validFields: Array<Validation<string>>,
): Partial<Record<keyof TParams, any>>;

export default validateFields;
