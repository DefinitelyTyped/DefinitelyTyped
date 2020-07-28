import balanced = require('balanced-match');

balanced('{', '}', 'pre{in{nested}}post');
balanced('{', '}', 'pre{first}between{second}post');
balanced(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post');
balanced.range('{', '}', 'pre{in{nested}}post');
