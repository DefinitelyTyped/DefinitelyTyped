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
        apis?: ReadonlyArray<string> | undefined;
        definition?: OAS3Definition | undefined;
        swaggerDefinition?: OAS3Definition | undefined;
        [key: string]: any;
    }

    /**
     * For describing Open API Specification (OAS) version 3.0
     */
    interface OAS3Definition {
        openapi: string;
        info: Information;
        servers?: ReadonlyArray<Server> | undefined;
        paths?: Paths | undefined;
        components?: Components | undefined;
        security?: ReadonlyArray<SecurityRequirement> | undefined;
        tags?: ReadonlyArray<Tag> | undefined;
        externalDocs?: ExternalDocumentation | undefined;
        [key: string]: any;
    }

    interface Information {
        title: string;
        description?: string | undefined;
        termsOfService?: string | undefined;
        contact?: Contact | undefined;
        license?: License | undefined;
        version: string;
        [key: string]: any;
    }

    interface Contact {
        name?: string | undefined;
        url?: string | undefined;
        email?: string | undefined;
        [key: string]: any;
    }

    interface License {
        name: string;
        url?: string | undefined;
        [key: string]: any;
    }

    interface Server {
        url: string;
        description?: string | undefined;
        variables?: { [key: string]: ServerVariable } | undefined;
        [key: string]: any;
    }

    interface ServerVariable {
        enum?: ReadonlyArray<string> | undefined;
        default: string;
        description?: string | undefined;
        [key: string]: any;
    }

    interface Paths {
        [key: string]: PathItem;
    }

    interface PathItem {
        $ref?: string | undefined;
        summary?: string | undefined;
        description?: string | undefined;
        get?: Operation | undefined;
        put?: Operation | undefined;
        post?: Operation | undefined;
        delete?: Operation | undefined;
        options?: Operation | undefined;
        head?: Operation | undefined;
        patch?: Operation | undefined;
        trace?: Operation | undefined;
        servers?: ReadonlyArray<Server> | undefined;
        parameters?: Parameter | Reference | undefined;
        [key: string]: any;
    }

    interface Operation {
        tags?: string[] | undefined;
        summary?: string | undefined;
        description?: string | undefined;
        externalDocs?: ExternalDocumentation | undefined;
        operationId?: string | undefined;
        parameters?: ReadonlyArray<Parameter | Reference> | undefined;
        requestBody?: RequestBody | Reference | undefined;
        responses?: Responses | undefined;
        callbacks?: { [key: string]: Callback | Reference } | undefined;
        deprecated?: boolean | undefined;
        security?: ReadonlyArray<SecurityRequirement> | undefined;
        servers?: ReadonlyArray<Server> | undefined;
        [key: string]: any;
    }

    interface Parameter {
        name: string;
        in: string;
        description?: string | undefined;
        required?: boolean | undefined;
        deprecated?: boolean | undefined;
        allowEmptyValue?: boolean | undefined;
        style?: string | undefined;
        explode?: boolean | undefined;
        allowReserved?: boolean | undefined;
        schema?: Schema | Reference | undefined;
        example?: any;
        examples?: { [key: string]: Example | Reference } | undefined;
        [key: string]: any;
    }

    interface Schema {
        type?: string | undefined;
        format?: string | undefined;
        [key: string]: any;
    }

    interface Reference {
        $ref: string;
    }

    interface Example {
        summary?: string | undefined;
        description?: string | undefined;
        value?: any;
        externalValue?: string | undefined;
        [key: string]: any;
    }

    interface RequestBody {
        description?: string | undefined;
        content: { [key: string]: MediaType };
        required?: boolean | undefined;
        [key: string]: any;
    }

    interface Responses {
        default?: Response | Reference | undefined;
        [key: string]: any;
    }

    interface Response {
        description: string;
        headers?: { [key: string]: Header | Reference } | undefined;
        content?: { [key: string]: MediaType } | undefined;
        links?: { [key: string]: Link | Reference } | undefined;
        [key: string]: any;
    }

    interface Header {
        description?: string | undefined;
        required?: boolean | undefined;
        deprecated?: boolean | undefined;
        allowEmptyValue?: boolean | undefined;
        style?: string | undefined;
        explode?: boolean | undefined;
        allowReserved?: boolean | undefined;
        schema?: Schema | Reference | undefined;
        example?: any;
        examples?: { [key: string]: Example | Reference } | undefined;
        [key: string]: any;
    }

    interface MediaType {
        schema?: Schema | Reference | undefined;
        example?: any;
        examples?: { [key: string]: Example | Reference } | undefined;
        encoding?: { [key: string]: Encoding } | undefined;
        [key: string]: any;
    }

    interface Encoding {
        contentType?: string | undefined;
        headers?: { [key: string]: Header | Reference } | undefined;
        style?: string | undefined;
        explode?: boolean | undefined;
        allowReserved?: boolean | undefined;
        [key: string]: any;
    }

    interface Link {
        operationRef?: string | undefined;
        operationId?: string | undefined;
        parameters?: { [key: string]: any } | undefined;
        requestBody?: { [key: string]: any } | undefined;
        description?: string | undefined;
        server?: Server | undefined;
        [key: string]: any;
    }

    interface Callback {
        [key: string]: PathItem;
    }

    interface SecurityRequirement {
        [key: string]: ReadonlyArray<string>;
    }

    interface Components {
        schemas?: { [key: string]: Schema | Reference } | undefined;
        responses?: { [key: string]: Response | Reference } | undefined;
        parameters?: { [key: string]: Parameter | Reference } | undefined;
        examples?: { [key: string]: Example | Reference } | undefined;
        requestBodies?: { [key: string]: RequestBody | Reference } | undefined;
        headers?: { [key: string]: Header | Reference } | undefined;
        securitySchemes?: { [key: string]: SecurityScheme | Reference } | undefined;
        links?: { [key: string]: Link | Reference } | undefined;
        callbacks?: { [key: string]: Callback | Reference } | undefined;
        [key: string]: any;
    }

    interface SecurityScheme {
        type: string;
        description?: string | undefined;
        name?: string | undefined;
        in?: string | undefined;
        scheme?: string | undefined;
        bearerFormat?: string | undefined;
        flows?: OAuthFlows | undefined;
        openIdConnectUrl?: string | undefined;
        [key: string]: any;
    }

    interface OAuthFlows {
        implicit?: OAuthFlow | undefined;
        password?: OAuthFlow | undefined;
        clientCredentials?: OAuthFlow | undefined;
        authorizationCode?: OAuthFlow | undefined;
        [key: string]: any;
    }

    interface OAuthFlow {
        authorizationUrl?: string | undefined;
        tokenUrl?: string | undefined;
        refreshUrl?: string | undefined;
        scopes: { [key: string]: string };
        [key: string]: any;
    }

    interface Tag {
        name: string;
        description?: string | undefined;
        externalDocs?: ExternalDocumentation | undefined;
        [key: string]: any;
    }

    interface ExternalDocumentation {
        description?: string | undefined;
        url: string;
        [key: string]: any;
    }

    /**
     * Open API Specification (OAS) version 2.0 options (fka Swagger specification)
     */
    interface Options {
        apis?: ReadonlyArray<string> | undefined;
        definition?: SwaggerDefinition | undefined;
        swaggerDefinition?: SwaggerDefinition | undefined;
        [key: string]: any;
    }

    /**
     * For describing Open API Specification (OAS) version 2.0 (fka Swagger specification)
     */
    interface SwaggerDefinition {
        swagger?: string | undefined;
        info: Information;
        host?: string | undefined;
        basePath?: string | undefined;
        schemes?: ReadonlyArray<string> | undefined;
        consumes?: ReadonlyArray<string> | undefined;
        produces?: ReadonlyArray<string> | undefined;
        tags?: ReadonlyArray<Tag> | undefined;
        externalDocs?: ExternalDocumentation | undefined;
        [key: string]: any;
    }
}

export = swaggerJSDoc;
