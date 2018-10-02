import router = require('koa-joi-router');

const { Joi } = router;

const spec1: router.Spec = {
    path: '/user',
    method: 'POST',
    handler: (ctx: router.Context) => ctx.body = '',
};

router().route(spec1);

const spec2: router.Spec = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
  },
  handler: (ctx: router.Context) => ctx.status = 201,
};

router().route(spec2);

const spec3: router.Spec = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
    body: Joi.any(),
  },
  handler: (ctx: router.Context) => ctx.status = 201,
};

router().route(spec3);

const spec4: router.Spec = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
    output: {
      201: Joi.object(),
    }
  },
  handler: (ctx: router.Context) => {
    ctx.status = 201;
    ctx.body = {};
  },
};

router().route(spec4);

const spec5: router.Spec = {
  method: 'PUT',
  path: '/user',
  handler: (ctx: router.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.body;
  },
};

router().route(spec5);

const spec6: router.Spec = {
  method: 'GET',
  path: '/user',
  handler: (ctx: router.Context) => {
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
  handler: (ctx: router.Context) => {
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
  handler: (ctx: router.Context) => {
    ctx.status = 201;
    ctx.body = ctx.request.params;
  },
};

router().route(spec8);

router().route([spec1, spec2, spec3]);

router().routes.map(({ path }) => path);
