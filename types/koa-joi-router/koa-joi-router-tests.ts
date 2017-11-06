import * as router from 'koa-joi-router';

const spec1 = {
  route: '/user',
  method: 'POST',
  handler: (ctx) => ctx.body = '';
};

router().route(spec1);