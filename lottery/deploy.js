const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(
  "glide tray reject mail buddy area forward diesel pink caught void pyramid",
  // "https://rinkeby.infura.io/v3/8732738fea324895ab019ea6fe9bac95"
  "https://kovan.infura.io/v3/8732738fea324895ab019ea6fe9bac95"
);

const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();

  console.log("Attempting to deploy from account", accounts[0]);
  let result;
  try {
    result = await new web3.eth.Contract(JSON.parse(interface))
      .deploy({ data: bytecode })
      .send({ gas: "1000000", from: accounts[0] });
  } catch (err) {
    console.log(err);
  }

  console.log(interface);
  console.log("Contract deployed to", result.options.address);
  provider.engine.stop();
};
deploy();
