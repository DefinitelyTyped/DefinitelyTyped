import express = require('express');
import { Strategy, SamlConfig, VerifyWithRequest, VerifyWithoutRequest } from './index';

declare namespace MultiSamlStrategy {
    type SamlOptionsCallback = (err: Error | null, samlOptions?: SamlConfig) => void;

    interface MultiSamlConfig extends SamlConfig {
        getSamlOptions(req: express.Request, callback: SamlOptionsCallback): void;
    }
}

declare class MultiSamlStrategy extends Strategy {
    constructor(config: MultiSamlStrategy.MultiSamlConfig, verify: VerifyWithRequest | VerifyWithoutRequest);
}

export = MultiSamlStrategy;
