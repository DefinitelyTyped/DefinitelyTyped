import mcping = require('mcping-js');
import type { PingResponse } from 'mcping-js';

// $ExpectType MinecraftServer
new mcping.MinecraftServer('ServerIP');
