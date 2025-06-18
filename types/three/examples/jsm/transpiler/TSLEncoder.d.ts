import {
    Conditional,
    Expression,
    For,
    FunctionDeclaration,
    Program,
    Statement,
    Ternary,
    Uniform,
    VariableDeclaration,
    Varying,
} from "./AST.js";

export default class TSLEncoder {
    constructor();

    tab: string;
    imports: Set<string>;
    global: Set<string>;
    overloadings: Map<string, string>;
    iife: boolean;
    uniqueNames: boolean;
    reference: boolean;

    addImport(name: string): void;
    emitUniform(node: Uniform): string;
    emitExpression(node: Expression): string;
    emitBody(body: Statement[]): string;
    emitTernary(node: Ternary): string;
    emitConditional(node: Conditional): string;
    emitLoop(node: For): string;
    emitFor(node: For): string;
    emitForWhile(node: For): string;
    emitVariables(node: VariableDeclaration, isRoot?: boolean): string;
    emitVarying(node: Varying): string;
    emitOverloadingFunction(nodes: FunctionDeclaration[]): string;
    emitFunction(node: FunctionDeclaration): string;
    setLastStatement(statement: Statement | null): void;
    emitExtraLine(statement: Statement): string;
    emit(ast: Program): string;
}
