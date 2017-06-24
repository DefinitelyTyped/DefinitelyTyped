import { Request, Response } from "express";
import * as mung from "express-mung";

function redact(body: Object, req: Request, res: Response) {
    return body;
}
mung.json(redact);
