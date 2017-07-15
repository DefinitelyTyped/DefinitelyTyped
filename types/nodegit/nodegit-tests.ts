import * as Git from 'nodegit';

Git.Repository.discover("startPath", 1, "ceilingDirs").then((string) => {
    // Use string
});

Git.Repository.init("path", true).then((repository) => {
    // Use repository
});

const repo = new Git.Repository();
const id = new Git.Oid();
const ref = new Git.Reference();

// AnnotatedCommit Tests

Git.AnnotatedCommit.fromFetchhead(repo, "branch_name", "remote_url", id).then((annotatedCommit) => {
    // Use annotatedCommit
});

Git.AnnotatedCommit.fromRef(repo, ref).then((annotatedCommit) => {
    // Use annotatedCommit
});

Git.AnnotatedCommit.fromRevspec(repo, "revspec").then((annotatedCommit) => {
    // Use annotatedCommit
});

Git.AnnotatedCommit.lookup(repo, id).then((annotatedCommit) => {
    // Use annotatedCommit
    annotatedCommit.free();
    annotatedCommit.id();
});

// Attr tests

let result = Git.Attr.addMacro(repo, "name", "values");

Git.Attr.cacheFlush(repo);

Git.Attr.get(repo, 1, "path", "name").then((string) => {
    // Use string
});

let array = Git.Attr.getMany(repo, 1, "path", 1, "names");

result = Git.Attr.value("attr");

const blameOptions = new Git.BlameOptions();

Git.Branch.lookup(repo, "branch_name", Git.Branch.BRANCH.LOCAL).then((reference) => {
    // Use reference
});
