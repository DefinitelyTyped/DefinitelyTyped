import { NextFunction, Request, Response } from "express";

/**
 * Enforces HTTPS connections on any incoming requests.
 */
declare function enforceHTTPS(): (req: Request, res: Response, next: NextFunction) => void;

export = enforceHTTPS;
