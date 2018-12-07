import { Context } from 'azure-functions-types'
import { HttpRequest } from 'azure-functions-types'
import { HttpStatusCode } from 'azure-functions-types'

async function run(context: Context, req: HttpRequest) {
  context.log('HTTP trigger function processed a request.')

  const name = req.query.name || (req.body !== undefined && req.body.name)

  if (name !== false) {
    context.res = {
      body: `Hello ${name}.`
    }
  }
  else {
    context.res = {
      body: 'Please pass a name on the query string or in the request body.',
      status: HttpStatusCode.BadRequest
    }
  }
}
