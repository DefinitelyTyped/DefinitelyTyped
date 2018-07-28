// Type definitions for webassemblyjs__ast x.x
// Project: https://github.com/baz/foo (Does not have to be to GitHub, but prefer linking to a source code repository rather than to a project website.)
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "@webassemblyjs/ast" {
    export function traverse(
        ast: any,
        visitor: {
            ModuleImport?: (p: NodePath<ModuleImport>) => void;
            ModuleExport?: (p: NodePath<ModuleExport>) => void;
            Start?: (p: NodePath<Start>) => void;
            Global?: (p: NodePath<Global>) => void;
        }
    ): void;
    export class NodePath<T> {
        node: T;
    }
    export class Node {}
    export class Identifier extends Node {
        value: string;
    }
    export class Start extends Node {
        index: Identifier;
    }
    export class ModuleImport extends Node {
        module: string;
        descr: {
            type: string;
            valtype?: string;
            id?: Identifier;
            signature?: Signature;
        };
        name: string;
    }
    export class ModuleExport extends Node {
        name: string;
        descr: ModuleExportDescr;
    }
    type Index = Identifier | NumberLiteral;
    export class ModuleExportDescr extends Node {
        type: string;
        exportType: string;
        id: Index;
    }
    export class NumberLiteral extends Node {
        value: number;
        raw: string;
    }
    export class FloatLiteral extends Node {}
    export class GlobalType extends Node {
        valtype: string;
    }
    export class Global extends Node {
        init: Instruction[];
        globalType: GlobalType;
    }
    export class FuncParam extends Node {
        valtype: string;
    }
    export class Instruction extends Node {
        id: string;
        args: NumberLiteral[];
    }
    export class CallInstruction extends Instruction {}
    export class ObjectInstruction extends Instruction {}
    export class Func extends Node {
        signature: Signature;
    }
    export class Signature {
        type: "Signature";
        params: FuncParam[];
        results: string[];
    }
    export class TypeInstruction extends Node {}
    export class IndexInFuncSection extends Node {}
    export function indexLiteral(index: number): Index;
    export function numberLiteralFromRaw(num: number): NumberLiteral;
    export function floatLiteral(
        value: number,
        nan?: boolean,
        inf?: boolean,
        raw?: string
    ): FloatLiteral;
    export function global(globalType: string, nodes: Node[]): Global;
    export function identifier(identifier: string): Identifier;
    export function funcParam(valType: string, id: Identifier): FuncParam;
    export function instruction(inst: string, args: Node[]): Instruction;
    export function callInstruction(funcIndex: Index): CallInstruction;
    export function objectInstruction(
        kind: string,
        type: string,
        init: Node[]
    ): ObjectInstruction;
    export function signature(
        params: FuncParam[],
        results: string[]
    ): Signature;
    export function func(
        initFuncId: Identifier,
        signature: Signature,
        funcBody: Signature
    ): Func;
    export function typeInstruction(
        id: Identifier,
        funcType: Signature
    ): TypeInstruction;
    export function indexInFuncSection(index: Index): IndexInFuncSection;
    export function moduleExport(
        identifier: string,
        descr: ModuleExportDescr
    ): ModuleExport;
    export function moduleExportDescr(
        type: string,
        index: Index
    ): ModuleExportDescr;

    export function getSectionMetadata(ast: any, section: string): any;
    export class FuncSignature {
        args: string[];
        result: string[];
    }

    // Node matcher
    export function isGlobalType(n: Node): boolean;
    export function isTable(n: Node): boolean;
    export function isMemory(n: Node): boolean;
    export function isFuncImportDescr(n: Node): boolean;
}
