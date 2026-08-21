# Definitely Typed for node-forge

## Current node-forge Version
`v0.10.0`
## Usage

```bash
npm install --save-dev @types/node-forge
npm install --save node-forge
```

example:
```ts
import * as forge from "node-forge";

Buffer.isBuffer(forge.pki.ed25519.generateKeyPair().publicKey) // true
```
## License
BSD-2-Clause

## dependencies
`@types/node`

## Author
[Seth Westphal](https://github.com/westy92)
[Kay Schecker](https://github.com/flynetworks)
[Aakash Goenka](https://github.com/a-k-g)
[Rafal2228](https://github.com/rafal2228)
[Beeno Tung](https://github.com/beenotung)
