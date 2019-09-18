import * as satoshiBitcoin from "satoshi-bitcoin";

// $ExpectType number
satoshiBitcoin.toBitcoin(100000000);
// $ExpectType number
satoshiBitcoin.toSatoshi(1);
