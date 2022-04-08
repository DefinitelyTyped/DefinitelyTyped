import Koa = require('koa');
import asyncBusboy = require('async-busboy');

async function middleware(ctx: Koa.Context, next: () => Promise<any>) {
  const {files, fields} = await asyncBusboy(ctx.req);
}

async function middleware2(ctx: Koa.Context, next: () => Promise<any>) {
  const {fields} = await asyncBusboy(ctx.req, {
    limits: {
      fileSize: 2 * 1024 * 1024,
    },
    onFile: (fieldname: string, file: NodeJS.ReadableStream, filename: string, encoding: string, mimetype: string) => {
    }
  });
}
