import {
    up,
    down,
    forward,
    back,
    nextLine,
    previousLine,
    horizontalAbsolute,
    eraseData,
    eraseLine,
    goto,
    gotoSOL,
    beep,
    hideCursor,
    showCursor,
    color,
} from "console-control-strings";

// $ExpectType string
up();
// $ExpectType string
up(5);

// $ExpectType string
down();
// $ExpectType string
down(3);

// $ExpectType string
forward();
// $ExpectType string
forward(10);

// $ExpectType string
back();
// $ExpectType string
back(2);

// $ExpectType string
nextLine();
// $ExpectType string
nextLine(4);

// $ExpectType string
previousLine();
// $ExpectType string
previousLine(1);

// $ExpectType string
horizontalAbsolute(10);

// $ExpectType string
eraseData();

// $ExpectType string
eraseLine();

// $ExpectType string
goto(1, 1);
// $ExpectType string
goto(10, 20);

// $ExpectType string
gotoSOL();

// $ExpectType string
beep();

// $ExpectType string
hideCursor();

// $ExpectType string
showCursor();

// color with array
// $ExpectType string
color(["bold", "red"]);

// color with variadic arguments
// $ExpectType string
color("bold", "bgBlue");

// color with single argument
// $ExpectType string
color("reset");

// @ts-expect-error - up requires number, not string
up("5");

// @ts-expect-error - goto requires two arguments
goto(1);

// @ts-expect-error - horizontalAbsolute requires a number argument
horizontalAbsolute();

// color with no arguments is allowed by the variadic signature
// $ExpectType string
color();
