import Balanced = require("balanced-match");

const balanced = new Balanced();

balanced.balanced('{', '}', 'pre{in{nested}}post');
balanced.balanced('{', '}', 'pre{first}between{second}post');
balanced.balanced(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post');
balanced.range('{', '}', 'pre{in{nested}}post');
