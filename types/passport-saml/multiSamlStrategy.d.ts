import express = require('express');
import { Strategy, SamlConfig, VerifyWithRequest, VerifyWithoutRequest } from './index';

export interface MultiSamlConfig extends SamlConfig {
    getSamlOptions(req: express.Request, callback: (err: Error | null, samlOptions: SamlConfig) => void): void;
}

export class MultiSamlStrategy extends Strategy {
    constructor(config: MultiSamlConfig, verify: VerifyWithRequest | VerifyWithoutRequest);
}
