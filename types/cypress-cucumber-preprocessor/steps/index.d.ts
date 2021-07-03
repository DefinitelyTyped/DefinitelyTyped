export interface Transform {
    regexp: RegExp;
    transformer(...arg: string[]): any;
    useForSnippets?: boolean;
    preferForRegexpMatch?: boolean;
    name?: string;
    typeName?: string; // deprecated
}

export function defineStep(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function defineParameterType(parameterType: Transform): void;
export function Given(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function When(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function Then(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function And(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function But(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function Before(optionsOrImplementation: object | ((...args: any[]) => void), implementation?: (...args: any[]) => void): void;
export function After(optionsOrImplementation: object | ((...args: any[]) => void), implementation?: (...args: any[]) => void): void;
