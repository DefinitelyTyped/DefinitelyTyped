import { Request, Response, Server } from 'restify';
import 'restify-cookies';

function test(server: Server) {
  server.get('/api/test', (req: Request, res: Response) => {
    res.setCookie('myCookie', 'test' + req.cookies.foo, { path: '/' });
  });
}
