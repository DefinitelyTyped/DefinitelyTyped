// Type definitions for json-api-serializer 2.6
// Project: https://github.com/danivek/json-api-serializer#readme
// Definitions by: Emric <https://github.com/Istanful>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

export type TypeCallback = (relationshipData: { [key: string]: RelationshipOptions }, data: unknown) => unknown;

export type LinksCallback = (data: unknown, extraData?: unknown) => string | LinksObject;

export type MetaCallback = (data: unknown, extraData?: unknown) => unknown;

export type BeforeSerializeCallback = (data: unknown) => unknown;

export type AfterDeseralizeCallback = (data: unknown) => unknown;

export interface RelationshipOptions {
  type: string | TypeCallback;
  alternativeKey?: string;
  schema?: string;
  links?: LinksObject | LinksCallback;
  meta?: MetaCallback | unknown;
  beforeSerialize?: BeforeSerializeCallback;
}

export type Case = 'kebab-case' | 'snake_case' | 'camelCase';

export interface  Options {
  id?: string;
  blacklist?: string[];
  whitelist?: string[];
  jsonapiObject?: boolean;
  links?: LinksObject | LinksCallback;
  topLevelLinks?: LinksCallback | LinksObject;
  topLevelMeta?: MetaCallback | unknown;
  meta?: MetaCallback | unknown;
  relationships?: {
    [key: string]: RelationshipOptions;
  };
  blacklistOnDeserialize?: string[];
  whitelistOnDeserialize?: string[];
  convertCase?: Case;
  unconvertCase?: Case;
  convertCaseCacheSize?: number;
  beforeSerialize?: BeforeSerializeCallback;
  afterDeserialize?: AfterDeseralizeCallback;
}

export interface DynamicTypeOptions {
  id?: string;
  jsonapiObject?: boolean;
  topLevelLinks?: LinksObject | LinksCallback;
  topLevelMeta?: unknown | MetaCallback;
}

export interface LinkObject {
  href: string;
  meta: unknown;
}

export interface LinksObject {
  [name: string]: LinkObject | LinksCallback | string | null;
}

export interface ResourceObject<T> {
  id: string;
  type: string;
  attributes?: Omit<T, 'id'>;
  relationships?: {
    [key: string]: { data: ResourceObject<any> | Array<ResourceObject<any>> };
  };
  links?: LinksObject | LinksCallback;
}

export interface JsonApiObject {
  version: string;
}

export interface ErrorObject {
  id?: string;
  links?: LinksObject & {
    about: LinkObject | string;
  };
  status?: string;
  code?: string;
  title?: string;
  detail?: string;
  source?: unknown;
  meta?: unknown;
}

export interface JSONAPIDocument {
  jsonapi?: JsonApiObject;
  links?: LinksObject;
  data?: ResourceObject<unknown> | Array<ResourceObject<unknown>>;
  errors?: ErrorObject[];
  meta?: { [key: string]: unknown };
  included?: Array<ResourceObject<unknown>>;
}

declare class JSONAPISerializer {
  register(type: string, schema?: string | Options, opts?: Options): void;

  serialize(
    type: string,
    data: unknown,
    topLevelMeta?: unknown,
  ): JSONAPIDocument;

  serialize(
    type: string,
    data: unknown,
    schema?: string | Options,
    topLevelMeta?: unknown,
    excludeTopLevelMeta?: boolean,
    overrideSchemaOptions?: { [type: string]: Options }
  ): JSONAPIDocument;

  serializeAsync(
    type: string | DynamicTypeOptions,
    data: unknown | unknown[],
    schema?: string,
    topLevelMeta?: unknown,
    excludeTopLevelMeta?: boolean,
    overrideSchemaOptions?: { [type: string]: Options }
  ): Promise<JSONAPIDocument>;

  deserialize(
    type: string | DynamicTypeOptions,
    data: JSONAPIDocument,
    schema?: string
  ): any;

  deserializeAsync(
    type: string | DynamicTypeOptions,
    data: JSONAPIDocument,
    schema?: string
  ): Promise<any>;

  serializeError(error: ErrorObject | ErrorObject[] | Error | Error[]): ErrorObject;
}

export default JSONAPISerializer;
