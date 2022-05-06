// Using the injected web3 in the browser (from Metamask) as the provider to connect to the chain
import Web3 from "web3";

let web3;

if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: "eth_requestAccounts" });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    // "https://rinkeby.infura.io/v3/15c1d32581894b88a92d8d9e519e476c"
    "https://kovan.infura.io/v3/8732738fea324895ab019ea6fe9bac95"
  );
  web3 = new Web3(provider);
}

export default web3;
