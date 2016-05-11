// Type definitions for Swagger (aka as the Open API Specification) 2.0
// Project: https://github.com/OAI/OpenAPI-Specification
// Definitions by: Alexandre Roba <https://github.com/alexandreroba/>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/* =================== USAGE ===================


 import {SwaggerObject} from 'swagger-object';
 
 let myApiDefinition: SwaggerObject = {
    "swagger": "2.0",
    "info": {
        "version": "1.0.0",
        "title": "Swagger Petstore",
    },
    "paths": {
        "/text": {
        "get": {
            "produces": [
            "text/plain"
            ],
            "responses": {
            "200": {
                "schema": {
                "type": "string"
                }
            }
            }
        }
        }
    }
 };

 =============================================== */

declare module "swagger-object" {
    export interface SwaggerObject {
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
        [index: string]: PathItemObject | any
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
        security?: SecurityRequirementObject[]
    }

    export interface DefinitionsObject {
        [index: string]: SchemaObject
    }

    export interface ResponsesObject {
        [index: string]: Response | any
        'default': Response
    }

    type Response = ResponseObject | ReferenceObject

    export interface ResponsesDefinitionsObject {
        [index: string]: ResponseObject
    }

    export interface ResponseObject {
        description: string
        schema?: SchemaObject
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
        exclusiveMaximum: boolean
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

    type Parameters = (ParameterObject | ReferenceObject)[]

    export interface ParameterObject {
        name: string
        'in': string
        description?: string
        required?: boolean
    }

    export interface InBodyParameterObject extends ParameterObject {
        schema: SchemaObject
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

    export interface SchemaObject extends IJsonSchema {
        [index: string]: any
        discriminator?: string
        readOnly?: boolean
        xml?: XMLObject
        externalDocs?: ExternalDocumentationObject
        example?: any
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
        $ref?:string
        format?:string
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