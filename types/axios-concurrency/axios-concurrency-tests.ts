import axios from 'axios';
import {ConcurrencyManager} from 'axios-concurrency';

const axiosInstance = axios.create({});

// @ts-expect-error
ConcurrencyManager(null, 1);

// @ts-expect-error
ConcurrencyManager(1, 1);

// @ts-expect-error
ConcurrencyManager('one', 1);

// @ts-expect-error
ConcurrencyManager(true, 1);

// @ts-expect-error
ConcurrencyManager(axiosInstance, null);

// @ts-expect-error
ConcurrencyManager(axiosInstance, '1');

const manager = ConcurrencyManager(axiosInstance, 1);

// $ExpectType void
manager.detach();
