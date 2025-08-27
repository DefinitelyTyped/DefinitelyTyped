import SocketCluster = require("socketcluster");
import { WatchOptions } from "chokidar";

export function attach(scMasterInstance: SocketCluster, options?: WatchOptions): void;
