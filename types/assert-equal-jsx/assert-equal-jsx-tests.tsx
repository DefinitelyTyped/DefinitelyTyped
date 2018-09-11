import * as React from 'react';
import assertEqualJSX = require('assert-equal-jsx');

function sanitizeId(str: string): string {
  return str.replace(/my-component-id-(\d+)/ig, 'my-component-id-0');
}

assertEqualJSX(
  <div id='my-component-id-314159265' />,
  // should equal:
  <div id='my-component-id-0' />,
  // with sanitization:
  {
    sanitize: sanitizeId
  }
);
