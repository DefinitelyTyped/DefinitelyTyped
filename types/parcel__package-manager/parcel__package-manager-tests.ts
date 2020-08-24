import { NodePackageManager } from '@parcel/package-manager';
import { MemoryFS } from '@parcel/fs';
import { createWorkerFarm } from '@parcel/core';

const packageManager = new NodePackageManager(new MemoryFS(createWorkerFarm()));

packageManager.require('typescript', __dirname, {}).then(console.log);
