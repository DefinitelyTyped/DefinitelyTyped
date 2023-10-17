/* =================== USAGE ===================
 import express = require('express');
 import swaggerize = require('swaggerize-express');
 var app = express();
 app.use(swaggerize({
    api: require('./api.json'),
    docspath: '/api-docs',
    handlers: './handlers'
 });
 =============================================== */

import express = require("express");
declare function swaggerize(options: swaggerize.Options): express.RequestHandler;

declare namespace swaggerize {
    export namespace Swagger {
        export interface ApiDefinition {
            swagger: string;
            info: InfoObject;
            host?: string | undefined;
            basePath?: string | undefined;
            schemes?: string[] | undefined;
            consumes?: MimeTypes | undefined;
            produces?: MimeTypes | undefined;
            paths: PathsObject;
            definitions?: DefinitionsObject | undefined;
            parameters?: ParametersDefinitionsObject | undefined;
            responses?: ResponsesDefinitionsObject | undefined;
            securityDefinitions?: SecurityDefinitionsObject | undefined;
            security?: SecurityRequirementObject[] | undefined;
            tags?: TagObject[] | undefined;
            externalDocs?: ExternalDocumentationObject | undefined;
        }

        type MimeTypes = string[];

        export interface InfoObject {
            title: string;
            description?: string | undefined;
            termsOfService?: string | undefined;
            contact?: ContactObject | undefined;
            license?: LicenseObject | undefined;
            version: string;
        }

        export interface ContactObject {
            name?: string | undefined;
            url?: string | undefined;
            email?: string | undefined;
        }

        export interface LicenseObject {
            name: string;
            url?: string | undefined;
        }

        export interface PathsObject {
            [index: string]: PathItemObject | any;
        }

        export interface PathItemObject {
            $ref?: string | undefined;
            get?: OperationObject | undefined;
            put?: OperationObject | undefined;
            post?: OperationObject | undefined;
            "delete"?: OperationObject | undefined;
            options?: OperationObject | undefined;
            head?: OperationObject | undefined;
            patch?: OperationObject | undefined;
            parameters?: Parameters | undefined;
        }

        export interface OperationObject {
            tags?: string[] | undefined;
            summary?: string | undefined;
            description?: string | undefined;
            externalDocs?: ExternalDocumentationObject | undefined;
            operationId?: string | undefined;
            consumes?: MimeTypes | undefined;
            produces?: MimeTypes | undefined;
            parameters?: Parameters | undefined;
            responses: ResponsesObject;
            schemes?: string[] | undefined;
            deprecated?: boolean | undefined;
            security?: SecurityRequirementObject[] | undefined;
        }

        export interface DefinitionsObject {
            [index: string]: SchemaObject;
        }

        export interface ResponsesObject {
            [index: string]: Response | any;
            "default": Response;
        }

        type Response = ResponseObject | ReferenceObject;

        export interface ResponsesDefinitionsObject {
            [index: string]: ResponseObject;
        }

        export interface ResponseObject {
            description: string;
            schema?: SchemaObject | undefined;
            headers?: HeadersObject | undefined;
            examples?: ExampleObject | undefined;
        }

        export interface HeadersObject {
            [index: string]: HeaderObject;
        }

        export interface HeaderObject extends ItemsObject {
        }

        export interface ExampleObject {
            [index: string]: any;
        }

        export interface SecurityDefinitionsObject {
            [index: string]: SecuritySchemeObject;
        }

        export interface SecuritySchemeObject {
            type: string;
            description?: string | undefined;
            name: string;
            "in": string;
            flow: string;
            authorizationUrl: string;
            tokenUrl: string;
            scopes: ScopesObject;
        }

        export interface ScopesObject {
            [index: string]: any;
        }

        export interface SecurityRequirementObject {
            [index: string]: string[];
        }

        export interface TagObject {
            name: string;
            description?: string | undefined;
            externalDocs?: ExternalDocumentationObject | undefined;
        }

