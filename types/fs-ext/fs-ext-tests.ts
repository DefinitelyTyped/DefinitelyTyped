import fsExt = require('fs-ext');

const fd = 1;

fsExt.flock(fd, 'sh', (err) => {
    const _err: NodeJS.ErrnoException | null = err;
});
fsExt.flock(fd, fsExt.constants.LOCK_SH, (err) => {
    const _err: NodeJS.ErrnoException | null = err;
});
fsExt.flockSync(fd, 'ex');
fsExt.flockSync(fd, fsExt.constants.LOCK_EX);

fsExt.fcntl(fd, 'setlkw', fsExt.constants.F_WRLCK, (err) => {
    const _err: NodeJS.ErrnoException | null = err;
});
fsExt.fcntl(fd, fsExt.constants.F_SETLKW, fsExt.constants.F_WRLCK, (err) => {
    const _err: NodeJS.ErrnoException | null = err;
});
fsExt.fcntlSync(fd, fsExt.constants.F_SETLKW, fsExt.constants.F_WRLCK);

fsExt.fcntl(fd, 'getfd', (err, flags) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _flags: number = flags;
});
fsExt.fcntl(fd, fsExt.constants.F_GETFD, (err, flags) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _flags: number = flags;
});
{
    const flags: number = fsExt.fcntlSync(fd, fsExt.constants.F_GETFD);
}

fsExt.seek(fd, 2, fsExt.constants.SEEK_SET, (err, pos) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _pos: number = pos;
});
{
    const result: number = fsExt.seekSync(fd, 2, fsExt.constants.SEEK_SET);
}

fsExt.statVFS((err, stat) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _stat: fsExt.StatFVS = stat;
});
fsExt.statVFS('/some/path', (err, stat) => {
    const _err: NodeJS.ErrnoException | null = err;
    const _stat: fsExt.StatFVS = stat;
});
{
    const stat: fsExt.StatFVS = fsExt.statVFS();
}
{
    const stat: fsExt.StatFVS = fsExt.statVFS('/some/path');
}
