// deploy code will go here
const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { abi, evm } = require("./compile");

const INITIAL_MESSAGE = "Hi there!";

// Provider is the communication library between web3 and a network
const provider = new HDWalletProvider(
  "glide tray reject mail buddy area forward diesel pink caught void pyramid",
  "https://rinkeby.infura.io/v3/49569f379c5242d3a70ab41eb1edb204"
);

const web3 = new Web3(provider);

async function deploy() {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);

  // Deploy the contract
  const result = await new web3.eth.Contract(abi)
    .deploy({ data: evm.bytecode.object, arguments: [INITIAL_MESSAGE] })
    .send({ gas: "1000000", from: accounts[0] });

  console.log("Contract deployed to", result.options.address);

  provider.engine.stop(); // Prevent a hanging deployment
}

deploy();
