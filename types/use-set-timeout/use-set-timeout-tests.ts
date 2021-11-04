import { useState } from 'react';
import useSetTimeout from 'use-set-timeout';

const [ triggered, setTriggered ] = useState(false);
useSetTimeout(() => setTriggered(true), 5 * 1000);
