import BN = require("bn.js");
import { DepositFactory } from "./Deposit.js";
import { Constants } from "./Constants.js";
import type { TBTCConfig } from './CommonTypes';
export default class TBTC {
    depositFactory: DepositFactory;
    constants: Constants;
    config: TBTCConfig;
    static withConfig(config: TBTCConfig, networkMatchCheck?: boolean): Promise<TBTC>;
    satoshisPerTbtc: BN;
    constructor(depositFactory: DepositFactory, constants: Constants, config: TBTCConfig);
    get Deposit(): DepositFactory;
    get Constants(): Constants;
}
export function getNetworkIdFromArtifact(): string;
