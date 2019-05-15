import * as Git from 'nodegit';

Git.Repository.discover("startPath", 1, "ceilingDirs").then((string) => {
    // Use string
});

Git.Repository.init("path", 0).then((repository) => {
    // Use repository
});

const repo = new Git.Repository();
const id = new Git.Oid();
const ref = new Git.Reference();
const tree = new Git.Tree();

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

const array = Git.Attr.getMany(repo, 1, "path", 1, "names");

result = Git.Attr.value("attr");

const blameOptions = new Git.BlameOptions();

Git.Branch.lookup(repo, "branch_name", Git.Branch.BRANCH.LOCAL).then((reference) => {
    // Use reference
});

repo.getCommit("0123456789abcdef0123456789abcdef").then((commit) => {
  const sig = Git.Signature.now('John Doe', 'jd@example.com');
  const newCommit: Promise<Git.Oid> = commit.amend('ref', sig, sig, 'utf8', 'message', tree);
});

const signature = Git.Signature.now("name", "email");
signature.name();
signature.email();
signature.when();

repo.createBlobFromBuffer(Buffer.from("test")).then((oid: Git.Oid) => oid.cpy());
