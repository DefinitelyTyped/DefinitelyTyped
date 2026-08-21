export type iflags =
    | "IGNBRK"
    | "BRKINT"
    | "IGNPAR"
    | "PARMRK"
    | "INPCK"
    | "ISTRIP"
    | "INLCR"
    | "IGNCR"
    | "ICRNL"
    | "IXON"
    | "IXOFF"
    | "IXANY"
    | "IMAXBEL";
export type oflags = "OPOST" | "ONLCR" | "OCRNL" | "ONOCR" | "ONLRET";
export type cflags =
    | "CSIZE"
    | "CS5"
    | "CS6"
    | "CS7"
    | "CS8"
    | "CSTOPB"
    | "CREAD"
    | "PARENB"
    | "PARODD"
    | "HUPCL"
    | "CLOCAL";
export type lflags =
    | "ECHOKE"
    | "ECHOE"
    | "ECHOK"
    | "ECHO"
    | "ECHONL"
    | "ECHOPRT"
    | "ECHOCTL"
    | "ISIG"
    | "ICANON"
    | "IEXTEN"
    | "EXTPROC"
    | "TOSTOP"
    | "FLUSHO"
    | "PENDIN"
    | "NOFLSH";
export interface termios {
    iflag: { [K in iflags]: boolean };
    oflag: { [K in oflags]: boolean };
    cflag: { [K in cflags]: boolean };
    lflag: { [K in lflags]: K extends "EXTPROC" ? boolean | undefined : boolean };
    cbaud?:
        | 0
        | 50
        | 75
        | 110
        | 134
        | 150
        | 200
        | 300
        | 600
        | 1200
        | 1800
        | 2400
        | 4800
        | 9600
        | 19200
        | 38400
        | 57600
        | 115200
        | 230400
        | 460800
        | 500000
        | 576000
        | 921600
        | 1000000
        | 1152000
        | 1500000
        | 2000000
        | 2500000
        | 3000000
        | 3500000
        | 4000000;
}
export function setattr(
    fd: number,
    attr: { [K in keyof termios]?: K extends "cbaud" ? termios[K] : Partial<termios[K]> },
): void;
export function getattr(fd: number): termios;
