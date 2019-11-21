export function given(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function when(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function then(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function and(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function but(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function defineStep(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function defineParameterType(): void;

// Aliased versions of the above funcs.
export function Given(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function When(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function Then(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function And(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function But(expression: RegExp | string, implementation: (...args: any[]) => void): void;
export function Before(optionsOrImplementation: object | ((...args: any[]) => void), implementation?: (...args: any[]) => void): void;
export function After(optionsOrImplementation: object | ((...args: any[]) => void), implementation?: (...args: any[]) => void): void;
