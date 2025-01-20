import vinyl = require("vinyl");
import _match = require("gulp-match");

const file = new vinyl();

let a: boolean;

a = _match(file, true);
a = _match(file, false);
a = _match(file, "*.css");
a = _match(file, ["*.css", "!test.css"]);
a = _match(file, /\.css$/);
a = _match(file, (file: vinyl) => file.isSymbolic());
a = _match(file, { isDirectory: true });
a = _match(file, { isFile: true });

const b: _match.MatchCondition = "*.css";
