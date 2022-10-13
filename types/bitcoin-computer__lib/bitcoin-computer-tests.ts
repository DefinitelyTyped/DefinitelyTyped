import { Computer } from '@bitcoin-computer/lib';
const computer = new Computer({ chain: 'LTC', network: 'regtest', url: '' });
computer.getAddress();
