import * as router from 'koa-joi-router';
import { Context } from 'koa';

const { Joi } = router;

const spec1 = {
    path: '/user',
    method: 'POST',
    handler: (ctx: Context) => ctx.body = '',
};

router().route(spec1);

const spec2 = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
  },
  handler: (ctx: Context) => ctx.status = 201,
};

router().route(spec2);

const spec3 = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
    body: Joi.any(),
  },
  handler: (ctx: Context) => ctx.status = 201,
};

router().route(spec3);

const spec4 = {
  method: 'PATCH',
  path: '/user',
  validate: {
    type: 'json',
    201: Joi.object(),
  },
  handler: (ctx: Context) => {
    ctx.status = 201;
    ctx.body = {};
  },
};

router().route(spec3);
