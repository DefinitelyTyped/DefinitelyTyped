import githubUsernameRegex = require("github-username-regex");

const githubUsernameRegexString: string = githubUsernameRegex.source;
const valid: boolean = githubUsernameRegex.test("abc-123");
