import { EthereumEventsConfig } from '../../config';
import Web3 from 'web3';
import { EthereumEvent } from '../models';

export class EventFetcher {
  constructor(web3: Web3, contracts: any, options?: EthereumEventsConfig);

  getEvents(fromBlock: any, toBlock: any): Promise<EthereumEvent[]>;
}
