## VFile typescript Docs

Below are some examples of how to use these Definitions.<br>
Scenarios where the Typescript code is identical to plain Javascript code are omitted.

### Extending VFile

```ts
import vfile = require('vfile')

// 1. Define extended vfile interface
interface CustomVFile extends vfile.VFile {
    custom: string;
    data: {
        custom: number;
    };
}

// 2. Provide the extended interface to generic type parameter
// So it can be used for return value
const file: CustomVFile = vfile<CustomVFile>({
    path: '~/example.txt',
    contents: 'Alpha *braavo* charlie.',
    custom: 'Custom tango',
    data: {
        custom: 12345
    }
});

// vfile recognize extended VFile values. So it will return same type.
const copiedFile: CustomVFile = vfile(file);
```
