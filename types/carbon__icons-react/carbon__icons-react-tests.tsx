import * as React from 'react';
import { Add16, Add24, Add32 } from '@carbon/icons-react';

<Add16 />; // $ExpectType FunctionComponent<CarbonIconProps>
<Add24 aria-label="Add" />; // $ExpectType FunctionComponent<CarbonIconProps>
<Add32 aria-label="Add" tabIndex="0" className="add-32" />; // $ExpectType FunctionComponent<CarbonIconProps>
