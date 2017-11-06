import * as router from 'koa-joi-router';

const { Joi } = router;

const spec1 = {
    route: '/user',
    method: 'POST',
    handler: (ctx) => ctx.body = '';
};

router().route(spec1);

const spec2: ISpec = {
  method: 'PATCH',
  route: '/user',
  validate: {},
  handler: (ctx) => ctx.stat
};

router().route(spec2);
