// contract test code will go here
const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let accounts;
let inbox;
const INITIAL_STRING = "Hi there!";

beforeEach(async () => {
  // Get a list of all accounts
  accounts = await web3.eth.getAccounts();

  // Use one of those accounts to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface)) // interface is ABI
    .deploy({ data: bytecode, arguments: [INITIAL_STRING] }) //arguments to be passed into the constructor of the contract
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address); // ensure the address is not null, not undefined
  });

  it("has a default message", async () => {
    const message = await inbox.methods.message().call();
    assert.equal(message, INITIAL_STRING);
  });

  it("can change the message", async () => {
    const newMessage = "Bye there!";
    await inbox.methods.setMessage(newMessage).send({ from: accounts[0] }); // The from account specified specifies who pays for the transaction
    const message = await inbox.methods.message().call();
    assert.equal(message, newMessage);
  });
});
