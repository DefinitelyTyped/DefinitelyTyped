// Type definitions for postgraphile 2.3
// Project: https://github.com/postgraphql/postgraphql/tree/postgraphile
// Definitions by: Jonas Bergner <https://github.com/Java-Jonas>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

interface PostGraphQLOptions {
  classicIds?: boolean;
  dynamicJson?: boolean;
  graphqlRoute?: string;
  graphiqlRoute?: string;
  graphiql?: boolean;
  pgDefaultRole?: string;
  jwtSecret?: string;
  jwtAudiences?: string[];
  jwtRole?: string[];
  jwtPgTypeIdentifier?: string;
  watchPg?: boolean;
  showErrorStack?: boolean;
  extendedErrors?: string[];
  disableQueryLog?: boolean;
  disableDefaultMutations?: boolean;
  enableCors?: boolean;
  exportJsonSchemaPath?: string;
  exportGqlSchemaPath?: string;
  bodySizeLimit?: string;
  pgSettings?: { [key: string]: any } | ((req: any) => Promise<{ [key: string]: any }>);
  appendPlugins?: Array<(builder: any, options: any) => void>;
  prependPlugins?: Array<(builder: any) => {}>;
  replaceAllPlugins?: Array<(builder: any) => {}>;
  additionalGraphQLContextFromRequest?: (req: any, res: any) => Promise<{}>;
  readCache?: string;
  writeCache?: string;
}

declare function postgraphile(
  connection_string: any,
  schema: string | string[],
  options?: PostGraphQLOptions
): any;

export default postgraphile;
