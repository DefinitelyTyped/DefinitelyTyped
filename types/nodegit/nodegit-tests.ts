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


// test single import
import { AnnotatedCommit, Attr, BlameOptions, Branch, Clone, Reference, Repository, Oid } from 'nodegit';
Repository.discover("startPath", 1, "ceilingDirs").then((string) => {
    // Use string
});

Repository.init("path", 0).then((repository) => {
    // Use repository
});

const repo_s = new Repository();
const id_s = new Oid();
const ref_s = new Reference();

// AnnotatedCommit Tests

AnnotatedCommit.fromFetchhead(repo_s, "branch_name", "remote_url", id_s).then((annotatedCommit) => {
    // Use annotatedCommit
});

AnnotatedCommit.fromRef(repo_s, ref_s).then((annotatedCommit) => {
    // Use annotatedCommit
});

AnnotatedCommit.fromRevspec(repo_s, "revspec").then((annotatedCommit) => {
    // Use annotatedCommit
});

AnnotatedCommit.lookup(repo_s, id_s).then((annotatedCommit) => {
    // Use annotatedCommit
    annotatedCommit.free();
    annotatedCommit.id();
});

// Attr tests

let result_s = Attr.addMacro(repo_s, "name", "values");

Attr.cacheFlush(repo_s);

Attr.get(repo, 1, "path", "name").then((string) => {
    // Use string
});

const array_s = Attr.getMany(repo_s, 1, "path", 1, "names");

result_s = Attr.value("attr");

const blameOptions_s = new BlameOptions();

Branch.lookup(repo_s, "branch_name", Branch.BRANCH.LOCAL).then((reference) => {
    // Use reference
});
