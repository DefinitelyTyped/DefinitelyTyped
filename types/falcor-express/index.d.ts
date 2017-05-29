// Type definitions for falcor-express 0.1.2
// Project: https://github.com/Netflix/falcor-express
// Definitions by: Quramy <https://github.com/Quramy/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped

/// <reference types="falcor" />



import {Request, Response, Handler} from 'express';
import {DataSource} from 'falcor';
declare function dataSourceRoute(getDataSource: (req: Request, res: Response) => DataSource): Handler;
