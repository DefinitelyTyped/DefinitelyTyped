import BigNumber from 'bignumber.js';
// import BN from 'bn.js';

export type BlockNumber = string | number | /* BN |*/ BigNumber | 'latest' | 'pending' | 'earliest' | 'genesis';
