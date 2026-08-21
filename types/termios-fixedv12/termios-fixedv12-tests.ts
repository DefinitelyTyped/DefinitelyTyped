import { getattr, setattr } from "termios-fixedv12";

// $ExpectType void
setattr(0, { lflag: { ECHO: false } });
// $ExpectType void
setattr(0, { lflag: { ECHO: true } });

// $ExpectType boolean
getattr(0).iflag.IGNBRK;

// $ExpectType boolean
getattr(0).oflag.OPOST;

// $ExpectType boolean
getattr(0).cflag.CSIZE;

// $ExpectType boolean
getattr(0).lflag.ECHOKE;

// $ExpectType boolean | undefined
getattr(0).lflag.EXTPROC;

const _: number | undefined = getattr(0).cbaud;

// $ExpectType void
setattr(0, { iflag: { BRKINT: true } });

// $ExpectType void
setattr(0, { lflag: { EXTPROC: true } });

// @ts-expect-error
setattr(0, { cbaud: 1 });
