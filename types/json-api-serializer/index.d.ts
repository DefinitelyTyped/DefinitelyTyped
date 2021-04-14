// Type definitions for json-api-serializer 2.6
// Project: https://github.com/danivek/json-api-serializer#readme
// Definitions by: Emric <https://github.com/Istanful>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare namespace JSONAPISerializer {
  type TypeCallback = (
    relationshipData: { [key: string]: RelationshipOptions },
    data: unknown
  ) => unknown;

  type LinksCallback = (data: unknown, extraData?: unknown) => string | LinksObject;

  type MetaCallback = (data: unknown, extraData?: unknown) => unknown;

  type BeforeSerializeCallback = (data: unknown) => unknown;

  type AfterDeseralizeCallback = (data: unknown) => unknown;

  interface RelationshipOptions {
    type: string | TypeCallback;
    alternativeKey?: string;
    schema?: string;
    links?: LinksObject | LinksCallback;
    meta?: MetaCallback | unknown;
    beforeSerialize?: BeforeSerializeCallback;
  }

  type Case = 'kebab-case' | 'snake_case' | 'camelCase';

  interface Options {
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

  interface DynamicTypeOptions {
    id?: string;
    jsonapiObject?: boolean;
    topLevelLinks?: LinksObject | LinksCallback;
    topLevelMeta?: unknown | MetaCallback;
  }

  interface LinkObject {
    href: string;
    meta: unknown;
  }

  interface LinksObject {
    [name: string]: LinkObject | LinksCallback | string | null;
  }

  interface ResourceObject<T> {
    id: string;
    type: string;
    attributes?: Omit<T, 'id'>;
    relationships?: {
      [key: string]: { data: ResourceObject<any> | Array<ResourceObject<any>> };
    };
    links?: LinksObject | LinksCallback;
  }

  interface JsonApiObject {
    version: string;
  }

  interface ErrorObject {
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

  interface JSONAPIDocument {
    jsonapi?: JsonApiObject;
    links?: LinksObject;
    data?: ResourceObject<unknown> | Array<ResourceObject<unknown>>;
    errors?: ErrorObject[];
    meta?: { [key: string]: unknown };
    included?: Array<ResourceObject<unknown>>;
  }
}

declare class JSONAPISerializer {
  register(type: string, schema?: string | JSONAPISerializer.Options, opts?: JSONAPISerializer.Options): void;

  serialize(type: string, data: unknown, topLevelMeta?: unknown): JSONAPISerializer.JSONAPIDocument;

  serialize(
    type: string,
    data: unknown,
    schema?: string | JSONAPISerializer.Options,
    topLevelMeta?: unknown,
    excludeTopLevelMeta?: boolean,
    overrideSchemaOptions?: { [type: string]: JSONAPISerializer.Options }
  ): JSONAPISerializer.JSONAPIDocument;

  serializeAsync(
    type: string | JSONAPISerializer.DynamicTypeOptions,
    data: unknown | unknown[],
    schema?: string,
    topLevelMeta?: unknown,
    excludeTopLevelMeta?: boolean,
    overrideSchemaOptions?: { [type: string]: JSONAPISerializer.Options }
  ): Promise<JSONAPISerializer.JSONAPIDocument>;

  deserialize(
    type: string | JSONAPISerializer.DynamicTypeOptions,
    data: JSONAPISerializer.JSONAPIDocument,
    schema?: string
  ): any;

  deserializeAsync(
    type: string | JSONAPISerializer.DynamicTypeOptions,
    data: JSONAPISerializer.JSONAPIDocument,
    schema?: string
  ): Promise<any>;

  serializeError(
    error: JSONAPISerializer.ErrorObject | JSONAPISerializer.ErrorObject[] | Error | Error[]
  ): JSONAPISerializer.ErrorObject;
}

export = JSONAPISerializer;
