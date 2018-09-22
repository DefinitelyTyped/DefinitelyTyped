import compose = require('mali-compose');
import { Context } from 'mali';

type middleware = (context: Context, next: () => Promise<void>) => Promise<void>;

const arr: number[] = [];
const stack: middleware[] = [];

function _sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

stack.push(async (ctx: Context, next: () => Promise<void>) => {
    arr.push(1);
    await _sleep(1);
    await next();
    await _sleep(1);
    arr.push(6);
  });

stack.push(async (ctx: Context, next: () => Promise<void>) => {
  arr.push(2);
  await _sleep(1);
  await next();
  await _sleep(1);
  arr.push(5);
});

stack.push(async (ctx: Context, next: () => Promise<void>) => {
  arr.push(3);
  await _sleep(1);
  await next();
  await _sleep(1);
  arr.push(4);
});

compose(stack);
compose([]);
compose([compose(stack)]);
