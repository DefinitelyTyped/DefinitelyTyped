/// <reference types="node" />

import physicalCpuCount = require('physical-cpu-count');
import { cpus } from 'os';
const logicalCpuCount = cpus().length;

physicalCpuCount; // $ExpectType number
logicalCpuCount; // $ExpectType number
