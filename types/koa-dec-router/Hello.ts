import {controller, get, post} from 'koa-dec-router'

@controller('/hello')
export default class HelloController {

    @get('/ha')
    async list(ctx) {
        ctx.body = 'Hello'
    }

    @get() // using sluggified function name
    async methodName(ctx) {
        ctx.body = 'method name'
    }
}