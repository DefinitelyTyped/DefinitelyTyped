import Koa = require('koa');
import mongo = require('koa-mongo');

const app = new Koa();

app.use(mongo())
app.use(async (ctx, next) => {
  const result = await ctx.db.collection('users').insert({ name: 'haha' })
  const userId = result.ops[0]._id.toString()
  ctx.body = await ctx.db.collection('users').find().toArray()
  ctx.db.collection('users').remove({
    _id: mongo.ObjectId(userId)
  })
})
