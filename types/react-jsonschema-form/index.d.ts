// Type definitions for react-jsonschema-form 1.7.0
// Project: https://github.com/mozilla-services/react-jsonschema-form
// Definitions by: Dan Fox <https://github.com/iamdanfox>
//                 Ivan Jiang <https://github.com/iplus26>
//                 Philippe Bourdages <https://github.com/phbou72>
//                 Lucian Buzzo <https://github.com/LucianBuzzo>
//                 Sylvain Thénault <https://github.com/sthenault>
//                 Sebastian Busch <https://github.com/sbusch>
//                 Mehdi Lahlou <https://github.com/medfreeman>
//                 Saad Tazi <https://github.com/saadtazi>
//                 Agustin N. R. Ramirez <https://github.com/agustin107>
//                 Chancellor Clark <https://github.com/chanceaclark>
//                 Benoît Sepe <https://github.com/ogdentrod>
//                 Andre Nguyen <https://github.com/andrenguyener>
//                 Qingqi Shi <https://github.com/qingqishi>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 3.5

declare module 'react-jsonschema-form' {
    import * as React from 'react';
    import { JSONSchema6, JSONSchema6Type } from 'json-schema';

    type ErrorSchema = {
        [k: string]: ErrorSchema;
    };

    export interface FormProps<T> {
        schema: JSONSchema6;
        disabled?: boolean;
        uiSchema?: UiSchema;
        formData?: T;
        formContext?: any;
        widgets?: { [name: string]: Widget };
        fields?: { [name: string]: Field };
        noValidate?: boolean;
        noHtml5Validate?: boolean;
        showErrorList?: boolean;
        ErrorList?: React.StatelessComponent<ErrorListProps>;
        validate?: (formData: T, errors: FormValidation) => FormValidation;
        onBlur?: (id: string, value: boolean | number | string | null) => void;
        onChange?: (e: IChangeEvent<T>, es?: ErrorSchema) => any;
        onError?: (e: any) => any;
        onSubmit?: (e: ISubmitEvent<T>) => any;
        liveValidate?: boolean;
        FieldTemplate?: React.StatelessComponent<FieldTemplateProps>;
        ArrayFieldTemplate?: React.StatelessComponent<ArrayFieldTemplateProps>;
        ObjectFieldTemplate?: React.StatelessComponent<ObjectFieldTemplateProps>;
        safeRenderCompletion?: boolean;
        transformErrors?: (errors: AjvError[]) => AjvError[];
        idPrefix?: string;
        additionalMetaSchemas?: ReadonlyArray<object>;
        customFormats?: { [k: string]: string | RegExp | ((data: string) => boolean) };
        // HTML Attributes
        id?: string;
        className?: string;
        name?: string;
        method?: string;
        target?: string;
        action?: string;
        autocomplete?: string;
        enctype?: string;
        acceptcharset?: string;
        omitExtraData?: boolean;
        liveOmit?: boolean;
        tagName?: keyof JSX.IntrinsicElements | React.ComponentType;
    }

    export default class Form<T> extends React.Component<FormProps<T>> {
        validate: (
            formData: T,
            schema?: FormProps<T>['schema'],
            additionalMetaSchemas?: FormProps<T>['additionalMetaSchemas'],
            customFormats?: FormProps<T>['customFormats'],
        ) => { errors: AjvError[]; errorSchema: ErrorSchema };
        onChange: (formData: T, newErrorSchema: ErrorSchema) => void;
        onBlur: (id: string, value: boolean | number | string | null) => void;
        submit: () => void;
    }

    export type UiSchema = {
        'ui:field'?: Field | string;
        'ui:widget'?: Widget | string;
        'ui:options'?: { [key: string]: boolean | number | string | object | any[] | null };
        'ui:order'?: string[];
        'ui:FieldTemplate'?: React.StatelessComponent<FieldTemplateProps>;
        'ui:ArrayFieldTemplate'?: React.StatelessComponent<ArrayFieldTemplateProps>;
        'ui:ObjectFieldTemplate'?: React.StatelessComponent<ObjectFieldTemplateProps>;
        [name: string]: any;
    };

    export type FieldId = {
        $id: string;
    };

    export type IdSchema<T = any> = {
        [key in keyof T]: IdSchema<T[key]>;
    } &
        FieldId;

    export type FieldPath = {
        $name: string;
    };

    export type PathSchema<T = any> = {
        [key in keyof T]: PathSchema<T[key]>;
    } &
        FieldPath;

    export interface WidgetProps
        extends Pick<
            React.HTMLAttributes<HTMLElement>,
            Exclude<keyof React.HTMLAttributes<HTMLElement>, 'onBlur' | 'onFocus'>
        > {
        id: string;
        schema: JSONSchema6;
        value: any;
        required: boolean;
        disabled: boolean;
        readonly: boolean;
        autofocus: boolean;
        onChange: (value: any) => void;
        options: { [key: string]: boolean | number | string | object | null };
        formContext: any;
        onBlur: (id: string, value: boolean | number | string | null) => void;
        onFocus: (id: string, value: boolean | number | string | null) => void;
        label: string;
    }

