// Type definitions for swagger-schema-official 2.0
// Project: http://swagger.io/specification/
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>, Ben Southgate <https://github.com/bsouthga>, Nicholas Merritt <https://github.com/nimerritt>, Mauri Edo <https://github.com/mauriedo>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export interface Info {
  title: string;
  version: string;
  description?: string;
  termsOfService?: string;
  contact?: Contact;
  license?: License;
}

export interface Contact {
  name?: string;
  email?: string;
  url?: string;
}

export interface License {
  name: string;
  url?: string;
}

export interface ExternalDocs {
  url: string;
  description?: string;
}

export interface Tag {
  name: string;
  description?: string;
  externalDocs?: ExternalDocs;
}

export interface Header extends BaseSchema {
  type: string;
}

// ----------------------------- Parameter -----------------------------------
export interface BaseParameter {
  name: string;
  in: string;
  required?: boolean;
  description?: string;
}

export interface BodyParameter extends BaseParameter {
  schema?: Schema;
}

export interface QueryParameter extends BaseParameter, BaseSchema {
  type: string;
  allowEmptyValue?: boolean;
}

export interface PathParameter extends BaseParameter, BaseSchema {
  type: string;
  required: boolean;
}

export interface HeaderParameter extends BaseParameter, BaseSchema {
  type: string;
}

export interface FormDataParameter extends BaseParameter, BaseSchema {
  type: string;
  collectionFormat?: string;
  allowEmptyValue?: boolean;
}

export type Parameter =
  BodyParameter |
  FormDataParameter |
  QueryParameter |
  PathParameter |
  HeaderParameter;

// ------------------------------- Path --------------------------------------
export interface Path {
  $ref?: string;
  get?: Operation;
  put?: Operation;
  post?: Operation;
  delete?: Operation;
  options?: Operation;
  head?: Operation;
  patch?: Operation;
  parameters?: Parameter[] | Reference[];
}

// ----------------------------- Operation -----------------------------------
export interface Operation {
  responses: { [responseName: string]: Response | Reference};
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocs;
  operationId?: string;
  produces?: string[];
  consumes?: string[];
  parameters?: Parameter[] | Reference[];
  schemes?: string[];
  deprecated?: boolean;
  security?: Security[];
  tags?: string[];
}

// ----------------------------- Reference -----------------------------------
export interface Reference {
  $ref: string;
}

// ----------------------------- Response ------------------------------------
export interface Response {
  description: string;
  schema?: Schema;
  headers?: { [headerName: string]: Header };
  examples?: { [exampleName: string]: {} };
}

// ------------------------------ Schema -------------------------------------
export interface BaseSchema {
  format?: string;
  title?: string;
  description?: string;
  default?: string|boolean|number|{};
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: number;
  minimum?: number;
  exclusiveMinimum?: number;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  enum?: Array<string | boolean | number | {}>;
  type?: string;
  items?: Schema|Schema[];
}

export interface Schema extends BaseSchema {
  $ref?: string;
  allOf?: Schema[];
  additionalProperties?: Schema;
  properties?: {[propertyName: string]: Schema};
  discriminator?: string;
  readOnly?: boolean;
  xml?: XML;
  externalDocs?: ExternalDocs;
  example?: any;
  required?: string[];
}

export interface XML {
  name?: string;
  namespace?: string;
  prefix?: string;
  attribute?: boolean;
  wrapped?: boolean;
}

// ----------------------------- Security ------------------------------------
export interface BaseSecurity {
  type: string;
  description?: string;
}

// tslint:disable-next-line no-empty-interface
export interface BasicAuthenticationSecurity extends BaseSecurity {
  // It's the exact same interface as BaseSecurity
}

export interface ApiKeySecurity extends BaseSecurity {
  name: string;
  in: string;
}

export interface BaseOAuthSecuirty extends BaseSecurity {
  flow: string;
}

export interface OAuth2ImplicitSecurity extends BaseOAuthSecuirty {
  authorizationUrl: string;
}

export interface OAuth2PasswordSecurity extends BaseOAuthSecuirty {
  tokenUrl: string;
  scopes?: OAuthScope[];
}

export interface OAuth2ApplicationSecurity extends BaseOAuthSecuirty {
  tokenUrl: string;
  scopes?: OAuthScope[];
}

export interface OAuth2AccessCodeSecurity extends BaseOAuthSecuirty {
  tokenUrl: string;
  authorizationUrl: string;
  scopes?: OAuthScope[];
}

export interface OAuthScope {
  [scopeName: string]: string;
}

export type Security =
  BasicAuthenticationSecurity |
  OAuth2AccessCodeSecurity |
  OAuth2ApplicationSecurity |
  OAuth2ImplicitSecurity |
  OAuth2PasswordSecurity |
  ApiKeySecurity;

// --------------------------------- Spec ------------------------------------
export interface Spec {
  swagger: string;
  info: Info;
  externalDocs?: ExternalDocs;
  host?: string;
  basePath?: string;
  schemes?: string[];
  consumes?: string[];
  produces?: string[];
  paths: {[pathName: string]: Path};
  definitions?: {[definitionsName: string]: Schema };
  parameters?: {[parameterName: string]: BodyParameter|QueryParameter};
  responses?: {[responseName: string]: Response };
  security?: Array<{[securityDefinitionName: string]: string[]}>;
  securityDefinitions?: { [securityDefinitionName: string]: Security};
  tags?: Tag[];
}
