export class Comment {
    constructor(comment: string);

    comment: string;

    readonly isComment: true;
}

export class Program {
    constructor(body?: Statement[]);

    body: Statement[];

    readonly isProgram: true;
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
    | Continue
    | Break
    | Accessor
    | StaticElement
    | DynamicElement
    | AccessorElements
    | For
    | While
    | Switch
    | SwitchCase
    | StructMember
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

    readonly isVariableDeclaration: true;
}

export class Uniform {
    constructor(type: string, name: string);

    type: string;
    name: string;

    readonly isUniform: true;
}

export class Varying {
    constructor(type: string, name: string);

    type: string;
    name: string;

    readonly isVarying: true;
}

export class FunctionParameter {
    constructor(type: string, name: string, qualifier?: string | null, immutable?: boolean);

    type: string;
    name: string;
    qualifier: string | null;
    immutable: boolean;

    readonly isFunctionParameter: true;
}

export class FunctionDeclaration {
    constructor(type: string, name: string, params?: FunctionParameter[], body?: Statement[]);

    type: string;
    name: string;
    params: FunctionParameter[];
    body: Statement[];

    readonly isFunctionDeclaration: true;
}

export class Expression {
    constructor(expression: string);

    expression: string;

    readonly isExpression: true;
}

export class Ternary {
    constructor(cond: Statement, left: Statement, right: Statement);

    cond: Statement;
    left: Statement;
    right: Statement;

    readonly isTernary: true;
}

export class Operator {
    constructor(type: string, left: Statement, right: Statement);

    type: string;
    left: Statement;
    right: Statement;

    readonly isOperator: true;
}

export class Unary {
    constructor(type: string, expression: Statement, after?: boolean);

    type: string;
    expression: Statement;
    after: boolean;

    readonly isUnary: true;
}

export class Number {
    constructor(value: string, type?: string);

    type: string;
    value: string;

    readonly isNumber: true;
}

export class String {
    constructor(value: string);

    value: string;

    readonly isString: true;
}

export class Conditional {
    constructor(cond?: Conditional | null, body?: Statement[]);

    cond: Conditional | null;
    body: Statement[];
    elseConditional: Conditional | null;

    readonly isConditional: true;
}

export class FunctionCall {
    constructor(name: string, params?: Statement[]);

    name: string;
    params: Statement[];

    readonly isFunctionCall: true;
}

export class Return {
    constructor(value: Statement);

    value: Statement;

    readonly isReturn: true;
}

export class Discard {
    constructor();

    readonly isDiscard: true;
}

export class Continue {
    constructor();

    readonly isContinue: true;
}

export class Break {
    constructor();

    readonly isBreak: true;
}

export class Accessor {
    constructor(property: string);

    property: string;

    readonly isAccessor: true;
}

export class StaticElement {
    constructor(value: Statement);

    value: Statement;

    readonly isStaticElement: true;
}

export class DynamicElement {
    constructor(value: Statement);

    value: Statement;

    readonly isDynamicElement: true;
}

export class AccessorElements {
    constructor(object: FunctionCall | Accessor, elements?: (StaticElement | DynamicElement)[]);

    object: FunctionCall | Accessor;
    elements: (StaticElement | DynamicElement)[];

    readonly isAccessorElements: true;
}

export class For {
    constructor(initialization: Statement, condition: Statement, afterthought: Statement, body?: Statement[]);

    initialization: Statement;
    condition: Statement;
    afterthought: Statement;
    body: Statement[];

    readonly isFor: true;
}

export class While {
    constructor(condition: Statement, body?: Statement[]);

    condition: Statement;
    body: Statement[];

    readonly isWhile: true;
}

export class Switch {
    constructor(discriminant: Statement, cases: Statement[]);

    discriminant: Statement;
    cases: Statement[];

    readonly isSwitch: true;
}

export class SwitchCase {
    constructor(body: Statement, conditions?: Statement[] | null);

    body: Statement[];
    conditions: Statement[];

    isDefault: boolean;
    readonly isSwitchCase: true;
}

export class StructMember {
    type: string;
    name: string;
    readonly isStructMember: true;

    constructor(type: string, name: string);
}

export class StructDefinition {
    name: string;
    members: StructMember[];
    readonly isStructDefinition: true;

    constructor(name: string, members?: StructMember[]);
}
