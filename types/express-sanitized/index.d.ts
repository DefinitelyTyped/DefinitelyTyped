import * as express from "express";

type e = () => (req: express.Request, res: express.Response, next: express.NextFunction) => void;

declare const expressSanitized: e;
export = expressSanitized;
