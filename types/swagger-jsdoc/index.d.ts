// Type definitions for swagger-jsdoc 6.0
// Project: https://github.com/surnet/swagger-jsdoc
// Definitions by: Daniel Grove <https://github.com/drGrove>
//                 Neil Bryson Cargamento <https://github.com/neilbryson>
//                 Preyansh Mitharwal <https://github.com/preyansh07>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.3

/* =================== USAGE ===================

    import * as express from 'express';
    import * as swaggerJSDoc  from 'swagger-jsdoc';

    const app = express();

    const options: swaggerJSDoc.OAS3Options = {
        definition: {
          openapi: '3.0.0',
          info: {
            title: 'Hello World',
            description: 'A sample API',
            version: '1.0.0'
          }
        },
        apis: [
          './example/routes*.js',
          './example/parameters.yaml'
        ]
      }
    };

    const spec = swaggerJSDoc(options);

    app.get('/api-docs.json', function(req, res) {
      res.setHeader('Content-Type', 'application/json');
      res.send(spec);
    });

 =============================================== */

/**
 * Returns validated Swagger specification in JSON format.
 */
declare function swaggerJSDoc(options?: swaggerJSDoc.Options): object;

declare namespace swaggerJSDoc {
    /**
     * Open API Specification (OAS) version 3.0 options
     */
    interface OAS3Options {
        apis?: ReadonlyArray<string>;
        definition?: OAS3Definition;
        swaggerDefinition?: OAS3Definition;
        [key: string]: any;
    }

    /**
     * For describing Open API Specification (OAS) version 3.0
     */
    interface OAS3Definition {
        openapi: string;
        info: Information;
        servers?: ReadonlyArray<Server>;
        paths?: Paths;
        components?: Components;
        security?: ReadonlyArray<SecurityRequirement>;
        tags?: ReadonlyArray<Tag>;
        externalDocs?: ExternalDocumentation;
        [key: string]: any;
    }

    interface Information {
        title: string;
        description?: string;
        termsOfService?: string;
        contact?: Contact;
        license?: License;
        version: string;
        [key: string]: any;
    }

    interface Contact {
        name?: string;
        url?: string;
        email?: string;
        [key: string]: any;
    }

    interface License {
        name: string;
        url?: string;
        [key: string]: any;
    }

    interface Server {
        url: string;
        description?: string;
        variables?: { [key: string]: ServerVariable };
        [key: string]: any;
    }

    interface ServerVariable {
        enum?: ReadonlyArray<string>;
        default: string;
        description?: string;
        [key: string]: any;
    }

    interface Paths {
        [key: string]: PathItem;
    }

    interface PathItem {
        $ref?: string;
        summary?: string;
        description?: string;
        get?: Operation;
        put?: Operation;
        post?: Operation;
        delete?: Operation;
        options?: Operation;
        head?: Operation;
        patch?: Operation;
        trace?: Operation;
        servers?: ReadonlyArray<Server>;
        parameters?: Parameter | Reference;
        [key: string]: any;
    }

    interface Operation {
        tags?: string[];
        summary?: string;
        description?: string;
        externalDocs?: ExternalDocumentation;
        operationId?: string;
        parameters?: ReadonlyArray<Parameter | Reference>;
        requestBody?: RequestBody | Reference;
        responses?: Responses;
        callbacks?: { [key: string]: Callback | Reference };
        deprecated?: boolean;
        security?: ReadonlyArray<SecurityRequirement>;
        servers?: ReadonlyArray<Server>;
        [key: string]: any;
    }

    interface Parameter {
        name: string;
        in: string;
        description?: string;
        required?: boolean;
        deprecated?: boolean;
        allowEmptyValue?: boolean;
        style?: string;
        explode?: boolean;
        allowReserved?: boolean;
        schema?: Schema | Reference;
        example?: any;
        examples?: { [key: string]: Example | Reference };
        [key: string]: any;
    }

    interface Schema {
        type?: string;
        format?: string;
        [key: string]: any;
    }

