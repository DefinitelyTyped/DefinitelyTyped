// Type definitions for @sanity/base 2.30
// Project: https://github.com/sanity-io/sanity/tree/next/packages/%40sanity/base
// Definitions by: Saiichi Hashimoto <https://github.com/saiichihashimoto>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

type ComponentType<P> = import('react').ComponentType<P>;
type DiffComponent = import('@sanity/field/diff').DiffComponent;
type ReactElement = import('react').ReactElement;
type ReactNode = import('react').ReactNode;
type Schema = typeof import('@sanity/schema');
type ValidationContext = import('@sanity/types').ValidationContext;

type MaybeArray<T> = T | T[];
type MaybePromise<T> = T | Promise<T>;

/** @link https://www.sanity.io/docs/validation */
interface Rule<ExtendingRule, Value> {
    custom: (
        validator: (value: Value | undefined, context: ValidationContext) => MaybePromise<true | string>,
    ) => ExtendingRule;
    error: (message: string) => ExtendingRule;
    required: () => ExtendingRule;
    valueOfField: (field: string) => unknown;
    warning: (message: string) => ExtendingRule;
}

interface LengthRule<ExtendingRule> {
    length: (exactLength: number) => ExtendingRule;
}

interface MinMaxRule<ExtendingRule> {
    max: (maxValue: number) => ExtendingRule;
    min: (minLength: number) => ExtendingRule;
}

interface StringContentRule<ExtendingRule> {
    lowercase: () => ExtendingRule;
    regex: (
        regex: RegExp,
        options?: {
            invert?: boolean;
            name?: string;
        },
    ) => ExtendingRule;
    uppercase: () => ExtendingRule;
}

interface ListItem<Value> {
    title: string;
    value: Value;
}

type ListItems<Value> = Value[] | Array<ListItem<Value>>;

type ListOptions<Value> =
    | {
          layout?: 'dropdown';
          list?: ListItems<Value>;
      }
    | {
          direction?: 'horizontal' | 'vertical';
          layout: 'radio';
          list?: ListItems<Value>;
      };

interface NamedDef<Name extends string> {
    name: Name;
    title?: string;
}

/** @link https://www.sanity.io/docs/initial-value-templates */
interface WithInitialValue<Value> {
    initialValue?: Value | (() => MaybePromise<Value>);
}

/** @link https://www.sanity.io/docs/conditional-fields */
type ConditionalField<Value> =
    | boolean
    | ((context: {
          currentUser: {
              email: string;
              id: string;
              name: string;
              profileImage: string;
              roles: Array<{
                  description?: string;
                  name: string;
                  title?: string;
              }>;
          };
          document?: unknown;
          parent?: unknown;
          value: Value;
      }) => boolean);

interface WithConditionalFields<Value> {
    hidden?: ConditionalField<Value>;
    readOnly?: ConditionalField<Value>;
}

/** @link https://www.sanity.io/docs/schema-types */
interface FieldDef<Rule, Value> extends WithInitialValue<Value>, WithConditionalFields<Value> {
    /** @link https://github.com/ricokahler/sanity-codegen/tree/alpha#schema-codegen-options */
    codegen?: { required: boolean };
    description?: string;
    diffComponent?: DiffComponent;
    /** @link https://www.sanity.io/docs/custom-input-widgets */
    inputComponent?: ComponentType<{
        compareValue: unknown;
        focusPath: unknown;
        level: number;
        markers: Array<{
            path: [{ _key: string }];
            type: string;
            value: string;
        }>;
        onBlur: (event: unknown) => void;
        onChange: (event: unknown) => void;
        onFocus: (event: unknown) => void;
        placeholder: string;
        presence: Array<{ path: unknown[] }>;
        readOnly: boolean;
        // This isn't just a copy of the schema (validation is totally different) although it seems very similar
        type: unknown;
        value: Value;
    }>;
    /** @link https://www.sanity.io/docs/validation */
    validation?: (rule: Rule) => MaybeArray<Rule>;
}

/** @link https://www.sanity.io/docs/boolean-type#validation */
interface BooleanRule extends Rule<BooleanRule, boolean> {}

/** @link https://www.sanity.io/docs/boolean-type */
interface BooleanFieldDef extends FieldDef<BooleanRule, boolean> {
    options?: { layout?: 'checkbox' | 'switch' };
    type: 'boolean';
}

