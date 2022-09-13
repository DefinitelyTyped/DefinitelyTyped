import * as Koa from 'koa';
import * as docs from 'koa-docs';
import * as Router from 'koa-joi-router';

const Joi = Router.Joi;
const app = new Koa();
const router = Router();

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
  handler: async (ctx: Koa.Context) => {
    ctx.body = {
      greetings: `Hello, ${ctx.request.params.name}!`,
    };
  }
});

app.use(docs.get('/docs', {
  title: 'Awesome API',
  version: '1.0.0',
  theme: 'paper',
  routeHandlers: 'disabled',
  groups: [
    {
      groupName: 'greetings',
      routes: router.routes,
    }
  ],
}));

app.use(router.middleware());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
