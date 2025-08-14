import floatEqual from "float-equal";

// @ts-expect-error
floatEqual();

// @ts-expect-error
floatEqual(0.1 + 0.2);

// $ExpectType boolean
floatEqual(0.1 + 0.2, 0.3);
