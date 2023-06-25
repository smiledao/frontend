//Metamask sending trasactions:
//https://docs.metamask.io/guide/sending-transactions.html#transaction-parameters


runFrontend()

async function runFrontend() {
  detectMetamaskInstalled(); //When the page is opened check for error handling issues.

  let accounts = []; ////Empty array to be filled once Metamask is called.
  document.getElementById("enableEthereumButton").innerHTML =
    "Connect Metamask 🦊";
  document.getElementById("getValueStateSmartContract").innerHTML = "Connect wallet to see if you are part of the Smile DAO...";

  const gnosisChainId = 100;

  const provider = new ethers.providers.Web3Provider(window.ethereum); //Imported ethers from index.html with "<script src="https://cdn.ethers.io/lib/ethers-5.6.umd.min.js" type="text/javascript"></script>".

  // const signer = provider.getSigner(); //Do this when the user clicks "enableEthereumButton" which will call getAccount() to get the signer private key for the provider.

  const contractAddress_JS = "0x2cF2d8418F713EaA5c4DB676aC7D5FC05A57C632";
  const contractABI_JS = await getContractAbi();
  // console.log(contractABI_JS)

  // const contractABI_JS = "hi"

  // getContractAbi()


  async function getContractAbi() {
    const response = await fetch('../abi/SmileNFT.sol/SmileNFT.json');
    const responseJson = await response.json();
    const contractABI_JS = responseJson.abi;
    // console.log(contractABI_JS)
    return contractABI_JS;

    // console.log(contractABI_JS.)
  }

  // console.log(contractABI_JS)
  
  const contractDefined_JS = new ethers.Contract(
    contractAddress_JS,
    contractABI_JS,
    provider
  );

  // const contractDefined_JS = new ethers.Contract(contractAddress_JS, contractABI_JS, signer);

  getDataOnChainToLoad();

  async function getDataOnChainToLoad() {
    let chainIdConnected = await getChainIdConnected();

    if (chainIdConnected == gnosisChainId) {
      // getStoredData();
    }
    if (chainIdConnected != gnosisChainId) {
      document.getElementById("getValueStateSmartContract").innerHTML =
        "Install Metamask and select Gnosis Testnet to have a Web3 provider to read blockchain data.";
    }
  }

  // async function getStoredData() {
  //   let storedDataCallValue = await contractDefined_JS.clock(accounts[]);
  //   if (storedDataCallValue === undefined) {
  //     document.getElementById("getValueStateSmartContract").innerHTML =
  //       "Install Metamask and select Gnosis Testnet to have a Web3 provider to read blockchain data.";
  //   } else {
  //     document.getElementById("getValueStateSmartContract").innerHTML =
  //       storedDataCallValue;
  //   }
  // }

  async function getWalletConnectedBalance() {
    let storedDataCallValue = await contractDefined_JS.balanceOf(accounts[0]);
    if (storedDataCallValue === undefined) {
      document.getElementById("getValueStateSmartContract").innerHTML =
        "Install Metamask and select Gnosis Testnet to have a Web3 provider to read blockchain data.";
    } else {
      document.getElementById("getValueStateSmartContract").innerHTML = storedDataCallValue;
    }
  }

  async function sentTxAsync(x) {
    let publicInputs = [];
    let proof = "0x";
    let mintUri = "localhost";
    const callDataObject = await contractDefined_JS.populateTransaction.mint(publicInputs,proof,mintUri);
    const txData = callDataObject.data;

    ethereum
      .request({
        method: "eth_sendTransaction",
        params: [
          {
            from: accounts[0],
            to: contractAddress_JS,
            data: txData,
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      .catch((error) => console.error);
  }

  // contractDefined_JS.on("setEvent", () => {
  //   getStoredData();
  // });
  

  //Connect to Metamask.
  const ethereumButton = document.querySelector("#enableEthereumButton");
  ethereumButton.addEventListener("click", () => {
    detectMetamaskInstalled();
    enableMetamaskOnGnosis();
  });

  // MODIFY CONTRACT STATE WITH SET FUNCTION WITH PREDEFINED DATA FROM WEB3.JS
  const changeStateInContractEvent = document.querySelector(
    ".changeStateInContractEvent"
  );
  changeStateInContractEvent.addEventListener("click", () => {
    checkAddressMissingMetamask();
    sentTxAsync();
  });

  //If Metamask is not detected the user will be told to install Metamask.
  function detectMetamaskInstalled() {
    try {
      ethereum.isMetaMask;
    } catch (missingMetamask) {
      alert(
        "Metamask not detected in browser! Install Metamask browser extension, then refresh page!"
      );
      document.getElementById("getValueStateSmartContract").innerHTML =
        "Install Metamask and select Gnosis to have a Web3 provider to read blockchain data.";
    }
  }

  //Alert user to connect their Metamask address to the site before doing any transactions.
  function checkAddressMissingMetamask() {
    if (accounts.length == 0) {
      alert(
        "No address from Metamask found. Click the top button to connect your Metamask account then try again without refreshing the page."
      );
    }
  }

  async function getChainIdConnected() {
    const connectedNetworkObject = await provider.getNetwork();
    const chainIdConnected = connectedNetworkObject.chainId;
    return chainIdConnected;
  }

  async function getAccount() {
    accounts = await ethereum.request({ method: "eth_requestAccounts" });
    getWalletConnectedBalance();
    const signer = provider.getSigner();
    document.getElementById("enableEthereumButton").innerText =
      accounts[0].substr(0, 5) + "..." + accounts[0].substr(38, 4);
  }

  async function enableMetamaskOnGnosis() {
    //Get account details from Metamask wallet.
    getAccount();
    //Check if user is on the Gnosis testnet. If not, alert them to change to Gnosis.
    if (window.ethereum.networkVersion != gnosisChainId) {
      // alert("You are not on the Gnosis! Please switch to Gnosis and refresh page.")
      try {
        await window.ethereum.request({
          method: "wallet_switchEthereumChain",
          params: [
            {
              chainId: "0x64",
            },
          ],
        });
        location.reload();
        // alert("Failed to add the network at chainId " + gnosisaChainId + " with wallet_addEthereumChain request. Add the network with https://chainlist.org/ or do it manually. Error log: " + error.message)
      } catch (error) {
        alert(
          "Failed to add the network at chainId " +
            gnosisChainId +
            " with wallet_addEthereumChain request. Add the network with https://chainlist.org/ or do it manually. Error log: " +
            error.message
        );
      }
    }
  }

}




