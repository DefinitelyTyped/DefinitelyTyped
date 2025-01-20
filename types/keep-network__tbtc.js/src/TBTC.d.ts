import BN = require("bn.js");
import type { TBTCConfig } from "./CommonTypes";
import { Constants } from "./Constants.js";
import { DepositFactory } from "./Deposit.js";
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
