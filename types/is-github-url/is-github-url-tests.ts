import isGithubUrl = require("is-github-url");

isGithubUrl("");
isGithubUrl("", {});
isGithubUrl("", { strict: true });
isGithubUrl("", { repository: true });
isGithubUrl("", { strict: true, repository: true });
