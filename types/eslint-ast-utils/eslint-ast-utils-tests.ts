import * as ESLint from "eslint";
import astUtils = require("eslint-ast-utils");

const Rule: ESLint.Rule.RuleModule = {
    create(context) {
        return {
            CallExpression(node) {
                if (astUtils.isStaticRequire(node)) {
                    context.report({
                        node,
                        message: "Use import syntax rather than `require`",
                    });
                }

                if (astUtils.isStaticRequire(node) && astUtils.getRequireSource(node) === "underscore") {
                    context.report({
                        node,
                        message: "Use `lodash` instead of `underscore`",
                    });
                }

                if (astUtils.isPromise(node)) {
                    context.report({
                        node,
                        message: "Prefer using async/await",
                    });
                }

                if (
                    node.callee.type === "Identifier"
                    && node.callee.name === "test"
                    && !astUtils.isFunctionExpression(node.arguments[0])
                    && !astUtils.isFunctionExpression(node.arguments[1])
                ) {
                    context.report({
                        node,
                        message: "You need to pass a function to test()",
                    });
                }
            },
            FunctionDeclaration(node) {
                node.params.forEach(param => {
                    if (param.type === "Identifier" && !astUtils.containsIdentifier(param.name, node.body)) {
                        context.report({
                            node,
                            message: `${param.name} is never used`,
                        });
                    }

                    if (param.type === "Identifier" && !astUtils.someContainIdentifier(param.name, [node.body])) {
                        context.report({
                            node,
                            message: `${param.name} is never used`,
                        });
                    }
                });
            },
            MemberExpression(node) {
                const name = astUtils.getPropertyName(node);

                if (typeof name === "string" && name.startsWith("_")) {
                    context.report({
                        node,
                        message: "Don't access \"private\" fields",
                    });
                }
            },
            TemplateLiteral(node) {
                const expression = astUtils.computeStaticExpression(node);

                if (expression) {
                    context.report({
                        node,
                        message: `You can replace this template literal by the regular string '${expression.value}'.`,
                    });
                }
            },
            NewExpression(node) {
                if (astUtils.isPromise(node)) {
                    context.report({
                        node,
                        message: "Prefer using async/await",
                    });
                }
            },
        };
    },
};
