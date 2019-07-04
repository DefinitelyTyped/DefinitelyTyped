import slash, { trailingSlashIt, unTrailingSlashIt } from "trailing-slash-it";

slash('foo\\bar'); // $ExpectType string
trailingSlashIt('foo\\bar'); // $ExpectType string
unTrailingSlashIt('foo\\bar'); // $ExpectType string
