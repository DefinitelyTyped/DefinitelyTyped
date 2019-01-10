/** For when you've gone too pure and want to go back. */
/**
 * Converts
 * let HistoryItem = (props) => {
 *   const {
 *     item
 *   } = props;
 *   return <li>{item}</li>;
 * };
 *
 * let X = (props) => <div>foo</div>;
 *
 * to
 *
 * class HistoryItem extends Component {
 *   render() {
 *     const {
 *       item
 *     } = this.props;
 *     return <li>{item}</li>;
 *   }
 * }
 *
 * class X extends Component {
 *   render() {
 *     return <div>foo</div>;
 *   }
 * }
 */

import { Transform, ASTNode } from "jscodeshift";

const transform: Transform = (file, api) => {
  const j = api.jscodeshift;
  const {statement} = j.template;

  function hasJSXElement(ast: ASTNode) {
    return j(ast).find(j.JSXElement).size() > 0;
  }

  return j(file.source)
    .find(j.VariableDeclaration)
    .filter(p => p.value.declarations.length === 1)
    .replaceWith(p => {
      const decl = p.value.declarations[0];
      if (decl.type === "VariableDeclarator" && decl.init != null) {
        if (decl.init.type !== 'ArrowFunctionExpression' ||
          (!hasJSXElement(decl.init.body) && decl.init.body.type !== "JSXElement"))
          return p.value;

        let body: any = decl.init.body;
        body = body.type === "JSXElement" ? j.returnStatement(body) : body = body.body;

        j(body)
          .find(j.Identifier, {name: 'props'})
          .replaceWith(p => j.memberExpression(j.thisExpression(), j.identifier('props')));

        return statement`class ${decl.id} extends Component {
          render() { ${body} }
        }`;
      }
    })
    .toSource();
};
