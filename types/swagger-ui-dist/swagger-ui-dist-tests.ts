import {
    SwaggerRequest,
    SwaggerUIBundle,
    SwaggerUIStandalonePreset,
    absolutePath,
    getAbsoluteFSPath,
} from 'swagger-ui-dist';

getAbsoluteFSPath(); // $ExpectType string
absolutePath(); // $ExpectType string
