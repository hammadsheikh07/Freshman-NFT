const {ethers} = require("hardhat")
async function main()
{
    //getting the nft contract GameItem from NFTee.sol to deploy
    const nftContract = await ethers.getContractFactory("GameItem");

    //deployment of contract
    const deployednftContract = await nftContract.deploy();

    //printing the address of deployed nft contract
    console.log("NFT contract address is: ",deployednftContract.address);
}

//calling the main funtion
main().
then(()=>process.exit(0))
.catch((error)=>{
    console.log(error)
    process.exit(1);
});