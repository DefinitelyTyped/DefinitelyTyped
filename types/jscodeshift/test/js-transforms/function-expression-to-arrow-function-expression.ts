/**
 * Converts a FunctionExpression to an ArrowFunctionExpression when safe to do so.
 *
 * var a = function(a, b) {
 * 	return a + b;
 * }
 *
 * var b = function(a, b) {
 *  	var c = 0;
 *   	return a + b + c;
 * }
 *
 * var a = function(a, b) {
 *  	return a + b + this.c;
 * }
 *
 * var a = (a, b) => a + b
 *
 * var b = (a, b) => {
 *  	var c = 0;
 *   	return a + b + c;
 * }
 *
 * var a = function(a, b) {
 *  	return a + b + this.c;
 * }
 */
import { Transform, ArrowFunctionExpression } from "jscodeshift";

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;

  return j(file.source)
    .find(j.FunctionExpression)
    // We check for this expression, as if it's in a function expression, we don't want to re-bind "this" by
    // using the arrowFunctionExpression. As that could potentially have some unintended consequences.
    .filter(p => j(p).find(j.ThisExpression).size() === 0)
    .replaceWith(p => {
      let body: ArrowFunctionExpression['body'] = p.value.body;
      // We can get a bit clever here. If we have a function that consists of a single return statement in it's body,
      // we can transform it to the more compact arrowFunctionExpression (a, b) => a + b, vs (a + b) => { return a + b }
      let useExpression = false;
      if (body.type === 'BlockStatement' && body.body.length === 1) {
        const first = body.body[0];
        if (first.type === "ReturnStatement") {
          useExpression = true;
          body = first.argument!;
        }
      }
      return j.arrowFunctionExpression(p.value.params, body, useExpression);
    })
    .toSource();
};
