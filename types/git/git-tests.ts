import base = require("git");

var git = new base.Git("../.git");
git.call_git("", "clone", "", {}, ["https://github.com/DefinitelyTyped/DefinitelyTyped.git", "d.ts"], function (err, data) {
    console.log(arguments);
});

new base.Repo("../.git", (err, repo)=> {
    repo.log(null, null, null, (err, commits)=> {
        commits.forEach(commit=> {
            console.log(commit.message);
        })
    });

    repo.diff("aaa", "bbb", (err, data)=> {
        console.log(data);
    });
});
