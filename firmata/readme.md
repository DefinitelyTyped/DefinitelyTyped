# Usage

For typescript projects, instead of

```js
var Board = require('firmata');
```

you should use

```typescript
import * as Board from 'firmata'
```

You will find that `const enums` are exported under the namespace `Board` for ease of comparison or
use with other libraries before any boards are actually instantiated.

It's also important to note that if you want to extend the `Board` class in typescript, the
following will work (as long as you turn on `--noImplicitUseStrict` when compiling); here's
an example:

```typescript
// store as script.ts and compile with `tsc --noImplicitUseStrict script.ts`
// then run `node script.js`

import * as Board from 'firmata'

let portString = 'port string';

class MyBoard extends Board
{
	Disconnect()
	{
		this.transport.close(() =>
		{
			console.log('extended board closed');
		});
	}
}

let myBoard:MyBoard = new MyBoard(portString, () =>
{
	console.log('extended board ready');
	myBoard.Disconnect();
});
```