/** @link https://www.sanity.io/docs/date-type#validation */
interface DateRule extends Rule<DateRule, string> {}

/** @link https://www.sanity.io/docs/date-type */
interface DateFieldDef extends FieldDef<DateRule, string> {
    options?: {
        calendarTodayLabel?: string;
        dateFormat?: string;
    };
    type: 'date';
}

/** @link https://www.sanity.io/docs/datetime-type#validation */
interface DatetimeRule extends Rule<DatetimeRule, string>, MinMaxRule<DatetimeRule> {}

/** @link https://www.sanity.io/docs/datetime-type */
interface DatetimeFieldDef extends FieldDef<DatetimeRule, string> {
    options?: {
        calendarTodayLabel?: string;
        dateFormat?: string;
        timeFormat?: string;
        timeStep?: number;
    };
    type: 'datetime';
}

interface GeopointValue {
    alt: number;
    lat: number;
    lng: number;
}

/** @link https://www.sanity.io/docs/geopoint-type#validation */
interface GeopointRule extends Rule<GeopointRule, GeopointValue> {}

/** @link https://www.sanity.io/docs/geopoint-type */
interface GeopointFieldDef extends FieldDef<GeopointRule, GeopointValue> {
    options?: {
        calendarTodayLabel?: string;
        dateFormat?: string;
        timeFormat?: string;
        timeStep?: number;
    };
    type: 'geopoint';
}

/** @link https://www.sanity.io/docs/number-type#validation */
interface NumberRule extends Rule<NumberRule, number>, MinMaxRule<NumberRule> {
    greaterThan: (limit: number) => NumberRule;
    integer: () => NumberRule;
    lessThan: (limit: number) => NumberRule;
    negative: () => NumberRule;
    positive: () => NumberRule;
    precision: (limit: number) => NumberRule;
}

/** @link https://www.sanity.io/docs/number-type */
interface NumberFieldDef extends FieldDef<NumberRule, number> {
    options?: ListOptions<number>;
    type: 'number';
}

interface ReferenceValue {
    _ref: string;
    _type: 'reference';
}

/** @link https://www.sanity.io/docs/reference-type#validation */
interface ReferenceRule extends Rule<ReferenceRule, ReferenceValue> {}

/** @link https://www.sanity.io/docs/reference-type */
interface ReferenceFieldDef<DocumentNames extends string> extends FieldDef<ReferenceRule, ReferenceValue> {
    options?: {
        disableNew?: boolean;
    } & ({ filter?: string; filterParams?: object } & {
        filter?: (context: { document: unknown; parent: unknown; parentPath: string }) => MaybePromise<{
            filter: string;
            params: unknown;
        }>;
    });
    to: Array<{ type: DocumentNames }>;
    type: 'reference';
    weak?: boolean;
}

/** @link https://www.sanity.io/docs/slug-type#validation */
interface SlugRule extends Rule<SlugRule, string> {}

/** @link https://www.sanity.io/docs/slug-typen */
interface SlugDef<FieldNames extends string> extends FieldDef<SlugRule, string> {
    options?: {
        isUnique?: (value: string, options: unknown) => MaybePromise<boolean>;
        maxLength?: number;
        slugify?: (value: string, type: unknown) => MaybePromise<string>;
        source?:
            | FieldNames
            | ((context: {
                  doc: unknown;
                  options: {
                      parent: unknown;
                      parentPath: string;
                  };
              }) => FieldNames);
    };
    type: 'slug';
}

/** @link https://www.sanity.io/docs/string-type#validation */
interface StringRule
    extends Rule<StringRule, string>,
        LengthRule<StringRule>,
        MinMaxRule<StringRule>,
        StringContentRule<StringRule> {}

/** @link https://www.sanity.io/docs/string-type */
interface StringFieldDef extends FieldDef<StringRule, string> {
    options?: ListOptions<string>;
    type: 'string';
}

/** @link https://www.sanity.io/docs/text-type#validation */
interface TextRule
    extends Rule<TextRule, string>,
        LengthRule<TextRule>,
        MinMaxRule<TextRule>,
        StringContentRule<TextRule> {}

/** @link https://www.sanity.io/docs/text-type */
interface TextFieldDef extends FieldDef<TextRule, string> {
    type: 'text';
}

