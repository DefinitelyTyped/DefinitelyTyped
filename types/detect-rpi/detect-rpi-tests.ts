import isPi from "detect-rpi";

// $ExpectType boolean
isPi();

// @ts-expect-error
isPi(1);
