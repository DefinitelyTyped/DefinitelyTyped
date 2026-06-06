import { Request } from "express";
import * as passport from "passport";
import { IBaseStrategyOption, ITokenPayload, VerifyCallback } from "./common";

export type VerifyBearerFunction = (token: ITokenPayload, done: VerifyCallback) => void;

export type VerifyBearerFunctionWithReq = (
    req: Request,
    token: ITokenPayload,
    done: VerifyCallback,
) => void;

export interface IBearerStrategyOption extends IBaseStrategyOption {
    audience?: string | string[] | undefined;
    policyName?: String | undefined;
    allowMultiAudiencesInToken?: boolean | undefined;
    scope?: string[] | undefined;
}

export interface IBearerStrategyOptionWithRequest extends IBearerStrategyOption {
    passReqToCallback: boolean;
}

export class BearerStrategy implements passport.Strategy {
    constructor(
        options: IBearerStrategyOptionWithRequest,
        verify: VerifyBearerFunctionWithReq,
    );
    constructor(options: IBearerStrategyOption, verify: VerifyBearerFunction);

    name: string;

    authenticate(req: Request, options?: object): void;
}