/** @link https://www.sanity.io/docs/url-type#validation */
interface URLRule extends Rule<URLRule, string> {
    uri: (options: { allowRelative?: boolean; relativeOnly?: boolean; scheme?: string[] }) => URLRule;
}

/** @link https://www.sanity.io/docs/url-type */
interface URLFieldDef extends FieldDef<URLRule, string> {
    type: 'url';
}

type PrimitiveFieldDef =
    | BooleanFieldDef
    | DateFieldDef
    | DatetimeFieldDef
    | NumberFieldDef
    | StringFieldDef
    | TextFieldDef
    | URLFieldDef;

type NonPrimitiveFieldDef<DocumentNames extends string, ObjectNames extends string, FieldNames extends string> =
    /* eslint-disable no-use-before-define -- Circular dependency */
    | FileFieldDef<DocumentNames, ObjectNames, FieldNames>
    | ImageFieldDef<DocumentNames, ObjectNames, FieldNames>
    | ObjectFieldDef<DocumentNames, ObjectNames, FieldNames, string, string>
    | BlockFieldDef<DocumentNames, ObjectNames>
    /* eslint-enable no-use-before-define */
    | GeopointFieldDef
    | ReferenceFieldDef<DocumentNames>
    | SlugDef<FieldNames>;

type OfType<DocumentNames extends string, ObjectNames extends string> =
    | NonPrimitiveFieldDef<DocumentNames, ObjectNames, string>
    | {
          title?: string;
          type: ObjectNames;
      };

/** @link https://www.sanity.io/docs/array-type#validation */
interface ArrayRule extends Rule<ArrayRule, unknown[]>, LengthRule<ArrayRule>, MinMaxRule<ArrayRule> {
    unique: () => ArrayRule;
}

/** @link https://www.sanity.io/docs/array-type */
interface ArrayFieldDef<DocumentNames extends string, ObjectNames extends string>
    extends FieldDef<ArrayRule, unknown[]> {
    of: PrimitiveFieldDef[] | Array<OfType<DocumentNames, ObjectNames>>;
    options?: {
        editModal?: 'dialog' | 'fullscreen';
        layout?: 'grid' | 'tags';
        list?: Array<ListItem<string>>;
        sortable?: boolean;
    };
    type: 'array';
}

/** @link https://www.sanity.io/docs/customization */
interface BlockEditor {
    icon?: ComponentType<unknown>;
    render?: ComponentType<{ children: ReactNode }>;
}

/** @link https://www.sanity.io/docs/block-type#validation */
interface BlockRule extends Rule<BlockRule, unknown> {}

/** @link https://www.sanity.io/docs/block-type */
interface BlockFieldDef<DocumentNames extends string, ObjectNames extends string> extends FieldDef<BlockRule, unknown> {
    icon?: ComponentType<unknown>;
    lists?: Array<ListItem<string>>;
    marks?: {
        annotations?: Array<
            OfType<DocumentNames, ObjectNames> & {
                blockEditor?: BlockEditor;
            }
        >;
        decorators?: Array<
            ListItem<string> & {
                blockEditor?: BlockEditor;
            }
        >;
    };
    of?: Array<OfType<DocumentNames, ObjectNames>>;
    options?: { spellCheck?: boolean };
    styles?: Array<
        ListItem<string> & {
            blockEditor?: BlockEditor;
        }
    >;
    type: 'block';
}

/** @link https://www.sanity.io/docs/object-type#validation */
interface ObjectRule extends Rule<ObjectRule, unknown> {}

type FieldType<
    DocumentNames extends string,
    ObjectNames extends string,
    Name extends string,
    FieldNames extends string,
> = NamedDef<Name> &
    (
        | ArrayFieldDef<DocumentNames, ObjectNames>
        | NonPrimitiveFieldDef<DocumentNames, ObjectNames, FieldNames>
        | PrimitiveFieldDef
        | (FieldDef<ObjectRule, { [Field in FieldNames]?: unknown }> & {
              type: ObjectNames;
          })
    );

type FileValue<FieldNames extends string> = Record<Exclude<FieldNames, '_type' | 'asset'>, string> & {
    _type: 'file';
    asset: ReferenceValue;
};

