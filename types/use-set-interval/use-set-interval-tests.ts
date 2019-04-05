import { useState } from 'react';
import useSetInterval from 'use-set-interval';

const [ count, setCount ] = useState(0);
useSetInterval(() => setCount(count + 1), 1000);
