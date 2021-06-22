/**
 * This transform converts stuff like:
 *
 *  let x = this.foo.bind(this);
 *
 *  to
 *
 *  let x = ::this.foo;
 *
 */
import j = require("jscodeshift");

const transform: j.Transform = (file, api) => {
  const j = api.jscodeshift;
  return j(file.source)
    // Find stuff that looks like this.xyz.bind(this)
    .find(j.CallExpression, {callee: {object: {object: j.ThisExpression}, property: {name: 'bind'}}})
    // Ensure that .bind() is being called with only one argument, and that argument is "this".
    .filter(p => p.value.arguments.length === 1 && p.value.arguments[0].type === "ThisExpression")
    // We can now replace it with ::this.xyz
    .replaceWith(p => j.bindExpression(null, (p.value.callee as j.MemberExpression).object))
    .toSource();
};

export = transform;
