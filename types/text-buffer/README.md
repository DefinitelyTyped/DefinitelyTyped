## TextBuffer Type Definitions

TypeScript type definitions for [TextBuffer](https://github.com/atom/text-buffer), which is published as "[text-buffer](https://www.npmjs.com/package/text-buffer)" on NPM.

### Usage Notes

#### Exports

This module has a single entity as its export: the [TextBuffer](https://github.com/atom/text-buffer/blob/master/src/text-buffer.coffee) class. The require syntax is typically used to import modules like this.

```ts
import TextBuffer = require("text-buffer");
```

#### Point and Range

Both the Point class and the Range class are anchored onto the TextBuffer class as static properties, allowing construction of both despite TextBuffer being the singular export.

```ts
import TextBuffer = require("text-buffer");
let point = new TextBuffer.Point(0, 0);
let range = new TextBuffer.Range([0, 0], [1, 4]);
```

#### The TextBuffer Namespace

The three primary classes of TextBuffer are Point, Range, and TextBuffer, yet there are many other types passed around and used by it. Many of the types used by TextBuffer can be referenced from the TextBuffer namespace.

```ts
function example(marker: TextBuffer.Marker) {}
```