    interface Reference {
        $ref: string;
    }

    interface Example {
        summary?: string;
        description?: string;
        value?: any;
        externalValue?: string;
        [key: string]: any;
    }

    interface RequestBody {
        description?: string;
        content: { [key: string]: MediaType };
        required?: boolean;
        [key: string]: any;
    }

    interface Responses {
        default?: Response | Reference;
        [key: string]: any;
    }

    interface Response {
        description: string;
        headers?: { [key: string]: Header | Reference };
        content?: { [key: string]: MediaType };
        links?: { [key: string]: Link | Reference };
        [key: string]: any;
    }

    interface Header {
        description?: string;
        required?: boolean;
        deprecated?: boolean;
        allowEmptyValue?: boolean;
        style?: string;
        explode?: boolean;
        allowReserved?: boolean;
        schema?: Schema | Reference;
        example?: any;
        examples?: { [key: string]: Example | Reference };
        [key: string]: any;
    }

    interface MediaType {
        schema?: Schema | Reference;
        example?: any;
        examples?: { [key: string]: Example | Reference };
        encoding?: { [key: string]: Encoding };
        [key: string]: any;
    }

    interface Encoding {
        contentType?: string;
        headers?: { [key: string]: Header | Reference };
        style?: string;
        explode?: boolean;
        allowReserved?: boolean;
        [key: string]: any;
    }

    interface Link {
        operationRef?: string;
        operationId?: string;
        parameters?: { [key: string]: any };
        requestBody?: { [key: string]: any };
        description?: string;
        server?: Server;
        [key: string]: any;
    }

    interface Callback {
        [key: string]: PathItem;
    }

    interface SecurityRequirement {
        [key: string]: ReadonlyArray<string>;
    }

    interface Components {
        schemas?: { [key: string]: Schema | Reference };
        responses?: { [key: string]: Response | Reference };
        parameters?: { [key: string]: Parameter | Reference };
        examples?: { [key: string]: Example | Reference };
        requestBodies?: { [key: string]: RequestBody | Reference };
        headers?: { [key: string]: Header | Reference };
        securitySchemes?: { [key: string]: SecurityScheme | Reference };
        links?: { [key: string]: Link | Reference };
        callbacks?: { [key: string]: Callback | Reference };
        [key: string]: any;
    }

    interface SecurityScheme {
        type: string;
        description?: string;
        name?: string;
        in?: string;
        scheme?: string;
        bearerFormat?: string;
        flows?: OAuthFlows;
        openIdConnectUrl?: string;
        [key: string]: any;
    }

    interface OAuthFlows {
        implicit?: OAuthFlow;
        password?: OAuthFlow;
        clientCredentials?: OAuthFlow;
        authorizationCode?: OAuthFlow;
        [key: string]: any;
    }

    interface OAuthFlow {
        authorizationUrl?: string;
        tokenUrl?: string;
        refreshUrl?: string;
        scopes: { [key: string]: string };
        [key: string]: any;
    }

    interface Tag {
        name: string;
        description?: string;
        externalDocs?: ExternalDocumentation;
        [key: string]: any;
    }

    interface ExternalDocumentation {
        description?: string;
        url: string;
        [key: string]: any;
    }

    /**
     * Open API Specification (OAS) version 2.0 options (fka Swagger specification)
     */
    interface Options {
        apis?: ReadonlyArray<string>;
        definition?: SwaggerDefinition;
        swaggerDefinition?: SwaggerDefinition;
        [key: string]: any;
    }

    /**
     * For describing Open API Specification (OAS) version 2.0 (fka Swagger specification)
     */
    interface SwaggerDefinition {
        swagger?: string;
        info: Information;
        host?: string;
        basePath?: string;
        schemes?: ReadonlyArray<string>;
        consumes?: ReadonlyArray<string>;
        produces?: ReadonlyArray<string>;
        tags?: ReadonlyArray<Tag>;
        externalDocs?: ExternalDocumentation;
        [key: string]: any;
    }
}

export = swaggerJSDoc;
