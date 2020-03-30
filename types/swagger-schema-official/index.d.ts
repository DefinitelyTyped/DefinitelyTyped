// Type definitions for swagger-schema-official 2.0
// Project: https://swagger.io/specification/
// Definitions by: Mohsen Azimi <https://github.com/mohsen1>, Ben Southgate <https://github.com/bsouthga>, Nicholas Merritt <https://github.com/nimerritt>, Mauri Edo <https://github.com/mauriedo>, Vincenzo Chianese <https://github.com/XVincentX>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.2

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
  type: ParameterType;
}

// ----------------------------- Parameter -----------------------------------

export type ParameterType = 'string' | 'number' | 'integer' | 'boolean' | 'array' | 'object' | 'file';

export type BaseParameter = {
  name: string;
  in: 'body' | 'query' | 'path' | 'header' | 'formData' | 'body';
  required?: boolean;
  description?: string;
};

export type BodyParameter = BaseParameter & {
  in: 'body';
  schema?: Schema;
};

export type GenericFormat = {
  type?: ParameterType;
  format?: string;
};

export type IntegerFormat = {
  type: 'integer';
  format?: 'int32' | 'int64';
};

export type NumberFormat = {
  type: 'number';
  format?: 'float' | 'double';
};

export type StringFormat = {
  type: 'string';
  format?: '' | 'byte' | 'binary' | 'date' | 'date-time' | 'password';
};

export type SchemaFormatConstraints = GenericFormat | IntegerFormat | NumberFormat | StringFormat;
export type BaseFormatContrainedParameter = BaseParameter & SchemaFormatConstraints;
export type ParameterCollectionFormat = 'csv' | 'ssv' | 'tsv' | 'pipes' | 'multi';

export type QueryParameter = BaseFormatContrainedParameter &
  BaseSchema & {
    in: 'query';
    allowEmptyValue?: boolean;
    collectionFormat?: ParameterCollectionFormat;
  };

export type PathParameter = BaseFormatContrainedParameter &
  BaseSchema & {
    in: 'path';
    required: true;
  };

export type HeaderParameter = BaseFormatContrainedParameter &
  BaseSchema & {
    in: 'header';
  };

export type FormDataParameter = BaseFormatContrainedParameter &
  BaseSchema & {
    in: 'formData';
    type: ParameterType | 'file';
    allowEmptyValue?: boolean;
    collectionFormat?: ParameterCollectionFormat;
  };

export type Parameter = BodyParameter | FormDataParameter | QueryParameter | PathParameter | HeaderParameter;

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
  parameters?: Array<Parameter | Reference>;
}

// ----------------------------- Operation -----------------------------------
export interface Operation {
  responses: { [responseName: string]: Response | Reference };
  summary?: string;
  description?: string;
  externalDocs?: ExternalDocs;
  operationId?: string;
  produces?: string[];
  consumes?: string[];
  parameters?: Array<Parameter | Reference>;
  schemes?: string[];
  deprecated?: boolean;
  security?: Array<{ [securityDefinitionName: string]: string[] }>;
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
export type BaseSchema = {
  type?: ParameterType;
  format?: string;
  title?: string;
  description?: string;
  default?: any;
  multipleOf?: number;
  maximum?: number;
  exclusiveMaximum?: boolean;
  minimum?: number;
  exclusiveMinimum?: boolean;
  maxLength?: number;
  minLength?: number;
  pattern?: string;
  maxItems?: number;
  minItems?: number;
  uniqueItems?: boolean;
  maxProperties?: number;
  minProperties?: number;
  enum?: any[];
  items?: Schema | Schema[];
};

export interface Schema extends BaseSchema {
  $ref?: string;
  allOf?: Schema[];
  additionalProperties?: Schema | boolean;
  properties?: { [propertyName: string]: Schema };
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
  type: 'basic' | 'apiKey' | 'oauth2';
  description?: string;
}

export interface BasicAuthenticationSecurity extends BaseSecurity {
  type: 'basic';
}

export interface ApiKeySecurity extends BaseSecurity {
  type: 'apiKey';
  name: string;
  in: 'query' | 'header';
}

export interface BaseOAuthSecurity extends BaseSecurity {
  type: 'oauth2';
  flow: 'accessCode' | 'application' | 'implicit' | 'password';
  scopes?: OAuthScope;
}

export interface OAuth2ImplicitSecurity extends BaseOAuthSecurity {
  type: 'oauth2';
  flow: 'implicit';
  authorizationUrl: string;
}

export interface OAuth2PasswordSecurity extends BaseOAuthSecurity {
  type: 'oauth2';
  flow: 'password';
  tokenUrl: string;
}

export interface OAuth2ApplicationSecurity extends BaseOAuthSecurity {
  type: 'oauth2';
  flow: 'application';
  tokenUrl: string;
}

export interface OAuth2AccessCodeSecurity extends BaseOAuthSecurity {
  type: 'oauth2';
  flow: 'accessCode';
  tokenUrl: string;
  authorizationUrl: string;
}

export interface OAuthScope {
  [scopeName: string]: string;
}

export type Security =
  | BasicAuthenticationSecurity
  | OAuth2AccessCodeSecurity
  | OAuth2ApplicationSecurity
  | OAuth2ImplicitSecurity
  | OAuth2PasswordSecurity
  | ApiKeySecurity;

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
  paths: { [pathName: string]: Path };
  definitions?: { [definitionsName: string]: Schema };
  parameters?: { [parameterName: string]: BodyParameter | QueryParameter };
  responses?: { [responseName: string]: Response };
  security?: Array<{ [securityDefinitionName: string]: string[] }>;
  securityDefinitions?: { [securityDefinitionName: string]: Security };
  tags?: Tag[];
}
