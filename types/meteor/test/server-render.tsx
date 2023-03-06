import { onPageLoad, ServerSink } from "meteor/server-render";
import * as React from 'react';
import { renderToString, renderToNodeStream } from 'react-dom/server';
import { hydrate } from 'react-dom';
import { ServerStyleSheet } from "styled-components";

// Based on https://docs.meteor.com/packages/server-render.html

onPageLoad(sink => {
  sink.renderIntoElementById("app", renderToString(<div>Hello World</div>));
});

onPageLoad(sink => {
  sink.renderIntoElementById("app", renderToNodeStream(<div>Hello World</div>));
});

onPageLoad(async () => {
  hydrate(<div>Hello World</div>, document.getElementById("app"));
});

onPageLoad(sink => {
  const sheet = new ServerStyleSheet();
  const html = renderToString(sheet.collectStyles(
    <div data-location={(sink as ServerSink).request.url} />
  ));

  sink.renderIntoElementById("app", html);
  sink.appendToHead(sheet.getStyleTags());
});

onPageLoad(sink => {
  sink.getCookies(); // $ExpectType { [key: string]: string; }
  sink.getHeaders(); // $ExpectType IncomingHttpHeaders
  sink.setHeader('cache-control', 'no-cache');
  sink.setStatusCode(200);
  sink.redirect('/');
  sink.redirect('/', 301);

  if ('request' in sink) { // ServerSink
    console.log(sink.arch + sink.head + sink.body);
  }
});
