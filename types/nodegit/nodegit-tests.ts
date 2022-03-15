import * as Git from 'nodegit';

Git.Repository.discover('startPath', 1, 'ceilingDirs').then(string => {
    // Use string
});

Git.Repository.init('path', 0).then(repository => {
    // Use repository
});

Git.Repository.initExt('path', {
    flags: 0,
}).then(repository => {
    // Use repository
});

const repo = new Git.Repository();
const id = new Git.Oid();
const ref = new Git.Reference();
const tree = new Git.Tree();
const fetchOptions = new Git.FetchOptions();

tree.walk().start();
tree.getEntry('/').then(entry => {
    // Use entry
});

tree.diff(new Git.Tree()).then(diff => {
    diff.patches();
});

// AnnotatedCommit Tests

Git.AnnotatedCommit.fromFetchhead(repo, 'branch_name', 'remote_url', id).then(annotatedCommit => {
    // Use annotatedCommit
});

Git.AnnotatedCommit.fromRef(repo, ref).then(annotatedCommit => {
    // Use annotatedCommit
});

Git.AnnotatedCommit.fromRevspec(repo, 'revspec').then(annotatedCommit => {
    // Use annotatedCommit
});

Git.AnnotatedCommit.lookup(repo, id).then(annotatedCommit => {
    // Use annotatedCommit
    annotatedCommit.free();
    annotatedCommit.id();
});

// Attr tests

let result = Git.Attr.addMacro(repo, 'name', 'values');

Git.Attr.cacheFlush(repo);

Git.Attr.get(repo, 1, 'path', 'name').then(string => {
    // Use string
});

const array = Git.Attr.getMany(repo, 1, 'path', 1, 'names');

result = Git.Attr.value('attr');

const blameOptions = new Git.BlameOptions();

Git.Blame.file(repo, 'path').then(blame => {
    const hunk = blame.getHunkByLine(0);
    hunk.linesInHunk();
});

Git.Branch.lookup(repo, 'branch_name', Git.Branch.BRANCH.LOCAL).then(reference => {
    // Use reference
});

repo.getCommit('0123456789abcdef0123456789abcdef').then(commit => {
    const sig = Git.Signature.now('John Doe', 'jd@example.com');
    const newCommit: Promise<Git.Oid> = commit.amend('ref', sig, sig, 'utf8', 'message', tree);
});

const signature = Git.Signature.now('name', 'email');
signature.name();
signature.email();
signature.when();

Git.Signature.default(repo).then(defaultSigniture => {
    defaultSigniture.name();
    defaultSigniture.email();
    defaultSigniture.when();
});

repo.createBlobFromBuffer(Buffer.from('test')).then((oid: Git.Oid) => oid.cpy());
repo.commondir();

repo.getHeadCommit().then(async commit => {
    const diffs = await commit.getDiff();
    if (diffs.length > 0) {
        const firstDiff = diffs[0];
        const stats: Git.DiffStats = await firstDiff.getStats();
        const insertions: Number = stats.insertions();
        const deletions: Number = stats.deletions();
        const filesChanged: Number = stats.filesChanged();
    }
});

repo.getRemoteNames().then(remoteNames => {
    const names: string[] = remoteNames;
});

Git.version; // $ExpectType string
Git.Promise; // $ExpectType PromiseConstructor

const revwalk = Git.Revwalk.create(repo);
revwalk.push(id);
const commitList: Promise<Git.Commit[]> = revwalk.getCommitsUntil((commit: Git.Commit) => {
    return true;
});

const historyEntries: Promise<Git.Revwalk.HistoryEntry[]> = revwalk.fileHistoryWalk('path', 100);
historyEntries.then((entries: Git.Revwalk.HistoryEntry[]) => {
    if (entries.length > 0) {
        const entry = entries[0];
        const commit: Git.Commit = entry.commit;
        const status: Git.Diff.DELTA = entry.status;
        const newName: string = entry.newName;
        const oldName: string = entry.oldName;
        entry; // $ExpectType HistoryEntry
        commit; // $ExpectType Commit
        status; // $ExpectType DELTA
        newName; // $ExpectType string
        oldName; // $ExpectType string
    }
});

revwalk.commitWalk(100).then(commits => {
    if (commits.length > 0) {
        const commit = commits[0];
        commit; // $ExpectType Commit
    }
});

revwalk.fastWalk(100).then(oids => {
    if (oids.length > 0) {
        const oid = oids[0];
        oid; // $ExpectType Oid

        const sha = oid.tostrS();
        sha; // $ExpectType string
    }
});

Git.Remote.create(repo, 'test-repository', 'https://github.com/test-repository/test-repository').then(remote => {
    remote.connect(Git.Enums.DIRECTION.FETCH, {});
    remote.defaultBranch(); // $ExpectType Promise<string>
});

Git.Worktree.list(repo).then(list => {
    const mainWorkTreeName = list[0];
    mainWorkTreeName; // $ExpectType string
});

Git.Worktree.openFromRepository(repo).then(worktree => {
    worktree.name(); // $ExpectType string
    worktree.path(); // $ExpectType string
});

Git.Refspec.parse('+refs/heads/*:refs/remotes/origin/*', 0).then(refspec => {
    refspec.direction(); // $ExpectType number
    refspec.dst(); // $ExpectType string
    refspec.dstMatches('+refs/heads/*'); // $ExpectType number
    refspec.force(); // $ExpectType number
    refspec.src(); // $ExpectType string
    refspec.srcMatches('refs/remotes/origin/*'); // $ExpectType number
    refspec.string(); // $ExpectType string
});

repo.cleanup();
