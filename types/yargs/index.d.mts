import yargs = require("./index.js");
interface RequireType {
  (path: string): Function;
  main: MainType;
}

interface MainType {
  filename: string;
  children: MainType[];
}
declare const _instanceFactory: (
  processArgs?: ReadonlyArray<string> | string,
  cwd?: string, 
  parentRequire?: RequireType
) => yargs.Argv;
export default _instanceFactory;

export type {
    BuilderCallback,
    ParserConfigurationOptions,
    Argv,
    Arguments,
    ArgumentsCamelCase,
    RequireDirectoryOptions,
    Options,
    PositionalOptions,
    Defined,
    ToArray,
    ToString,
    ToNumber,
    InferredOptionType,
    InferredOptionTypePrimitive,
    InferredOptionTypeInner,
    InferredOptionTypes,
    CommandModule,
    ParseCallback,
    CommandBuilder,
    SyncCompletionFunction,
    AsyncCompletionFunction,
    PromiseCompletionFunction,
    FallbackCompletionFunction,
    MiddlewareFunction,
    Choices,
    PositionalOptionsType,
    CompletionCallback,
} from './index.js';
