import { onPageLoad } from "meteor/server-render";
import * as React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';

onPageLoad(sink => {
  if (sink.renderIntoElementById) {
    sink.renderIntoElementById("app", renderToString(<div>Hello World</div>));
  }
});

onPageLoad(sink => {
  if (sink.renderIntoElementById) {
    sink.renderIntoElementById("app", renderToNodeStream(<div>Hello World</div>));
  }
});

onPageLoad(sink => {
  if (sink.getCookies) {
    sink.getCookies(); // $ExpectType { [key: string]: string; }
  }
  if (sink.getHeaders) {
    sink.getHeaders(); // $ExpectType IncomingHttpHeaders
  }
  if (sink.setHeader) {
    sink.setHeader('cache-control', 'no-cache');
  }
  if (sink.setStatusCode) {
    sink.setStatusCode(200);
  }
  if (sink.redirect) {
    sink.redirect('/');
    sink.redirect('/', 301);
  }
});
