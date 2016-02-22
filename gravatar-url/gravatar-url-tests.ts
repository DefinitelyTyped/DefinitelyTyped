/// <reference path="gravatar-url.d.ts" />

gravatar.url("email@example.com");
gravatar.url("email@example.com", { size: 200, rating: "pg", default: "404" });
gravatar.url("email@example.com", { size: 200 });
gravatar.url("email@example.com", { default: "404" });
gravatar.url("email@example.com", { rating: "pg" });
