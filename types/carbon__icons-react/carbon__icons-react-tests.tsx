import * as React from 'react';
import { Add16, Add24, Add32 } from '@carbon/icons-react';

<Add16 />; // $ExpectType Element
<Add24 aria-label="Add" />; // $ExpectType Element
<Add32 aria-label="Add" tabIndex="0" className="add-32" />; // $ExpectType Element
