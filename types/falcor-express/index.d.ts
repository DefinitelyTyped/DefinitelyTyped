// Type definitions for falcor-express 0.1.2
// Project: https://github.com/Netflix/falcor-express
// Definitions by: Quramy <https://github.com/Quramy>, LukeRielley <https://github.com/lukerielley>
// Definitions: https://github.com/borisyankov/DefinitelyTyped
// TypeScript Version: 2.4

/// <reference types="falcor" />

import { Request, Response, Handler } from 'express';
import {DataSource} from 'falcor';
declare function dataSourceRoute(getDataSource: (req: Request, res: Response) => DataSource): Handler;
