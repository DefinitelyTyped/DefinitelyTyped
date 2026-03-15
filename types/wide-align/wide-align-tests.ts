import { center, left, right } from "wide-align";

// $ExpectType string
center("hello", 20);

// $ExpectType string
left("hello", 20);

// $ExpectType string
right("hello", 20);

// @ts-expect-error - first argument must be string
center(123, 20);

// @ts-expect-error - second argument must be number
center("hello", "20");

// @ts-expect-error - requires two arguments
center("hello");
