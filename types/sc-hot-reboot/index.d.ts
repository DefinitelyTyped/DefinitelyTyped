// Type definitions for sc-hot-reboot 1.0
// Project: https://github.com/socketcluster/sc-hot-reboot
// Definitions by: Daniel Rose <https://github.com/DanielRose>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
// TypeScript Version: 2.4

import SocketCluster = require("socketcluster");
import { WatchOptions } from "chokidar";

export function attach(scMasterInstance: SocketCluster, options?: WatchOptions): void;
