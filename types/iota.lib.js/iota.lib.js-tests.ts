import IOTA = require("iota.lib.js");

const config = {
   node: "https://localhost:14265",
   address: "999999999999999999999999999999999999999999999999999999999999999999999999999999999",
   transaction: "999999999999999999999999999999999999999999999999999999999999999999999999999999999"
};

const iota = new IOTA({
   provider: config.node
});

//
// iota.api
//

iota.api.getNodeInfo((error, info) => {
});

iota.api.getNeighbors((error, info) => {
});

iota.api.addNeighbors(["udp://127.0.0.2:14600"], (error, count) => {
});

iota.api.removeNeighbors(["udp://127.0.0.2:14600"], (error, count) => {
});

iota.api.findTransactions({
   addresses: [config.address]
}, (error, hashes) => {
});

iota.api.getTrytes([config.address], (error, trytes) => {
});

iota.api.getInclusionStates([config.address], [config.transaction], (error, states) => {
});

iota.api.getBalances([config.address], 1, (error, states) => {
});

iota.api.getTransactionsToApprove(1, (error, transactions) => {
});

iota.api.getTransactionsObjects([config.transaction], (err, response) => {
});

iota.api.findTransactionObjects({
   addresses: [config.address]
}, (err, response) => {
});

iota.api.getLatestInclusion([config.address], (err, response) => {
});

//
// iota.utils
//

iota.utils.convertUnits(1000, "i", "Mi");

const checksum = iota.utils.addChecksum(config.address);
iota.utils.noChecksum(checksum);
iota.utils.isValidChecksum(checksum);

const transactionObj = iota.utils.transactionObject(new Array(2674).join("9"));
iota.utils.transactionTrytes(transactionObj);

const trytes = iota.utils.toTrytes("HELLO TANGLE");
iota.utils.fromTrytes(trytes);

//
// iota.valid
//

iota.valid.isAddress(config.address);

iota.valid.isTrytes(trytes);

iota.valid.isValue(0);

iota.valid.isNum(0);

iota.valid.isHash(config.address);

const transferObj = {
   address: config.address,
   message: "",
   value: 0,
   tag: ""
};

iota.valid.isTransfersArray([transferObj]);
