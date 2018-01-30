import * as parseDiff from 'parse-diff';

const diff0 = parseDiff(null);
const file0: parseDiff.File = diff0[0];

file0.additions = 0;
file0.deletions = 0;
file0.from = '';
file0.to = '';
file0.index = [''];
file0.deleted = true;
file0.new = true;

file0.chunks.length;
file0.chunks[0].content = '';
file0.chunks[0].newLines = 0;
file0.chunks[0].newStart = 0;
file0.chunks[0].oldLines = 0;
file0.chunks[0].oldStart = 0;
file0.chunks[0].changes.length;
file0.chunks[0].changes[0].content = '';
file0.chunks[0].changes[0].type = 'add';
(file0.chunks[0].changes[0] as parseDiff.AddChange).add = true;
(file0.chunks[0].changes[0] as parseDiff.AddChange).content = '';
(file0.chunks[0].changes[0] as parseDiff.AddChange).ln = 0;
(file0.chunks[0].changes[0] as parseDiff.AddChange).type = 'add';

(file0.chunks[0].changes[1] as parseDiff.DeleteChange).del = true;
(file0.chunks[0].changes[1] as parseDiff.DeleteChange).content = '';
(file0.chunks[0].changes[1] as parseDiff.DeleteChange).ln = 0;
(file0.chunks[0].changes[1] as parseDiff.DeleteChange).type = 'del';

(file0.chunks[0].changes[2] as parseDiff.NormalChange).normal = true;
(file0.chunks[0].changes[2] as parseDiff.NormalChange).content = '';
(file0.chunks[0].changes[2] as parseDiff.NormalChange).ln1 = 0;
(file0.chunks[0].changes[2] as parseDiff.NormalChange).ln2 = 0;
(file0.chunks[0].changes[2] as parseDiff.NormalChange).type = 'normal';

const diff1 = parseDiff('');
const file1: parseDiff.File = diff0[1];

const diff2 = parseDiff();
const file2: parseDiff.File = diff0[2];

const addChangeType: parseDiff.ChangeType = 'add';
const addChange: parseDiff.AddChange = { type: addChangeType, add: true, ln: 0, content: '' };

const noramlChangeType: parseDiff.ChangeType = 'normal';
const normalChange: parseDiff.NormalChange = { type: noramlChangeType, normal: true, ln1: 0, ln2: 1, content: '' };

const deleteChangeType: parseDiff.ChangeType = 'del';
const deleteChange: parseDiff.DeleteChange = { type: deleteChangeType, del: true, ln: 0, content: '' };

const changes: parseDiff.Change[] = [addChange, normalChange, deleteChange];

const chunk: parseDiff.Chunk = { content: '', changes, oldStart: 0, newStart: 1, oldLines: 0, newLines: 1 };
const file3: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1, from: '', to: '', deleted: true, new: true };
const file4: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1, to: '', deleted: true, new: true };
const file5: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1, from: '', deleted: true, new: true };
const file6: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1, deleted: true, new: true };
const file7: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1, deleted: true };
const file8: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1, new: true };
const file9: parseDiff.File = { chunks: [chunk], deletions: 1, additions: 1 };
