import * as tty from 'tty';

const rs: tty.ReadStream = new tty.ReadStream(0);
const ws: tty.WriteStream = new tty.WriteStream(1);

const rsIsRaw: boolean = rs.isRaw;
rs.setRawMode(true);

const wsColumns: number = ws.columns;
const wsRows: number = ws.rows;

ws.clearLine(-1);
ws.clearLine(0);
ws.clearLine(1);
ws.clearScreenDown();
ws.cursorTo(42, 42);
ws.addListener('resize', () => {
});
ws.getColorDepth();
ws.getColorDepth({
});
ws.clearScreenDown();
ws.getWindowSize();
const hasCOlors: boolean = ws.hasColors();

const isTTY: boolean = tty.isatty(1);
