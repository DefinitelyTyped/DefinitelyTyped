import { BigNumber } from "bignumber.js";
// import BN from 'bn.js';

export type BlockNumber = 'latest' | 'pending' | 'earliest' | 'genesis' | string | number | BigNumber;
