# Installation
> `npm install --save @types/zipcodes`

# Summary
This package contains type definitions for zipcodes (https://github.com/davglass/zipcodes).

# Usage

```typescript
import { ZipCode, ZipCodes } from 'zipcodes';

const beverlyHills : ZipCode = {
    zip: '90210',
    latitude: 34.088808,
    longitude: -118.406125,
    city: 'Beverly Hills',
    state: 'CA',
    country: 'US'
};

ZipCodes.lookupByState('CA'); // returns a ZipCode[]
```
# Details
Files were exported from https://www.github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/zipcodes

Additional Details
 * Last updated: Fri, Dec 29 2017, 6:30:00 pm
 * Dependencies: none
 * Global values: none

# Credits
These definitions were written by Brayden Lopez <https://github.com/headdetect>
