import { Bitcoin } from 'bitcoin-computer-bitcore';

const { Script } = Bitcoin;
Script.fromString(
    '76a91447c84ac74fd7117005bc84504320068ba0f3490988ac'
).toBuffer();
