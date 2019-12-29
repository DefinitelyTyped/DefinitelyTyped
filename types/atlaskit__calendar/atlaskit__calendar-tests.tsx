import Calendar from '@atlaskit/calendar';

import * as React from 'react';
import { render } from 'react-dom';

declare const container: Element;

render(<Calendar onChange={() => {}} month={1} year={2000} />, container);
