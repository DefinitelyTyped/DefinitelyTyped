import mustache = require("gulp-mustache");
import { Transform } from "stream";

mustache({ // $ExpectType Transform
    msg: "Hello Gulp!"
});

mustache({ // $ExpectType Transform
    msg: "Hello Gulp!",
    nested_value: "I am nested.",
    another_value: "1 2 3"
}, {}, {
    some_inner_partial: "<p>{{nested_value}}</p>",
    another_partial: "<div>{{another_value}}</div>"
});

mustache('your_json_file.json', {}, {}); // $ExpectType Transform
