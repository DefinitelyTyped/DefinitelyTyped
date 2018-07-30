// Type definitions for solc 0.4
// Project: https://github.com/ethereum/solc-js#readme
// Definitions by: Leonid Logvinov <https://github.com/LogvinovLeon>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

export interface ContractCompilationResult {
    srcmap: string;
    srcmapRuntime: string;
    bytecode: string;
    runtimeBytecode: string;
    interface: string;
}
export interface CompilationResult {
    errors: string[];
    contracts: {
        [contractIdentifier: string]: ContractCompilationResult;
    };
    sources: {
        [sourceName: string]: {
            AST: any;
        };
    };
    sourceList: string[];
}
export interface ImportContents {
    contents: string;
}
export interface InputSources {
    sources: {
        [fileName: string]: string;
    };
}
export interface BaseSource {
    keccak256?: string;
}
export interface InMemorySource extends BaseSource {
    content: string;
}
export interface UrlSource extends BaseSource {
    urls: string[];
}
export type Source = UrlSource | InMemorySource;
export type OutputField =
    | "*"
    | "ast"
    | "legacyAST"
    | "abi"
    | "devdoc"
    | "userdoc"
    | "metadata"
    | "ir"
    | "evm.assembly"
    | "evm.legacyAssembly"
    | "evm.bytecode.object"
    | "evm.bytecode.opcodes"
    | "evm.bytecode.sourceMap"
    | "evm.bytecode.linkReferences"
    | "evm.deployedBytecode.object"
    | "evm.deployedBytecode.opcodes"
    | "evm.deployedBytecode.sourceMap"
    | "evm.deployedBytecode.linkReferences"
    | "evm.methodIdentifiers"
    | "evm.gasEstimates"
    | "ewasm.wast"
    | "ewasm.wasm";
export interface CompilerSettings {
    remappings?: string[];
    optimizer?: {
        enabled: boolean;
        runs?: number;
    };
    evmVersion?:
        | "homestead"
        | "tangerineWhistle"
        | "spuriousDragon"
        | "byzantium"
        | "constantinople";
    metadata?: {
        useLiteralContent: true;
    };
    libraries?: {
        [fileName: string]: {
            [libName: string]: string;
        };
    };
    outputSelection: {
        [fileName: string]: {
            [contractName: string]: OutputField[];
        };
    };
}
export interface StandardInput {
    language: "Solidity" | "serpent" | "lll" | "assembly";
    sources: {
        [fileName: string]: Source;
    };
    settings: CompilerSettings;
}
export type ErrorType =
    | "JSONError"
    | "IOError"
    | "ParserError"
    | "DocstringParsingError"
    | "SyntaxError"
    | "DeclarationError"
    | "TypeError"
    | "UnimplementedFeatureError"
    | "InternalCompilerError"
    | "Exception"
    | "CompilerError"
    | "FatalError"
    | "Warning";
export type ErrorSeverity = "error" | "warning";
export interface SolcError {
    sourceLocation?: {
        file: string;
        start: number;
        end: number;
    };
    type: ErrorType;
    component: "general" | "ewasm";
    severity: ErrorSeverity;
    message: string;
    formattedMessage?: string;
}
import { ContractAbi } from "ethereum-protocol";
export interface StandardContractOutput {
    abi: ContractAbi;
    evm: {
        bytecode: {
            object: string;
            sourceMap: string;
        };
        deployedBytecode: {
            object: string;
            sourceMap: string;
        };
    };
}
export interface StandardOutput {
    errors: SolcError[];
    sources: {
        [fileName: string]: {
            id: number;
            ast?: object;
            legacyAST?: object;
        };
    };
    contracts: {
        [fileName: string]: {
            [contractName: string]: StandardContractOutput;
        };
    };
}
export interface SolcInstance {
    compile(
        sources: InputSources,
        optimizerEnabled: number,
        findImports: (importPath: string) => ImportContents
    ): CompilationResult;
    compileStandardWrapper(
        input: string,
        findImports: (importPath: string) => ImportContents
    ): string;
}
export function loadRemoteVersion(
    versionName: string,
    cb: (err: Error | null, res?: SolcInstance) => void
): void;
export function setupMethods(solcBin: any): SolcInstance;