/** @link https://www.sanity.io/docs/custom-asset-sources#1b9686eebed0 */
interface SanityAsset {
    assetDocumentProps?: {
        creditLine?: string;
        description?: string;
        label?: string;
        originalFilename?: string;
        source?: {
            id: string;
            name: string;
            url?: string;
        };
        title?: string;
    };
    kind: 'url' | 'base64' | 'file' | 'assetDocumentId';
    value: string;
}

/** @link https://www.sanity.io/docs/custom-asset-sources#587612d43b45 */
interface CustomAssetSource extends NamedDef<string> {
    component?: ComponentType<{
        document: unknown;
        onClose: () => void;
        onSelect: (asset: SanityAsset[]) => void;
        selectedAssets: SanityAsset[];
        selectionType: 'multiple' | 'single';
    }>;
    icon?: ComponentType<unknown>;
}

interface FileOptions {
    /** @link https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/file#unique_file_type_specifiers */
    accept?: string;
    /** @link https://www.sanity.io/docs/custom-asset-sources */
    sources?: CustomAssetSource[];
    storeOriginalFilename?: boolean;
}

/** @link https://www.sanity.io/docs/arfileray-type#validation */
interface FileRule<FieldNames extends string> extends Rule<FileRule<FieldNames>, FileValue<FieldNames>> {}

/** @link https://www.sanity.io/docs/file-type */
interface FileFieldDef<DocumentNames extends string, ObjectNames extends string, FieldNames extends string>
    extends FieldDef<FileRule<FieldNames>, FileValue<FieldNames>> {
    fields?: Array<FieldType<DocumentNames, ObjectNames, FieldNames, string>>;
    options?: FileOptions;
    type: 'file';
}

type ImageValue<FieldNames extends string> = Record<
    Exclude<FieldNames, '_type' | 'asset' | 'crop' | 'hotspot'>,
    unknown
> & {
    _type: 'image';
    asset: ReferenceValue;
    crop: {
        bottom: number;
        left: number;
        right: number;
        top: number;
    };
    hotspot: {
        height: number;
        width: number;
        x: number;
        y: number;
    };
};

/** @link https://www.sanity.io/docs/image-type#validation */
interface ImageRule<FieldNames extends string> extends Rule<ImageRule<FieldNames>, ImageValue<FieldNames>> {}

/** @link https://www.sanity.io/docs/image-type */
interface ImageFieldDef<DocumentNames extends string, ObjectNames extends string, FieldNames extends string>
    extends FieldDef<ImageRule<FieldNames>, unknown> {
    fields?: Array<
        FieldType<DocumentNames, ObjectNames, FieldNames, string> & {
            isHighlighted?: boolean;
        }
    >;
    options?: FileOptions & {
        hotspot?: boolean;
        /** @link https://www.sanity.io/docs/image-metadata */
        metadata?: string[];
    };
    type: 'image';
}

interface Ordering<FieldNames extends string> extends NamedDef<string> {
    by: Array<{
        direction: 'asc' | 'desc';
        field: FieldNames;
    }>;
}

interface ObjectLikeDef<
    DocumentNames extends string,
    ObjectNames extends string,
    FieldNames extends string,
    FieldSetNames extends string,
    SelectionNames extends string,
    GroupNames extends string,
> {
    fields: Array<
        FieldType<DocumentNames, ObjectNames, FieldNames, string> & {
            /** @link https://www.sanity.io/docs/object-type#AbjN0ykp */
            fieldset?: FieldSetNames;
            /** @link https://www.sanity.io/docs/field-groups */
            group?: MaybeArray<GroupNames>;
        }
    >;
    /** @link https://www.sanity.io/docs/object-type#AbjN0ykp */
    fieldsets?: WithConditionalFields<unknown> &
        Array<{
            name: FieldSetNames;
            options?: {
                collapsed?: boolean;
                collapsible?: boolean;
                columns?: number;
            };
            title: string;
        }>;
    /** @link https://www.sanity.io/docs/previews-list-views */
    preview?:
        | {
              select: {
                  media?: FieldNames | ReactElement;
                  subtitle?: FieldNames;
                  title?: FieldNames;
              };
          }
        | {
              component?: ComponentType<{ [Field in FieldNames]: unknown }>;
              prepare: (
                  selection: {
                      [name in SelectionNames]: unknown;
                  },
                  viewOptions?: {
                      ordering?: Ordering<FieldNames>;
                  },
              ) => {
                  media?: FieldNames | ReactElement;
                  subtitle?: FieldNames;
                  title?: FieldNames;
              };
              select: {
                  [name in SelectionNames]: FieldNames;
              };
          };
}

