// Connecting to the deployed contract instance on the chain via the ABI and the contract's address
import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x4a4Ea8A737d2f9C270ba9043c8C85f2a0eBb4acf"
);

export default instance;
