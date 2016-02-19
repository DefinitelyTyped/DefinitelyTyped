// Type definitions for express-openapi 0.6.x
// Project: https://github.com/kogosoftwarellc/express-openapi
// Definitions by: TANAKA Koichi <https://github.com/mugeso/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/* =================== USAGE ===================
 import express = require('express');
 import bodyParser = require('body-parser');
 import openapi = require('express-openapi');
 import cors = require('cors');

 var app = express();
 app.use(cors());
 app.use(bodyParser.json());

 var api: openapi.InitializedApi;
 api = openapi.initialize({
 apiDoc: require('./api-doc.js'),
 app: app,
 routes: './api-routes'
 });

 app.use(function(err, req, res, next) {
 res.status(err.status).json(err);
 });

 app.listen(3000);
 =============================================== */

/// <reference path="../express/express.d.ts" />

declare module "express-openapi" {
    import express = require('express');

    export function initialize(args:Args):InitializedApi;

    export interface InitializedApi {
        apiDoc: OpenApi.ApiDefinition;
    }

    export module OpenApi {
        export interface ApiDefinition {
            swagger: string
            info: InfoObject
            host?: string
            basePath?: string
            schemes?: string[]
            consumes?: MimeTypes
            produces?: MimeTypes
            paths: PathsObject
            definitions?: DefinitionsObject
            parameters?: ParametersDefinitionsObject
            responses?: ResponsesDefinitionsObject
            securityDefinitions?: SecurityDefinitionsObject
            security?: SecurityRequirementObject[]
            tags?: TagObject[]
            externalDocs?: ExternalDocumentationObject
        }

        type MimeTypes = string[]

        export interface InfoObject {
            title: string
            description?: string
            termsOfService?: string
            contact?: ContactObject
            license?: LicenseObject
            version: string
        }

        export interface ContactObject {
            name?: string
            url?: string
            email?: string
        }

        export interface LicenseObject {
            name: string
            url?: string
        }

        export interface PathsObject {
            [index: string]: PathItemObject|any
        }

        export interface PathItemObject {
            $ref?: string
            get?: OperationObject
            put?: OperationObject
            post?: OperationObject
            'delete'?: OperationObject
            options?: OperationObject
            head?: OperationObject
            patch?: OperationObject
            parameters?: Parameters
        }

        export interface OperationObject {
            tags?: string[]
            summary?: string
            description?: string
            externalDocs?: ExternalDocumentationObject
            operationId?: string
            consumes?: MimeTypes
            produces?: MimeTypes
            parameters?: Parameters
            responses: ResponsesObject
            schemes?: string[]
            deprecated?: boolean
            security?: SecurityRequirementObject[],
            [index: string]: any
        }

        export interface DefinitionsObject {
            [index: string]: SchemaObject
        }

        export interface ResponsesObject {
            [index: string]: Response|any
            'default': Response
        }

        type Response = ResponseObject|ReferenceObject

        export interface ResponsesDefinitionsObject {
            [index: string]: ResponseObject
        }

        export interface ResponseObject {
            description: string
            schema?: Schema
            headers?: HeadersObject
            examples?: ExampleObject
        }

        export interface HeadersObject {
            [index: string]: HeaderObject
        }

        export interface HeaderObject extends ItemsObject {
        }

        export interface ExampleObject {
            [index: string]: any
        }

        export interface SecurityDefinitionsObject {
            [index: string]: SecuritySchemeObject
        }

        export interface SecuritySchemeObject {
            type: string
            description?: string
            name: string
            'in': string
            flow: string
            authorizationUrl: string
            tokenUrl: string
            scopes: ScopesObject
        }

        export interface ScopesObject {
            [index: string]: any
        }

        export interface SecurityRequirementObject {
            [index: string]: string[]
        }

        export interface TagObject {
            name: string
            description?: string
            externalDocs?: ExternalDocumentationObject
        }

        export interface ItemsObject {
            type: string
            format?: string
            items?: ItemsObject
            collectionFormat?: string
            'default'?: any
            maximum?: number
            exclusiveMaximum?: boolean
            minimum?: number
            exclusiveMinimum?: boolean
            maxLength?: number
            minLength?: number
            pattern?: string
            maxItems?: number
            minItems?: number
            uniqueItems?: boolean
            'enum'?: any[]
            multipleOf?: number
        }

        export interface ParametersDefinitionsObject {
            [index: string]: ParameterObject
        }

        type Parameters = (ReferenceObject|Parameter)[]

        type Parameter = (InBodyParameterObject|GeneralParameterObject);

        interface ParameterObject {
            name: string
            'in': string
            description?: string
            required?: boolean
        }

        export interface InBodyParameterObject extends ParameterObject {
            schema: Schema
        }

        export interface GeneralParameterObject extends ParameterObject, ItemsObject {
            allowEmptyValue?: boolean
        }

        export interface ReferenceObject {
            $ref: string
        }

        export interface ExternalDocumentationObject {
            [index: string]: any
            description?: string
            url: string
        }

        type Schema = SchemaObject | ReferenceObject

        export interface SchemaObject extends IJsonSchema {
            [index: string]: any
            discriminator?: string
            readOnly?: boolean
            xml?: XMLObject
            externalDocs: ExternalDocumentationObject
            example: any
        }

        export interface XMLObject {
            [index: string]: any
            name?: string
            namespace?: string
            prefix?: string
            attribute?: boolean
            wrapped?: boolean
        }
    }

    export interface Args {
        apiDoc: OpenApi.ApiDefinition,
        app: express.Application,
        routes: string
    }

    export interface OperationFunction extends express.RequestHandler {
        apiDoc?: OpenApi.OperationObject;
    }

    export interface OperationHandlerArray {
        apiDoc?: OpenApi.OperationObject;
        [index: number]: express.RequestHandler;
    }

    export type Operation = OperationFunction | OperationHandlerArray;

    export interface PathModule {
        parameters?: OpenApi.Parameters;
        get?: Operation;
        put?: Operation;
        post?: Operation;
        delete?: Operation;
        patch?: Operation;
        options?: Operation;
        head?: Operation;
    }

    interface IJsonSchema {
        id?: string
        $schema?: string
        title?: string
        description?: string
        multipleOf?: number
        maximum?: number
        exclusiveMaximum?: boolean
        minimum?: number
        exclusiveMinimum?: boolean
        maxLength?: number
        minLength?: number
        pattern?: string
        additionalItems?: boolean | IJsonSchema
        items?: IJsonSchema | IJsonSchema[]
        maxItems?: number
        minItems?: number
        uniqueItems?: boolean
        maxProperties?: number
        minProperties?: number
        required?: string[]
        additionalProperties?: boolean | IJsonSchema
        definitions?: {
            [name: string]: IJsonSchema
        }
        properties?: {
            [name: string]: IJsonSchema
        }
        patternProperties?: {
            [name: string]: IJsonSchema
        }
        dependencies?: {
            [name: string]: IJsonSchema | string[]
        }
        'enum'?: any[]
        type?: string | string[]
        allOf?: IJsonSchema[]
        anyOf?: IJsonSchema[]
        oneOf?: IJsonSchema[]
        not?: IJsonSchema
    }
}
