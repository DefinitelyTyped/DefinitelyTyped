import writeFileAtomic = require('write-file-atomic');

writeFileAtomic('message.txt', 'Hello Node', err => {});

writeFileAtomic('message.txt', 'Hello Node', {chown: {uid: 100, gid: 50}}, err => {});
writeFileAtomic('message.txt', 'Hello Node', {encoding: ''}, err => {});
writeFileAtomic('message.txt', 'Hello Node', {fsync: false}, err => {});
writeFileAtomic('message.txt', 'Hello Node', {mode: 123}, err => {});

writeFileAtomic('message.txt', 'Hello Node').then(() => {}).catch(() => {});
writeFileAtomic('message.txt', 'Hello Node', {mode: 123}).then(() => {}).catch(() => {});

writeFileAtomic.sync('message.txt', 'Hello Node');

writeFileAtomic.sync('message.txt', 'Hello Node', {chown: {uid: 100, gid: 50}});
writeFileAtomic.sync('message.txt', 'Hello Node', {encoding: ''});
writeFileAtomic.sync('message.txt', 'Hello Node', {fsync: false});
writeFileAtomic.sync('message.txt', 'Hello Node', {mode: 123});
