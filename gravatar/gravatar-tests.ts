/// <reference path="gravatar.d.ts" />

import gravatar = require('gravatar');

gravatar.url("email@example.com");
gravatar.url("email@example.com", { s: "200", r: "pg", d: "404" });
gravatar.url("email@example.com", { size: "200", r: "pg", d: "404" });
gravatar.url("email@example.com", { s: "200" });
gravatar.url("email@example.com", { default: "404" });
gravatar.url("email@example.com", { s: "200", rating: "pg", d: "404" }, true);
gravatar.url("email@example.com", { s: "200", r: "pg", default: "404" }, false);
gravatar.url("email@example.com", { d: "404" }, false);
gravatar.url("email@example.com", { forcedefault: "y" }, false);
gravatar.url("email@example.com", { f: "y" });
