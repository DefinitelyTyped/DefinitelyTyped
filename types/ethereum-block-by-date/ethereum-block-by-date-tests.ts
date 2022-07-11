import EthDater = require('ethereum-block-by-date');
import { providers } from 'ethers';
import Web3 from 'web3';

const provider = new providers.CloudflareProvider();
new EthDater(provider); // $ExpectType EthDater

const web3 = new Web3(new Web3.providers.HttpProvider(''));
const dater = new EthDater(web3); // $ExpectType EthDater

// $ExpectType BlockResult
dater.getDate(new Date());
// $ExpectType BlockResult
dater.getDate('2016-07-20T13:20:40Z');
// $ExpectType BlockResult
dater.getDate('2016-07-20T13:20:40Z', false);
// $ExpectType BlockResult
dater.getDate('2016-07-20T13:20:40Z', false, true);

// $ExpectType BlockResult[]
dater.getEvery('weeks', '2019-09-02T12:00:00Z', '2019-09-30T12:00:00Z');
// $ExpectType BlockResult[]
dater.getEvery('weeks', '2019-09-02T12:00:00Z', '2019-09-30T12:00:00Z', 2);
// $ExpectType BlockResult[]
dater.getEvery('weeks', '2019-09-02T12:00:00Z', '2019-09-30T12:00:00Z', 3, false);
// $ExpectType BlockResult[]
dater.getEvery('weeks', '2019-09-02T12:00:00Z', '2019-09-30T12:00:00Z', 3, false, true);
