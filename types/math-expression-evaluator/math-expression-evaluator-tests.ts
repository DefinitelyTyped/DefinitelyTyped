import Mexp = require("math-expression-evaluator");

Mexp.eval("5*.8");
Mexp.eval("5*.8", { mexp: 5 });
Mexp.eval("mexp(3)", [{
    type: 0,
    show: "mexp(\",value:function(a){return 5*a;}",
    preced: 11,
    token: "mexp"
}]);
Mexp.eval("mexp(3)", [{
    type: 0,
    token: "inverse",
    show: "inverse",
    value: (a => 1 / a)
}]);

Mexp.addToken([{
    type: 3,
    token: "git",
    show: "git",
    value: "git"
}]);
Mexp.eval("mexp*3", { mexp: 5 });

Mexp.addToken([{
    type: 0,
    show: "mexp",
    value: (a => 5 * a),
    preced: 11,
    token: "mexp"
}]);
Mexp.lex("mexp3").toPostfix().postfixEval();

Mexp.lex('mexp3').toPostfix();
Mexp.lex('mexp3').toPostfix().formulaEval();
