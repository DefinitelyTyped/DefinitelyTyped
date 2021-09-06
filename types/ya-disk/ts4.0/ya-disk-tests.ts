import YaDisk = require('ya-disk');

let disk: Promise<YaDisk.Disk>;
let link: Promise<YaDisk.Link>;
let file: Promise<YaDisk.Resource>;
let operation: Promise<YaDisk.Operation>;

const token = 'token';

link = YaDisk.download.link(token, 'file');

file = YaDisk.meta.get(token, '/', {
    limit: 5,
    offset: 5,
    preview_size: '45x85',
    preview_crop: true,
});

file = YaDisk.meta.add(token, '/');
file = YaDisk.meta.add(token, '/', {
    foo: 'bar',
});

link = YaDisk.upload.link(token, '/');
link = YaDisk.upload.link(token, '/', true);

link = YaDisk.upload.remoteFile(token, 'https://...', '/');

let result;

result = YaDisk.resources.copy(token, 'from', 'to');
result = YaDisk.resources.copy(token, 'from', 'to', true);
result = YaDisk.resources.copy(token, 'from', 'to', true, 'foo');

result = YaDisk.resources.create(token, 'path');

result = YaDisk.resources.move(token, 'from', 'to');
result = YaDisk.resources.move(token, 'from', 'to', true);
result = YaDisk.resources.move(token, 'from', 'to', true, 'foo');

result = YaDisk.resources.remove(token, 'path');
result = YaDisk.resources.remove(token, 'path', true);

disk = YaDisk.info(token);

const files = YaDisk.list(token, {
    media_type: 'audio',
    limit: 40,
    offset: 5,
    preview_size: 'x111',
});

operation = YaDisk.operations(token, 'abcdef');

const recent = YaDisk.recent(token, {
    limit: 40,
    media_type: 'audio',
    preview_crop: true,
    preview_size: 'S',
});
