// Type definitions for relay-compiler 6.0
// Project: https://relay.dev
// Definitions by: n1ru4l <https://github.com/n1ru4l>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { GraphQLCompilerContext } from './lib/core/GraphQLCompilerContext';
import * as ASTConvert from './lib/core/ASTConvert';

import * as Parser from './lib/core/RelayParser';
import * as Printer from './lib/core/GraphQLIRPrinter';
import ConsoleReporter = require('./lib/reporters/GraphQLConsoleReporter');
import MultiReporter = require('./lib/reporters/GraphQLMultiReporter');

declare var transformASTSchema: typeof ASTConvert.transformASTSchema;

export { GraphQLCompilerContext, ASTConvert, transformASTSchema, Parser, Printer, ConsoleReporter, MultiReporter };
