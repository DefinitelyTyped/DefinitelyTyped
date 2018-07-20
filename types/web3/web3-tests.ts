import Web3 = require("web3");
const web3 = new Web3();
const myProvider = new web3.providers.HttpProvider("http://localhost:5454");
web3.setProvider(myProvider);
web3.eth.setProvider(myProvider);

const myContract = new web3.eth.Contract(
	[],
	"0xde0B295669a9FD93d5F28D9Ec85E40f4cb697BAe",
	{
		from: "0x1234567890123456789012345678901234567891",
		gasPrice: "20000000000"
	}
);

myContract.options.from = "0x1234567890123456789012345678901234567891";
myContract.options.gasPrice = "20000000000000";
myContract.options.gas = 5000000;