/** @link https://www.sanity.io/docs/object-type */
interface ObjectFieldDef<
    DocumentNames extends string,
    ObjectNames extends string,
    FieldNames extends string,
    FieldSetNames extends string,
    SelectionNames extends string,
> extends FieldDef<ObjectRule, { [Field in FieldNames]?: unknown }>,
        ObjectLikeDef<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, never> {
    type: 'object';
}

type ObjectDefInternal<
    // DocumentNames & ObjectNames reversed!!! Mostly for convenience when defining types
    ObjectNames extends string,
    DocumentNames extends string,
    FieldNames extends string,
    FieldSetNames extends string,
    SelectionNames extends string,
> = NamedDef<ObjectNames> & ObjectFieldDef<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames>;

/** @link https://www.sanity.io/docs/document-type */
interface DocumentDefInternal<
    DocumentNames extends string,
    ObjectNames extends string,
    FieldNames extends string,
    FieldSetNames extends string,
    SelectionNames extends string,
    GroupNames extends string,
> extends NamedDef<DocumentNames>,
        WithInitialValue<{ [Field in FieldNames]?: unknown }>,
        ObjectLikeDef<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames> {
    /** @link https://www.sanity.io/docs/ui-affordances-for-actions */
    __experimental_actions?: Array<'create' | 'update' | 'delete' | 'publish'>;
    /** @link https://www.sanity.io/docs/studio-search-config */
    __experimental_search?: Array<{
        path: FieldNames;
        weight: number;
    }>;
    /** @link https://www.sanity.io/docs/field-groups */
    groups?: Array<
        NamedDef<string> & {
            default?: boolean;
            hidden?: ConditionalField<unknown>;
            icon?: ComponentType<unknown>;
        }
    >;
    /** @link https://www.sanity.io/docs/icons-for-data-types */
    icon?: ComponentType<unknown>;
    liveEdit?: boolean;
    /** @link https://www.sanity.io/docs/sort-orders */
    orderings?: Array<Ordering<FieldNames>>;
    type: 'document';
}

type SchemaTypeInternal<
    DocumentNames extends string,
    ObjectNames extends string,
    FieldNames extends string,
    FieldSetNames extends string,
    SelectionNames extends string,
    GroupNames extends string,
> =
    | DocumentDefInternal<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>
    | ObjectDefInternal<ObjectNames, DocumentNames, FieldNames, FieldSetNames, SelectionNames>;

declare module '@sanity/base' {
    type ObjectDef<
        ObjectNames extends string = never,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = ObjectDefInternal<ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;

    type DocumentDef<
        DocumentNames extends string,
        ObjectNames extends string = never,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = DocumentDefInternal<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;

    type SchemaType<
        DocumentNames extends string = any,
        ObjectNames extends string = any,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = SchemaTypeInternal<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;
}

declare module 'part:@sanity/base/schema-creator' {
    type ObjectDef<
        ObjectNames extends string = never,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = ObjectDefInternal<ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;

    type DocumentDef<
        DocumentNames extends string,
        ObjectNames extends string = never,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = DocumentDefInternal<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;

    type SchemaType<
        DocumentNames extends string = any,
        ObjectNames extends string = any,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = SchemaTypeInternal<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;

    const createSchema: <DocumentNames extends string, ObjectNames extends string>(schemaDef: {
        name: string;
        types: Array<SchemaType<DocumentNames, ObjectNames>>;
    }) => Schema;

    export default createSchema;
}

declare module 'all:part:@sanity/base/schema-type' {
    type SchemaType<
        DocumentNames extends string = any,
        ObjectNames extends string = any,
        FieldNames extends string = string,
        FieldSetNames extends string = string,
        SelectionNames extends string = string,
        GroupNames extends string = string,
    > = SchemaTypeInternal<DocumentNames, ObjectNames, FieldNames, FieldSetNames, SelectionNames, GroupNames>;

    const schemaTypes: SchemaType[];

    export default schemaTypes;
}
