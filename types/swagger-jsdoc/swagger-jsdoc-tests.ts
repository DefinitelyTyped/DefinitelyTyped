import * as express from 'express';
import * as swaggerJSDoc from 'swagger-jsdoc';
const app = express();

let options = {
    swaggerDefinition: {
        info: {
            title: 'A test api',
            version: '1.0.0'
        }
    }
};

let swaggerSpec = swaggerJSDoc(options);

app.get('/api-docs.json', function(req, res) {
    res.send(swaggerSpec);
})

app.listen(8888);
