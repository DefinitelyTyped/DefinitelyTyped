import * as Router from 'koa-joi-router';
import * as Koa from 'koa';
import { SwaggerAPI } from 'koa-joi-router-docs';

const Joi = Router.Joi;
const app = new Koa();
const router = Router();
const generator = new SwaggerAPI();

router.route({
  method: 'get',
  path: '/say-hello/:name',
  validate: {
    params: {
      name: Joi.string().required(),
    },
    output: {
      200: {
        body: Joi.object({
          greetings: Joi.string(),
        })
      }
    },
  },
  handler: async (ctx) => {
    ctx.body = {
      greetings: `Hello, ${ctx.request.params.name}!`,
    };
  }
});

generator.addJoiRouter(router);
const spec = generator.generateSpec({
  info: {
    title: 'Awesome API',
    description: 'API for creating and editing examples.',
    version: '0.0.1',
  },
  basePath: '/',
  tags: [
    {
      name: 'greetings',
      description: 'Group of API methods ',
    },
  ],
}, {
  defaultResponses: {},
  warnFunc: () => {
    console.log('Something happen...');
  }
});

router.get('/api.json', async (ctx) => {
  ctx.body = JSON.stringify(spec, null, '  ');
});

app.use(router.middleware());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