    export type Widget = React.StatelessComponent<WidgetProps> | React.ComponentClass<WidgetProps>;

    export interface FieldProps<T = any>
        extends Pick<React.HTMLAttributes<HTMLElement>, Exclude<keyof React.HTMLAttributes<HTMLElement>, 'onBlur'>> {
        schema: JSONSchema6;
        uiSchema: UiSchema;
        idSchema: IdSchema;
        formData: T;
        errorSchema: ErrorSchema;
        onChange: (e: IChangeEvent<T> | any, es?: ErrorSchema) => any;
        onBlur: (id: string, value: boolean | number | string | null) => void;
        registry: {
            fields: { [name: string]: Field };
            widgets: { [name: string]: Widget };
            definitions: { [name: string]: any };
            formContext: any;
        };
        formContext: any;
        autofocus: boolean;
        disabled: boolean;
        readonly: boolean;
        required: boolean;
        name: string;
        [prop: string]: any;
    }

    export type Field = React.StatelessComponent<FieldProps> | React.ComponentClass<FieldProps>;

    export type FieldTemplateProps = {
        id: string;
        classNames: string;
        label: string;
        description: React.ReactElement;
        rawDescription: string;
        children: React.ReactElement;
        errors: React.ReactElement;
        rawErrors: string[];
        help: React.ReactElement;
        rawHelp: string;
        hidden: boolean;
        required: boolean;
        readonly: boolean;
        disabled: boolean;
        displayLabel: boolean;
        fields: Field[];
        schema: JSONSchema6;
        uiSchema: UiSchema;
        formContext: any;
    };

    export type ArrayFieldTemplateProps<T = any> = {
        DescriptionField: React.StatelessComponent<{ id: string; description: string | React.ReactElement }>;
        TitleField: React.StatelessComponent<{ id: string; title: string; required: boolean }>;
        canAdd: boolean;
        className: string;
        disabled: boolean;
        idSchema: IdSchema;
        items: {
            children: React.ReactElement;
            className: string;
            disabled: boolean;
            hasMoveDown: boolean;
            hasMoveUp: boolean;
            hasRemove: boolean;
            hasToolbar: boolean;
            index: number;
            onDropIndexClick: (index: number) => (event: any) => void;
            onReorderClick: (index: number, newIndex: number) => (event: any) => void;
            readonly: boolean;
            key: string;
        }[];
        onAddClick: (event: any) => (event: any) => void;
        readonly: boolean;
        required: boolean;
        schema: JSONSchema6;
        uiSchema: UiSchema;
        title: string;
        formContext: any;
        formData: T;
        registry: FieldProps['registry'];
    };

    export type ObjectFieldTemplateProps<T = any> = {
        DescriptionField: React.StatelessComponent<{ id: string; description: string | React.ReactElement }>;
        TitleField: React.StatelessComponent<{ id: string; title: string; required: boolean }>;
        title: string;
        description: string;
        properties: {
            content: React.ReactElement;
            name: string;
            disabled: boolean;
            readonly: boolean;
        }[];
        required: boolean;
        schema: JSONSchema6;
        uiSchema: UiSchema;
        idSchema: IdSchema;
        formData: T;
        formContext: any;
    };

    export type AjvError = {
        message: string;
        name: string;
        params: any;
        property: string;
        stack: string;
    };

    export type ErrorListProps = {
        errorSchema: FormValidation;
        errors: AjvError[];
        formContext: any;
        schema: JSONSchema6;
        uiSchema: UiSchema;
    };

    export interface IChangeEvent<T = any> {
        edit: boolean;
        formData: T;
        errors: AjvError[];
        errorSchema: FormValidation;
        idSchema: IdSchema;
        schema: JSONSchema6;
        uiSchema: UiSchema;
        status?: string;
    }

    export type ISubmitEvent<T> = IChangeEvent<T>;

    export type FieldError = string;

    type FieldValidation = {
        __errors: FieldError[];
        addError: (message: string) => void;
    };

    type FormValidation = FieldValidation & {
        [fieldName: string]: FieldValidation;
    };

    type FormSubmit<T = any> = {
        formData: T;
    };

    export type ThemeProps<T = any> = Omit<FormProps<T>, 'schema'>;

    export function withTheme<T = any>(
        themeProps: ThemeProps<T>,
    ): React.ComponentClass<FormProps<T>> | React.StatelessComponent<FormProps<T>>;

    export type AddButtonProps = {
        className: string;
        onClick: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
        disabled: boolean;
    };
}

declare module 'react-jsonschema-form/lib/components/fields/SchemaField' {
    import { JSONSchema6 } from 'json-schema';
    import { FieldProps, UiSchema, IdSchema, FormValidation } from 'react-jsonschema-form';

    export type SchemaFieldProps<T = any> = Pick<
        FieldProps<T>,
        'schema' | 'uiSchema' | 'idSchema' | 'formData' | 'errorSchema' | 'registry' | 'formContext'
    >;

    export default class SchemaField extends React.Component<SchemaFieldProps> {}
}

