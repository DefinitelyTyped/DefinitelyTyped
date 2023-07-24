import balanced = require('balanced-match');

balanced('{', '}', 'pre{in{nested}}post'); // $Expect-Type Output
balanced('[', ']', 'pre{in{nested}}post'); // $Expect-Type undefined
balanced('{', '}', 'pre{first}between{second}post'); // $Expect-Type Output
balanced('[', ']', 'pre{first}between{second}post'); // $Expect-Type Output
balanced(/\s+\{\s+/, /\s+\}\s+/, 'pre  {   in{nest}   }  post'); // $Expect-Type Output
balanced(/\s+\[\s+/, /\s+\]\s+/, 'pre  {   in{nest}   }  post'); // $Expect-Type undefined
balanced.range('{', '}', 'pre{in{nested}}post'); // $Expect-Type [number,number]
balanced.range('[', ']', 'pre{in{nested}}post'); // $Expect-Type undefined
