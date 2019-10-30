// Type definitions for relay-compiler 7.0
// Project: https://relay.dev
// Definitions by: n1ru4l <https://github.com/n1ru4l>
//                 Eloy Durán <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.6

import * as ASTConvert from './lib/core/ASTConvert';
import * as Parser from './lib/core/RelayParser';
import * as Printer from './lib/core/GraphQLIRPrinter';
import * as IRTransforms from './lib/core/RelayIRTransforms';
import * as IRVisitor from './lib/core/GraphQLIRVisitor';
import * as SchemaUtils from './lib/core/GraphQLSchemaUtils';

import ConsoleReporter = require('./lib/reporters/GraphQLConsoleReporter');
import MultiReporter = require('./lib/reporters/GraphQLMultiReporter');

declare var transformASTSchema: typeof ASTConvert.transformASTSchema;

export {
    ASTConvert,
    ConsoleReporter,
    IRTransforms,
    IRVisitor,
    MultiReporter,
    Parser,
    Printer,
    SchemaUtils,
    transformASTSchema,
};

export { main as relayCompiler } from './lib/bin/RelayCompilerMain';
export { GraphQLCompilerContext } from './lib/core/GraphQLCompilerContext';
export { FormatModule, TypeGenerator } from './lib/language/RelayLanguagePluginInterface';
export {
    Argument,
    ArgumentDefinition,
    ArgumentValue,
    Condition,
    Definition,
    Directive,
    Field,
    Fragment,
    FragmentSpread,
    GeneratedDefinition,
    Handle,
    InlineFragment,
    IR,
    LinkedField,
    ListValue,
    Literal,
    LocalArgumentDefinition,
    ModuleImport,
    Metadata,
    Node,
    ObjectFieldValue,
    ObjectValue,
    Request,
    Root,
    RootArgumentDefinition,
    ScalarField,
    ScalarFieldType,
    Selection,
    SplitOperation,
    Variable,
} from './lib/core/GraphQLIR';

export { createUserError } from './lib/core/RelayCompilerError';

export {
    EnumTypeID,
    FieldID,
    ScalarTypeID,
    Schema,
    TypeID,
} from './lib/core/Schema';
