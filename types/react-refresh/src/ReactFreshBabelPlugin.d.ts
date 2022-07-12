import * as Babel from '@babel/core';

export interface BabelPluginOptions {
    skipEnvCheck?: boolean | undefined;
    emitFullSignatures?: boolean | undefined;
    refreshReg?: string | undefined;
    refreshSig?: string | undefined;
}

export interface BabelPluginReturn {
    visitor: {
        ExportDefaultDeclaration(path: Babel.NodePath): void;
        FunctionDeclaration: {
            enter: (path: Babel.NodePath) => void;
            exit: (path: Babel.NodePath) => void | boolean;
        };
        'ArrowFunctionExpression|FunctionExpression': {
            exit: (path: Babel.NodePath) => void | boolean;
        };
        VariableDeclaration(path: Babel.NodePath): void;
        Program: {
            enter: (path: Babel.NodePath) => void;
            exit: (path: Babel.NodePath) => void;
        };
    };
}

export default function(babel: typeof Babel, opts?: BabelPluginOptions): BabelPluginReturn;
