import IOTA = require("iota.lib.js")

const config = {
   node: "https://localhost:14265",
   address: "999999999999999999999999999999999999999999999999999999999999999999999999999999999",
   transaction: "999999999999999999999999999999999999999999999999999999999999999999999999999999999"
}

const iota = new IOTA({
   provider: config.node
})

//
// iota.api
//

iota.api.getNodeInfo((error, info) => {
   console.log(info)
})

iota.api.getNeighbors((error, info) => {
   console.log(error, info)
})

iota.api.addNeighbors(["udp://127.0.0.2:14600"],(error, count) => {
   console.log(count)
})

iota.api.removeNeighbors(["udp://127.0.0.2:14600"],(error, count) => {
   console.log(count)
})

iota.api.findTransactions({
   addresses: [config.address]
}, (error, hashes) => {
   console.log(error, hashes)
})

iota.api.getTrytes([config.address], (error, trytes) =>{
   console.log(trytes)
})

iota.api.getInclusionStates([config.address],[config.transaction], (error, states) => {
   console.log(states)
})

iota.api.getBalances([config.address], 1, (error, states) => {
   console.log(states)
})

iota.api.getTransactionsToApprove(1, (error, transactions) => {
   console.log(transactions)
})

iota.api.getTransactionsObjects([config.transaction],(err, response) =>{
   console.log(response)
})

iota.api.findTransactionObjects({
   addresses: [config.address]
},(err, response) =>{
   console.log(response)
})

iota.api.getLatestInclusion([config.address], (err, response) => {
   console.log(response)
})

//
// iota.utils
//

console.log(iota.utils.convertUnits(1000,"i", "Mi"))

const checksum = iota.utils.addChecksum(config.address)
console.log(iota.utils.noChecksum(checksum))
console.log(iota.utils.isValidChecksum(checksum))

const transactionObj = iota.utils.transactionObject(new Array(2674).join("9"))
console.log(iota.utils.transactionTrytes(transactionObj))

const trytes = iota.utils.toTrytes("HELLO TANGLE")
console.log(iota.utils.fromTrytes(trytes))

//
// iota.valid
//

console.log(iota.valid.isAddress(config.address))

console.log(iota.valid.isTrytes(trytes))

console.log(iota.valid.isValue(0))

console.log(iota.valid.isNum(0))

console.log(iota.valid.isHash(config.address))

const transferObj : TransferObject = {
   address: config.address,
   message: "",
   value: 0,
   tag: ""
}
console.log(iota.valid.isTransfersArray([transferObj]))









