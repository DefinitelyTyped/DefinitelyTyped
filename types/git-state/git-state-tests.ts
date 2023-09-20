import * as git from "git-state";

// test type exports
type Options = git.Options;
type CheckResult = git.CheckResult;

git.isGit("/path", exists => {
    exists; // $ExpectType boolean
});
git.isGitSync("/path");

git.check("/path", (err, result) => {
    err; // $ExpectType ExecException | null
    result; // $ExpectType CheckResult
});
git.check("/path", { maxBuffer: 1 }, (err, result) => {
    err; // $ExpectType ExecException | null
    result; // $ExpectType CheckResult
});
git.check(new URL("file:///path"), (err, result) => {
    err; // $ExpectType ExecException | null
    result; // $ExpectType CheckResult
});
git.check(new URL("file:///path"), { maxBuffer: 1 }, (err, result) => {
    err; // $ExpectType ExecException | null
    result; // $ExpectType CheckResult
});

const checkResult = git.checkSync("/path"); // $ExpectType CheckResult
git.checkSync("/path", { maxBuffer: 1 }); // $ExpectType CheckResult
git.checkSync(new URL("file:///path")); // $ExpectType CheckResult
git.checkSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType CheckResult

checkResult.branch; // $ExpectType string | null | undefined
checkResult.ahead; // $ExpectType number
checkResult.dirty; // $ExpectType number
checkResult.untracked; // $ExpectType number
checkResult.stashes; // $ExpectType number

git.untracked("/path", (err, untracked) => {
    err; // $ExpectType ExecException | null
    untracked; // $ExpectType number
});
git.untracked("/path", { maxBuffer: 1 }, (err, untracked) => {
    err; // $ExpectType ExecException | null
    untracked; // $ExpectType number
});
git.untracked(new URL("file:///path"), (err, untracked) => {
    err; // $ExpectType ExecException | null
    untracked; // $ExpectType number
});
git.untracked(new URL("file:///path"), { maxBuffer: 1 }, (err, untracked) => {
    err; // $ExpectType ExecException | null
    untracked; // $ExpectType number
});

git.untrackedSync("/path"); // $ExpectType number
git.untrackedSync("/path", { maxBuffer: 1 }); // $ExpectType number
git.untrackedSync(new URL("file:///path")); // $ExpectType number
git.untrackedSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType number

git.dirty("/path", (err, dirty) => {
    err; // $ExpectType ExecException | null
    dirty; // $ExpectType number
});
git.dirty("/path", { maxBuffer: 1 }, (err, dirty) => {
    err; // $ExpectType ExecException | null
    dirty; // $ExpectType number
});
git.dirty(new URL("file:///path"), (err, dirty) => {
    err; // $ExpectType ExecException | null
    dirty; // $ExpectType number
});
git.dirty(new URL("file:///path"), { maxBuffer: 1 }, (err, dirty) => {
    err; // $ExpectType ExecException | null
    dirty; // $ExpectType number
});

git.dirtySync("/path"); // $ExpectType number
git.dirtySync("/path", { maxBuffer: 1 }); // $ExpectType number
git.dirtySync(new URL("file:///path")); // $ExpectType number
git.dirtySync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType number

git.branch("/path", (err, branch) => {
    err; // $ExpectType ExecException | null
    branch; // $ExpectType string | undefined
});
git.branch("/path", { maxBuffer: 1 }, (err, branch) => {
    err; // $ExpectType ExecException | null
    branch; // $ExpectType string | undefined
});
git.branch(new URL("file:///path"), (err, branch) => {
    err; // $ExpectType ExecException | null
    branch; // $ExpectType string | undefined
});
git.branch(new URL("file:///path"), { maxBuffer: 1 }, (err, branch) => {
    err; // $ExpectType ExecException | null
    branch; // $ExpectType string | undefined
});

git.branchSync("/path"); // $ExpectType string | null
git.branchSync("/path", { maxBuffer: 1 }); // $ExpectType string | null
git.branchSync(new URL("file:///path")); // $ExpectType string | null
git.branchSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType string | null

git.ahead("/path", (err, ahead) => {
    err; // $ExpectType ExecException | null
    ahead; // $ExpectType number
});
git.ahead("/path", { maxBuffer: 1 }, (err, ahead) => {
    err; // $ExpectType ExecException | null
    ahead; // $ExpectType number
});
git.ahead(new URL("file:///path"), (err, ahead) => {
    err; // $ExpectType ExecException | null
    ahead; // $ExpectType number
});
git.ahead(new URL("file:///path"), { maxBuffer: 1 }, (err, ahead) => {
    err; // $ExpectType ExecException | null
    ahead; // $ExpectType number
});

git.aheadSync("/path"); // $ExpectType number
git.aheadSync("/path", { maxBuffer: 1 }); // $ExpectType number
git.aheadSync(new URL("file:///path")); // $ExpectType number
git.aheadSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType number

git.commit("/path", (err, commit) => {
    err; // $ExpectType ExecException | null
    commit; // $ExpectType string
});
git.commit("/path", { maxBuffer: 1 }, (err, commit) => {
    err; // $ExpectType ExecException | null
    commit; // $ExpectType string
});
git.commit(new URL("file:///path"), (err, commit) => {
    err; // $ExpectType ExecException | null
    commit; // $ExpectType string
});
git.commit(new URL("file:///path"), { maxBuffer: 1 }, (err, commit) => {
    err; // $ExpectType ExecException | null
    commit; // $ExpectType string
});

git.commitSync("/path"); // $ExpectType string
git.commitSync("/path", { maxBuffer: 1 }); // $ExpectType string
git.commitSync(new URL("file:///path")); // $ExpectType string
git.commitSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType string

git.stashes("/path", (err, stashes) => {
    err; // $ExpectType ExecException | null
    stashes; // $ExpectType number
});
git.stashes("/path", { maxBuffer: 1 }, (err, stashes) => {
    err; // $ExpectType ExecException | null
    stashes; // $ExpectType number
});
git.stashes(new URL("file:///path"), (err, stashes) => {
    err; // $ExpectType ExecException | null
    stashes; // $ExpectType number
});
git.stashes(new URL("file:///path"), { maxBuffer: 1 }, (err, stashes) => {
    err; // $ExpectType ExecException | null
    stashes; // $ExpectType number
});

git.stashesSync("/path"); // $ExpectType number
git.stashesSync("/path", { maxBuffer: 1 }); // $ExpectType number
git.stashesSync(new URL("file:///path")); // $ExpectType number
git.stashesSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType number

git.message("/path", (err, message) => {
    err; // $ExpectType ExecException | null
    message; // $ExpectType string
});
git.message("/path", { maxBuffer: 1 }, (err, message) => {
    err; // $ExpectType ExecException | null
    message; // $ExpectType string
});
git.message(new URL("file:///path"), (err, message) => {
    err; // $ExpectType ExecException | null
    message; // $ExpectType string
});
git.message(new URL("file:///path"), { maxBuffer: 1 }, (err, message) => {
    err; // $ExpectType ExecException | null
    message; // $ExpectType string
});

git.messageSync("/path"); // $ExpectType string
git.messageSync("/path", { maxBuffer: 1 }); // $ExpectType string
git.messageSync(new URL("file:///path")); // $ExpectType string
git.messageSync(new URL("file:///path"), { maxBuffer: 1 }); // $ExpectType string
