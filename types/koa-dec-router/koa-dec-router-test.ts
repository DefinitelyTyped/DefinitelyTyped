import Koa from 'koa'
import DecRouter from 'koa-dec-router'
const app = new Koa()
const decRouter = DecRouter({
    controllersDir: `${__dirname}`,
    async before(ctx, next) {
        await next()
    },
    async after(ctx, next) {
        await next()
    },
})

app.use(decRouter.router.routes())
app.use(decRouter.router.allowedMethods())

const PORT = process.env.DEBUG_PORT || 3456
app.listen(PORT, () => {
    console.log('Listen at ', PORT)
})
export default app