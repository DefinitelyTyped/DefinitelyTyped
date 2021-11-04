import SwaggerUIDist = require('swagger-ui-dist');
import express = require('express');
import { getAbsoluteFSPath, absolutePath as absolutePathAlias, SwaggerUIBundle } from 'swagger-ui-dist';
import absolutePath = require('swagger-ui-dist/absolute-path');

SwaggerUIDist.getAbsoluteFSPath(); // $ExpectType string
SwaggerUIDist.absolutePath(); // $ExpectType string
getAbsoluteFSPath(); // $ExpectType string
absolutePathAlias(); // $ExpectType string
absolutePath(); // $ExpectType string
SwaggerUIDist.SwaggerUIBundle();
SwaggerUIDist.SwaggerUIBundle.getConfigs();

// api tests

const app = express();
app.use(express.static(absolutePath()));
app.listen(3000);

const ui = SwaggerUIBundle({
    url: 'https://petstore.swagger.io/v2/swagger.json',
    dom_id: '#swagger-ui',
    presets: [SwaggerUIBundle.presets.apis, SwaggerUIBundle.SwaggerUIStandalonePreset],
    layout: 'StandaloneLayout',
});
