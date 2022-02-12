import { Request, Response, Server } from 'restify';
import { parse } from 'restify-cookies';

function test(server: Server) {
  server.use(parse);
  server.get('/api/test', (req: Request, res: Response) => {
    res.setCookie('myCookie', 'test' + req.cookies.foo, { path: '/' });
  });
}
