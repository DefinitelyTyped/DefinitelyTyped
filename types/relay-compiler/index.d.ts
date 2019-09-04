// Type definitions for relay-compiler 5.0
// Project: https://relay.dev
// Definitions by: n1ru4l <https://github.com/n1ru4l>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.0

import { GraphQLCompilerContext } from './lib/GraphQLCompilerContext';
import * as ASTConvert from './lib/ASTConvert';

import * as Parser from './lib/RelayParser';
import * as Printer from './lib/GraphQLIRPrinter';
import ConsoleReporter = require('./lib/GraphQLConsoleReporter');
import MultiReporter = require('./lib/GraphQLMultiReporter');

declare var transformASTSchema: typeof ASTConvert.transformASTSchema;

export { GraphQLCompilerContext, ASTConvert, transformASTSchema, Parser, Printer, ConsoleReporter, MultiReporter };
