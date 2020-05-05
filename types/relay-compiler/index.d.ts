// Type definitions for relay-compiler 8.0
// Project: https://relay.dev
// Definitions by: n1ru4l <https://github.com/n1ru4l>
//                 Eloy Durán <https://github.com/alloy>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.4

import * as ASTConvert from './lib/core/ASTConvert';
import { CompilerContext } from './lib/core/CompilerContext';
import * as Parser from './lib/core/RelayParser';
import * as Printer from './lib/core/IRPrinter';
import * as IRTransforms from './lib/core/RelayIRTransforms';
import * as IRVisitor from './lib/core/IRVisitor';
import * as SchemaUtils from './lib/core/GraphQLSchemaUtils';

import ConsoleReporter = require('./lib/reporters/ConsoleReporter');
import MultiReporter = require('./lib/reporters/MultiReporter');

declare var transformASTSchema: typeof ASTConvert.transformASTSchema;

export {
    ASTConvert,
    CompilerContext,
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
    Selection,
    SplitOperation,
    Variable,
} from './lib/core/IR';

export { createUserError } from './lib/core/RelayCompilerError';

export { EnumTypeID, FieldID, ScalarTypeID, Schema, TypeID } from './lib/core/Schema';
