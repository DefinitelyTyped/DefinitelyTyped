/**
Returns a regex that matches all invalid characters.

@example
```ts
import filenameReservedRegex from 'filename-reserved-regex';

filenameReservedRegex().test('foo/bar');
//=> true

filenameReservedRegex().test('foo-bar');
//=> false
```
 */
export default function filenameReservedRegex(): RegExp;

/**
Returns an exact-match case-insensitive regex that matches invalid Windows filenames.

These include CON, PRN, AUX, NUL, COM1, COM2, COM3, COM4, COM5, COM6, COM7, COM8, COM9, LPT1, LPT2, LPT3, LPT4, LPT5, LPT6, LPT7, LPT8, LPT9.

@example
```ts
import {windowsReservedNameRegex} from 'filename-reserved-regex';

windowsReservedNameRegex().test('aux');
//=> true
```
 */
export function windowsReservedNameRegex(): RegExp;
