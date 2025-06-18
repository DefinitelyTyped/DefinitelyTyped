import balanced, { range } from "balanced-match";

balanced("{", "}", "pre{in{nested}}post"); // $Expect-Type Output
balanced("[", "]", "pre{in{nested}}post"); // $Expect-Type undefined
balanced("{", "}", "pre{first}between{second}post"); // $Expect-Type Output
balanced("[", "]", "pre{first}between{second}post"); // $Expect-Type Output
balanced(/\s+\{\s+/, /\s+\}\s+/, "pre  {   in{nest}   }  post"); // $Expect-Type Output
balanced(/\s+\[\s+/, /\s+\]\s+/, "pre  {   in{nest}   }  post"); // $Expect-Type undefined
range("{", "}", "pre{in{nested}}post"); // $Expect-Type [number,number]
range("[", "]", "pre{in{nested}}post"); // $Expect-Type undefined
