import { FunctionRequest, HttpContext, HttpStatusCode } from '.';

export async function run(context: HttpContext, req: FunctionRequest) {
    context.log('JavaScript HTTP trigger function processed a request.');

    if (req.query.name || (req.body && req.body.name)) {
        context.res = {
            status: HttpStatusCode.OK,
            body: "Hello " + (req.query.name || req.body.name)
        };
    }
    else {
        context.res = {
            status: HttpStatusCode.BadRequest,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};
