import {
    Comment,
    Conditional,
    Expression,
    For,
    FunctionDeclaration,
    Program,
    Statement,
    StructDefinition,
    Switch,
    Ternary,
    Uniform,
    VariableDeclaration,
    Varying,
    While,
} from "./AST.js";

export default class TSLEncoder {
    constructor();

    tab: string;
    imports: Set<string>;
    global: Set<string>;
    overloadings: Map<string, string>;
    iife: boolean;
    reference: boolean;
    block: Statement | null;

    addImport(name: string): void;
    emitUniform(node: Uniform): string;
    emitExpression(node: Expression, output?: string | null): string;
    emitBody(body: Statement[]): string;
    emitTernary(node: Ternary): string;
    emitConditional(node: Conditional): string;
    emitLoop(node: For): string;
    emitSwitch(switchNode: Switch): string;
    emitFor(node: For): string;
    emitForWhile(node: For): string;
    emitWhile(node: While): string;
    emitVariables(node: VariableDeclaration, isRoot?: boolean): string;
    emitVarying(node: Varying): string;
    emitStructDefinition(node: StructDefinition): string;
    emitOverloadingFunction(nodes: FunctionDeclaration[]): string;
    emitFunction(node: FunctionDeclaration): string;
    setLastStatement(statement: Statement | null): void;
    emitComment(statement: Comment, body: Statement[]): string;
    emitExtraLine(statement: Statement, body: Statement[]): string;
    emit(ast: Program): string;
}
