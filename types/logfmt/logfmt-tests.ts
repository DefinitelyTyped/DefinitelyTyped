import * as logfmt from 'logfmt';
import * as through from 'through';
import * as http from 'http';
import * as express from 'express';

// Examples taken from project README

logfmt.stringify({foo: 'bar'});
logfmt.parse('foo=bar');

const logfmt2 = new logfmt();
logfmt2.stringify = JSON.stringify;
logfmt2.log({foo: 'bar'});
logfmt.log({foo: 'bar'});

logfmt.stringify({foo: "bar", a: 14, baz: 'hello kitty'});
logfmt.parse("foo=bar a=14 baz=\"hello kitty\" cool%story=bro f %^asdf code=H12");

process.stdin.pipe(logfmt.streamParser());

process.stdin
  .pipe(logfmt.streamStringify())
  .pipe(process.stdout);

process.stdin
  .pipe(logfmt.streamParser())
  .pipe(through((object) => {
    console.log(object);
  }));

http.createServer((req, res) => {
  req.pipe(logfmt.streamParser())
      .pipe(through((object) => {
        console.log(object);
      }));

  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('OK');
}).listen(3000);

const app = express();
app.use(logfmt.bodyParserStream());
app.post('/logs', (req, res) => {
  if (!req.body) return res.send('OK');

  req.body.pipe(through((line) => {
    console.dir(line);
  }));

  res.send('OK');
});

const app2 = express();
app2.use(logfmt.bodyParser());
// req.body is now an array of objects
app2.post('/logs', (req, res) => {
  console.log('BODY: ' + JSON.stringify(req.body));
  req.body.forEach((data: object) => {
    console.log(data);
  });
  res.send('OK');
});

logfmt.log({foo: "bar", a: 14, baz: 'hello kitty'});
logfmt.log({foo: "bar", a: 14, baz: 'hello kitty'});
logfmt.log({foo: "bar", a: 14, baz: 'hello kitty'}, process.stderr);

// logfmt's trick of copying the prototype onto itself seems to trip up
// TypeScript on module-level member assignment, so this should work but doesn't
//
// $ExpectError
logfmt.stream = process.stderr;
logfmt.log({foo: "bar", a: 14, baz: 'hello kitty'});

const errorLogger = new logfmt();
errorLogger.stream = process.stderr;
errorLogger.log({hello: 'stderr'});

const namespaced = logfmt.namespace({app: 'logfmt'});
namespaced.log({foo: "bar", a: 14, baz: 'hello kitty'});

const timer = logfmt.time();
timer.log();
const timer2 = logfmt.time('time');
timer2.log();
timer2.log();
const timer3 = logfmt.time('time').namespace({foo: 'bar'});
timer3.log();
timer3.log();

logfmt.error(new Error('test error'));

const app3 = express();
app3.use(logfmt.requestLogger());
app3.use(logfmt.requestLogger({immediate: true}, (req, _res) => {
  return {
    method: req.method
  };
}));
app3.use(logfmt.requestLogger({elapsed: 'request.time'}, (req, _res) => {
  return {
    "request.method": req.method
  };
}));
app3.use(logfmt.requestLogger((req, _res) => {
  return {
    method: req.method
  };
}));
app3.use(logfmt.requestLogger((req, res) => {
  const data = logfmt.requestLogger.commonFormatter(req, res);
  return {
    ip: data.ip,
    time: data.time,
    foo: 'bar'
  };
}));
