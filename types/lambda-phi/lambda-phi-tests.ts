import {Lambda, Event, Context, PostConstructor, PreLambdaTimeout, PreLambdaCallback, Callback,} from 'lambda-phi';
import { Path, PathParam, Get, Post, Delete, Headers, PathParams, QueryParams, Method, Any, Body } from 'lambda-phi/lib/api-gateway';

@Lambda({allowNullInjection:false})
class LambdaClassTest {
    @Context() context;
    @Method() method; // GET, POST, ...
    @Callback() callback;
    @Event() event;
    @PathParams() pathParams; // /users/{id} --> this.pathParams.id
    @Body() body;
    @QueryParams() queryParams;

    @Get()
    @Post()
    public otherWise() {
        this.callback(null, {body:JSON.stringify("otherwise\n")});
        //this.callback(null, {event:this.event, context:this.context});
    }

    @Path('/affiliates/:id')
    public normalCallback() {
        this.callback(null, this.context);
    }

    @Path('/body/:id')
    public path1(@PathParam('id') id:string) {
        this.callback(null, {body:JSON.stringify("my path 1\n")});
    }

/*    @Path('/affiliates')
    public affiliates() {
        this.callback(null, this.event);
    }*/

    @Path('/body/:my/:path2')
    @Get()
    @Post()
    public path2(@PathParam('path2') path:string, @PathParam('my') here:string) {
        this.callback(null, {
            body: JSON.stringify('path: '+path+', my:'+here+', query: '+this.queryParams.var+"\n")
        });
    }

    @Any()
    public any() {
        this.callback(null, {body:JSON.stringify("any method")});
    }
}
