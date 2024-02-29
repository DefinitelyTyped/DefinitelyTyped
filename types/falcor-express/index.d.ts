/// <reference types="falcor" />

import { Handler, Request, Response } from "express";
import { DataSource } from "falcor";
declare function dataSourceRoute(getDataSource: (req: Request, res: Response) => DataSource): Handler;