        export interface ItemsObject {
            type: string;
            format?: string | undefined;
            items?: ItemsObject | undefined;
            collectionFormat?: string | undefined;
            "default"?: any;
            maximum?: number | undefined;
            exclusiveMaximum: boolean;
            minimum?: number | undefined;
            exclusiveMinimum?: boolean | undefined;
            maxLength?: number | undefined;
            minLength?: number | undefined;
            pattern?: string | undefined;
            maxItems?: number | undefined;
            minItems?: number | undefined;
            uniqueItems?: boolean | undefined;
            "enum"?: any[] | undefined;
            multipleOf?: number | undefined;
        }

        export interface ParametersDefinitionsObject {
            [index: string]: ParameterObject;
        }

        type Parameters = (ParameterObject | ReferenceObject)[];

        export interface ParameterObject {
            name: string;
            "in": string;
            description?: string | undefined;
            required?: boolean | undefined;
        }

        export interface InBodyParameterObject extends ParameterObject {
            schema: SchemaObject;
        }

        export interface GeneralParameterObject extends ParameterObject, ItemsObject {
            allowEmptyValue?: boolean | undefined;
        }

        export interface ReferenceObject {
            $ref: string;
        }

        export interface ExternalDocumentationObject {
            [index: string]: any;
            description?: string | undefined;
            url: string;
        }

        export interface SchemaObject extends IJsonSchema {
            [index: string]: any;
            discriminator?: string | undefined;
            readOnly?: boolean | undefined;
            xml?: XMLObject | undefined;
            externalDocs: ExternalDocumentationObject;
            example: any;
        }

        export interface XMLObject {
            [index: string]: any;
            name?: string | undefined;
            namespace?: string | undefined;
            prefix?: string | undefined;
            attribute?: boolean | undefined;
            wrapped?: boolean | undefined;
        }
    }

    export interface RouteSegment {
        [urlSegment: string]: RouteSegment | express.RequestHandler | express.RequestHandler[];
    }

    export interface Options {
        api: Swagger.ApiDefinition;
        docspath: string;
        handlers: string | RouteSegment;
    }

    export interface IConfig {
        api: Swagger.ApiDefinition;
        routes: express.IRoute[];
    }

    export interface SwaggerizedExpress extends express.Express {
        swagger: IConfig;
    }
}

interface IJsonSchema {
    id?: string | undefined;
    $schema?: string | undefined;
    title?: string | undefined;
    description?: string | undefined;
    multipleOf?: number | undefined;
    maximum?: number | undefined;
    exclusiveMaximum?: boolean | undefined;
    minimum?: number | undefined;
    exclusiveMinimum?: boolean | undefined;
    maxLength?: number | undefined;
    minLength?: number | undefined;
    pattern?: string | undefined;
    additionalItems?: boolean | IJsonSchema | undefined;
    items?: IJsonSchema | IJsonSchema[] | undefined;
    maxItems?: number | undefined;
    minItems?: number | undefined;
    uniqueItems?: boolean | undefined;
    maxProperties?: number | undefined;
    minProperties?: number | undefined;
    required?: string[] | undefined;
    additionalProperties?: boolean | IJsonSchema | undefined;
    definitions?: {
        [name: string]: IJsonSchema;
    } | undefined;
    properties?: {
        [name: string]: IJsonSchema;
    } | undefined;
    patternProperties?: {
        [name: string]: IJsonSchema;
    } | undefined;
    dependencies?: {
        [name: string]: IJsonSchema | string[];
    } | undefined;
    "enum"?: any[] | undefined;
    type?: string | string[] | undefined;
    allOf?: IJsonSchema[] | undefined;
    anyOf?: IJsonSchema[] | undefined;
    oneOf?: IJsonSchema[] | undefined;
    not?: IJsonSchema | undefined;
}

export = swaggerize;
