## koa-multer type defintions
These definitions are based on the type definitions for multer - https://github.com/expressjs/multer - found on DefinitelyTyped.

## Example usage
This example shows basic usage including how to get type checking on the patched `Context.req` object.
```ts
import * as Koa from 'koa';
import * as Router from 'koa-router';
import * as multer from 'koa-multer';

async function uploadFile(ctx: Koa.Context){
    let multerReq = <multer.MulterIncomingMessage>ctx.req;
    let files = multerReq.files;
    let baseFilePath: string = ctx.params.path || '';
    //...
}

let router = new Router();
router.put('/uploads/:path?', upload.array('files'), uploadFile);

```
The type cast is necessary since the type definitions for Koa do not allow for the `Context.req` property to be extended.
