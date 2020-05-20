import mustache = require("gulp-mustache");
import { Transform } from "stream";

mustache({ // $ExpectType Transform
    msg: "Hello Gulp!"
});
mustache({
  name: "Chris",
  value: 10000,
  taxed_value: 10000 - (10000 * 0.4),
  in_ca: true
});
mustache({
  repo: [
    { name: "resque" },
    { name: "hub" },
    { name: "rip" }
  ]
});
mustache({
  name: "Willy",
  wrapped: () => {
    return (text: string, render: (arg: string) => string) => {
      return `<b>${render(text)}</b>`;
    };
  }
});
mustache({
  "person?": { name: "Jon" }
});
mustache({
  repo: []
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