declare module 'react-jsonschema-form/lib/utils' {
    import { JSONSchema6, JSONSchema6Definition, JSONSchema6Type, JSONSchema6TypeName } from 'json-schema';
    import { FieldProps, UiSchema, IdSchema, PathSchema, Widget } from 'react-jsonschema-form';

    export const ADDITIONAL_PROPERTY_FLAG: string;

    export function getDefaultRegistry(): FieldProps['registry'];

    export function getSchemaType(schema: JSONSchema6): string;

    export function getWidget(
        schema: JSONSchema6,
        widget: Widget,
        registeredWidgets?: { [name: string]: Widget },
    ): Widget | Error;

    export function hasWidget(
        schema: JSONSchema6,
        widget: Widget,
        registeredWidgets?: { [name: string]: Widget },
    ): boolean;

    export function computeDefaults<T = any>(
        schema: JSONSchema6,
        parentDefaults: JSONSchema6['default'][],
        definitions: FieldProps['registry']['definitions'],
        rawFormData?: T,
        includeUndefinedValues?: boolean,
    ): JSONSchema6['default'][];

    export function getDefaultFormState<T = any>(
        schema: JSONSchema6,
        formData: T,
        definitions?: FieldProps['registry']['definitions'],
        includeUndefinedValues?: boolean,
    ): T | JSONSchema6['default'][];

    export function getUiOptions(uiSchema: UiSchema): UiSchema['ui:options'];

    export function isObject(thing: any): boolean;

    export function mergeObjects(obj1: object, obj2: object, concatArrays?: boolean): object;

    export function asNumber(value: string | null): number | string | undefined | null;

    export function orderProperties(properties: [], order: []): [];

    export function isConstant(schema: JSONSchema6): boolean;

    export function toConstant(schema: JSONSchema6): JSONSchema6Type | JSONSchema6['const'] | Error;

    export function isSelect(_schema: JSONSchema6, definitions?: FieldProps['registry']['definitions']): boolean;

    export function isMultiSelect(schema: JSONSchema6, definitions?: FieldProps['registry']['definitions']): boolean;

    export function isFilesArray(
        schema: JSONSchema6,
        uiSchema: UiSchema,
        definitions?: FieldProps['registry']['definitions'],
    ): boolean;

    export function isFixedItems(schema: JSONSchema6): boolean;

    export function allowAdditionalItems(schema: JSONSchema6): boolean;

    export function optionsList(schema: JSONSchema6): { label: string; value: string }[];

    export function guessType(value: any): JSONSchema6TypeName;

    export function stubExistingAdditionalProperties<T = any>(
        schema: JSONSchema6,
        definitions?: FieldProps['registry']['definitions'],
        formData?: T,
    ): JSONSchema6;

    export function resolveSchema<T = any>(
        schema: JSONSchema6Definition,
        definitions?: FieldProps['registry']['definitions'],
        formData?: T,
    ): JSONSchema6;

    export function retrieveSchema<T = any>(
        schema: JSONSchema6Definition,
        definitions?: FieldProps['registry']['definitions'],
        formData?: T,
    ): JSONSchema6;

    export function deepEquals<T>(a: T, b: T): boolean;

    export function shouldRender(comp: React.Component, nextProps: any, nextState: any): boolean;

    export function toIdSchema<T = any>(
        schema: JSONSchema6Definition,
        id: string,
        definitions: FieldProps['registry']['definitions'],
        formData?: T,
        idPredix?: string,
    ): IdSchema | IdSchema[];

    export function toPathSchema<T = any>(
        schema: JSONSchema6Definition,
        name: string | undefined,
        definitions: FieldProps['registry']['definitions'],
        formData?: T,
    ): PathSchema | PathSchema[];

    export interface DateObject {
        year: number;
        month: number;
        day: number;
        hour: number;
        minute: number;
        second: number;
    }

    export function parseDateString(dateString: string, includeTime?: boolean): DateObject;

    export function toDateString(dateObject: DateObject, time?: boolean): string;

    export function pad(num: number, size: number): string;

    export function setState(instance: React.Component, state: any, callback: Function): void;

    export function dataURItoBlob(dataURI: string): { name: string; blob: Blob };

    export interface IRangeSpec {
        min?: number;
        max?: number;
        step?: number;
    }

    export function rangeSpec(schema: JSONSchema6): IRangeSpec;

    export function getMatchingOption(
        formData: any,
        options: JSONSchema6[],
        definitions: FieldProps['registry']['definitions'],
    ): number;
}

declare module 'react-jsonschema-form/lib/validate' {
    import { JSONSchema6Definition } from 'json-schema';
    import { AjvError, ErrorSchema, FormProps } from 'react-jsonschema-form';

    export default function validateFormData<T = any>(
        formData: T,
        schema: JSONSchema6Definition,
        customValidate?: FormProps<T>['validate'],
        transformErrors?: FormProps<T>['transformErrors'],
        additionalMetaSchemas?: FormProps<T>['additionalMetaSchemas'],
        customFormats?: FormProps<T>['customFormats'],
    ): { errors: AjvError[]; errorSchema: ErrorSchema };
}
