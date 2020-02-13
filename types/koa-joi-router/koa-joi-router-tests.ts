import koa = require('koa');
import router = require('koa-joi-router');

const { Joi } = router;

const spec1: router.Spec = {
    path: '/user',
    method: 'POST',
    handler: (ctx: koa.Context) => ctx.body = '',
};

router().route(spec1);

const spec2: router.Spec = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
  },
  handler: (ctx: koa.Context) => ctx.status = 201,
};

router().route(spec2);

const spec3: router.Spec = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
    body: Joi.any(),
  },
  handler: (ctx: koa.Context) => ctx.status = 201,
  pre: (_ctx, next) => next(),
};

router().route(spec3);

const spec4: router.Spec = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
    output: {
      201: {
        body: Joi.object(),
      },
      '400,404': {
        headers: Joi.object(),
        body: Joi.object(),
      },
      '500-599': {
        headers: Joi.object(),
      },
    },
    jsonOptions: {
        limit: '10kb'
    }
  },
  handler(ctx) {
    ctx.status = 201;
    ctx.body = {};
  },
};

router().route(spec4);

const spec5: router.Spec = {
  method: 'PUT',
  path: '/user',
  handler: (ctx) => {
    ctx.status = 201;
    ctx.body = ctx.request.body;
  },
  meta: 'meta data',
};

router().route(spec5);

const spec6: router.Spec = {
  method: 'GET',
  path: '/user',
  handler: (ctx: koa.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.params;
  },
};

router().route(spec6);

const spec7: router.Spec = {
  method: 'GET',
  path: '/user',
  validate: {
    query: {
      id: Joi.number(),
      name: Joi.string(),
    }
  },
  handler: (ctx: koa.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.params;
  },
};

router().route(spec7);

const spec8: router.Spec = {
  method: 'POST',
  path: '/user',
  validate: {
    header: {
      authentication: Joi.string(),
    }
  },
  handler: (ctx: koa.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.params;
  },
};

router().route(spec8);

router().route([spec1, spec2, spec3]);

router().routes.map(({ path }) => path);

const handler1 = async (ctx: koa.Context) => {
  ctx.body = 'hello world';
};

router().get('/', handler1);

router().get('/', {meta: {desc: 'desc'}}, handler1);

router().get('/user', {
    validate: {
        query: {
          id: Joi.number(),
          name: Joi.string(),
        }
    }
}, (ctx: koa.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.params;
});

const spec9: router.Config = {
    validate: {
        body: {
          name: Joi.string(),
        },
        type: 'json'
    }
};

const spec9Handler = (ctx: koa.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.params;
};

router().get('/user', spec9, spec9Handler);

const middleware1 = async (ctx: koa.Context, next: koa.Next) => {
  console.log('middleware1');
  await next();
};

router().get('/', middleware1, handler1);

const middleware2 = async (ctx: koa.Context, next: koa.Next) => {
  console.log('middleware2');
  await next();
};

router().get('/', [middleware1, middleware2], handler1);

router().use(middleware1);

router().use('/:id', middleware1);

router().param('/:id', async (id: string, ctx: koa.Context, next: koa.Next) => {
  ctx.state.id = id;
  await next();
});
