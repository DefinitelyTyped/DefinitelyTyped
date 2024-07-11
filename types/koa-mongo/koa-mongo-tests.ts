import Koa = require("koa");
import mongo = require("koa-mongo");

const app = new Koa();

app.use(mongo());
app.use(async (ctx, next) => {
    await ctx.mongo.db("test").collection("users").insertOne({ name: "example" });
    ctx.body = await ctx.db.collection("users").find().toArray();
    await ctx.db.collection("users").deleteMany({ name: "example" });
});
