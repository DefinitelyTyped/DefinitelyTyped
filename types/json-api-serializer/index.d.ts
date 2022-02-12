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
    alternativeKey?: string | undefined;
    schema?: string | undefined;
    links?: LinksObject | LinksCallback | undefined;
    meta?: MetaCallback | Meta | undefined;
    beforeSerialize?: BeforeSerializeCallback | undefined;
  }

  type Case = 'kebab-case' | 'snake_case' | 'camelCase';

  interface Options {
    id?: string | undefined;
    blacklist?: string[] | undefined;
    whitelist?: string[] | undefined;
    jsonapiObject?: boolean | undefined;
    links?: LinksObject | LinksCallback | undefined;
    topLevelLinks?: LinksCallback | LinksObject | undefined;
    topLevelMeta?: MetaCallback | unknown | undefined;
    meta?: MetaCallback | Meta | undefined;
    relationships?: {
      [key: string]: RelationshipOptions;
    } | undefined;
    blacklistOnDeserialize?: string[] | undefined;
    whitelistOnDeserialize?: string[] | undefined;
    convertCase?: Case | undefined;
    unconvertCase?: Case | undefined;
    convertCaseCacheSize?: number | undefined;
    beforeSerialize?: BeforeSerializeCallback | undefined;
    afterDeserialize?: AfterDeseralizeCallback | undefined;
  }

  interface DynamicTypeOptions {
    id?: string | undefined;
    jsonapiObject?: boolean | undefined;
    topLevelLinks?: LinksObject | LinksCallback | undefined;
    topLevelMeta?: unknown | MetaCallback | undefined;
  }

  interface LinkObject {
    href: string;
    meta?: Meta;
  }

  interface LinksObject {
    self?: LinkObject | LinksCallback | string | null;
    related?: LinkObject | LinksCallback | string | null;
  }

  interface ResourceObject<T> {
    id: string;
    type: string;
    attributes?: Omit<T, 'id'> | undefined;
    relationships?: {
      [key: string]: Relationship;
    } | undefined;
    links?: LinksObject | LinksCallback | undefined;
  }

  type Relationship = {
    links?: LinksObject | LinksCallback | undefined;
    data: Linkage | Linkage[];
    meta?: Meta;
  } | {
      links?: LinksObject | LinksCallback | undefined;
      data?: Linkage | Linkage[];
      meta: Meta;
  } | {
      links: LinksObject | LinksCallback | undefined;
      data?: Linkage | Linkage[];
      meta?: Meta;
  };

  interface Meta {
    [name: string]: unknown;
  }

  interface Linkage {
    type: string;
    id: string;
    meta?: Meta;
  }

  interface JsonApiObject {
    version: string;
  }

  interface ErrorObject {
    id?: string | undefined;
    links?: LinksObject & {
      about: LinkObject | string;
    } | undefined;
    status?: string | undefined;
    code?: string | undefined;
    title?: string | undefined;
    detail?: string | undefined;
    source?: unknown | undefined;
    meta?: Meta | undefined;
  }

  interface JSONAPIDocument {
    jsonapi?: JsonApiObject | undefined;
    links?: LinksObject | undefined;
    data?: ResourceObject<unknown> | Array<ResourceObject<unknown>> | undefined;
    errors?: ErrorObject[] | undefined;
    meta?: Meta | undefined;
    included?: Array<ResourceObject<unknown>> | undefined;
  }
}

declare class JSONAPISerializer {
  constructor(opts?: JSONAPISerializer.Options);

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
