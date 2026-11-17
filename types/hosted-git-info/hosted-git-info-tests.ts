import GitHost = require("hosted-git-info");

GitHost.fromUrl("git@github.com:npm/hosted-git-info.git"); // $ExpectType GitHost | undefined

GitHost.fromUrl("git@github.com:npm/hosted-git-info.git", { noCommittish: true, noGitPlus: true });

// $ExpectType GitHost | string | null | undefined
GitHost.fromManifest({ repository: "git+https://github.com/npm/hosted-git-info.git" });

GitHost.fromManifest({ repository: { url: "git+https://github.com/npm/hosted-git-info.git" } }, {
    noCommittish: true,
});

GitHost.parseUrl("git@github.com:npm/hosted-git-info.git"); // $ExpectType URL | undefined

GitHost.addHost("example", {
    domain: "example.com",
    protocols: ["git+ssh:", "https:"],
    extract: url => ({ user: "npm", project: "hosted-git-info", committish: null }),
    sshtemplate: options => `git@example.com:${options.user ?? "-"}/${options.project}.git`,
});

new GitHost("github", "DefinitelyTyped", null, "DefinitelyTyped");

new GitHost("github", "webpack-contrib", null, "copy-webpack-plugin", "40e6ae58", "https");

new GitHost("github", "npm", null, "hosted-git-info", null, "http");

const info = new GitHost("gitlab", "bagrounds", null, "monad-id", "6d3c759b", "docs", {
    noCommittish: true,
});

info.user; // $ExpectType string | null
info.auth; // $ExpectType string | null
info.committish; // $ExpectType string | null | undefined
info.default; // $ExpectType string | undefined
info.hash(); // $ExpectType string
info.ssh({}); // $ExpectType string | null
info.sshurl({}); // $ExpectType string | null
info.browse({}); // $ExpectType string | null
info.browse("src"); // $ExpectType string | null
info.browse("src", "readme", {}); // $ExpectType string | null
info.browseFile("package.json"); // $ExpectType string | null
info.browseFile("package.json", "top"); // $ExpectType string | null
info.docs({}); // $ExpectType string | null
info.bugs({}); // $ExpectType string | null
info.https({}); // $ExpectType string | null
info.git({}); // $ExpectType string | null
info.shortcut({}); // $ExpectType string | null
info.path({}); // $ExpectType string | null
info.tarball({}); // $ExpectType string | null
info.edit("README.md"); // $ExpectType string | null
info.file("package.json", {}); // $ExpectType string | null
info.getDefaultRepresentation(); // $ExpectType string | undefined
info.toString({}); // $ExpectType string | null
