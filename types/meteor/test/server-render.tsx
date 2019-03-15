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