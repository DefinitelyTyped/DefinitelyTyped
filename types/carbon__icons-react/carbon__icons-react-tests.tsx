import * as React from 'react';
import { Add16, Add24, Add32, AccessibilityAlt16, DataBaseAlt16, GasStation16 } from '@carbon/icons-react';

<AccessibilityAlt16 />; // $ExpectType Element
<Add16 />; // $ExpectType Element
<Add24 aria-label="Add" />; // $ExpectType Element
<Add32 title="Add" aria-label="Add" tabIndex="0" className="add-32" />; // $ExpectType Element
<DataBaseAlt16 />; // $ExpectType Element
<GasStation16 />; // $ExpectType Element
