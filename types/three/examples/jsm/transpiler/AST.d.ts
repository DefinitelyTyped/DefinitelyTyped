export class Program {
    constructor();

    body: Statement[];

    isProgram: true;
}

// Boolean seems to be handled as a Unary
export type Statement =
    | VariableDeclaration
    | Uniform
    | Varying
    | FunctionParameter
    | FunctionDeclaration
    | Expression
    | Ternary
    | Operator
    | Unary
    | Number
    | String
    | Conditional
    | FunctionCall
    | Return
    | Discard
    | Accessor
    | StaticElement
    | DynamicElement
    | AccessorElements
    | For
    | null;

export class VariableDeclaration {
    constructor(
        type: string,
        name: string,
        value?: Accessor | null,
        next?: VariableDeclaration | null,
        immutable?: boolean,
    );

    type: string;
    name: string;
    value: Accessor | null;
    next: VariableDeclaration | null;

    immutable: boolean;

    isVariableDeclaration: true;
}

export class Uniform {
    constructor(type: string, name: string);

    type: string;
    name: string;

    isUniform: true;
}

export class Varying {
    constructor(type: string, name: string);

    type: string;
    name: string;

    isVarying: true;
}

export class FunctionParameter {
    constructor(type: string, name: string, qualifier?: string | null, immutable?: boolean);

    type: string;
    name: string;
    qualifier: string | null;
    immutable: boolean;

    isFunctionParameter: true;
}

export class FunctionDeclaration {
    constructor(type: string, name: string, params?: FunctionParameter[]);

    type: string;
    name: string;
    params: FunctionParameter[];
    body: Statement[];

    isFunctionDeclaration: true;
}

export class Expression {
    constructor(expression: string);

    expression: string;

    isExpression: true;
}

export class Ternary {
    constructor(cond: Statement, left: Statement, right: Statement);

    cond: Statement;
    left: Statement;
    right: Statement;

    isTernary: true;
}

export class Operator {
    constructor(type: string, left: Statement, right: Statement);

    type: string;
    left: Statement;
    right: Statement;

    isOperator: true;
}

export class Unary {
    constructor(type: string, expression: Statement, after?: boolean);

    type: string;
    expression: Statement;
    after: boolean;

    isUnary: true;
}

export class Number {
    constructor(value: string, type?: string);

    type: string;
    value: string;

    isNumber: true;
}

export class String {
    constructor(value: string);

    value: string;

    isString: true;
}

export class Conditional {
    constructor(cond?: Conditional | null);

    cond: Conditional | null;

    body: Statement[];
    elseConditional: Conditional | null;

    isConditional: true;
}

export class FunctionCall {
    constructor(name: string, params?: Statement[]);

    name: string;
    params: Statement[];

    isFunctionCall: true;
}

export class Return {
    constructor(value: Statement);

    value: Statement;

    isReturn: true;
}

export class Discard {
    constructor();

    isDiscard: true;
}

export class Accessor {
    constructor(property: string);

    property: string;

    isAccessor: true;
}

export class StaticElement {
    constructor(value: Statement);

    value: Statement;

    isStaticElement: true;
}

export class DynamicElement {
    constructor(value: Statement);

    value: Statement;

    isDynamicElement: true;
}

export class AccessorElements {
    constructor(object: FunctionCall | Accessor, elements?: (StaticElement | DynamicElement)[]);

    object: FunctionCall | Accessor;
    elements: (StaticElement | DynamicElement)[];

    isAccessorElements: true;
}

export class For {
    constructor(initialization: Statement, condition: Statement, afterthought: Statement);

    initialization: Statement;
    condition: Statement;
    afterthought: Statement;

    body: Statement[];

    isFor: true;
}
