// Priyanshu Suryawanshi 
// CU UID :- 21CBS1049
// MetaCrafters Name :- Priyanshu955

// create a variable to hold your NFT's
const NFTs = []

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (_name,_eyeColour,_shirtType,_bling) {
    const NFT = {
        "name" : _name,
        "eyeColour" : _eyeColour,
        "shirtType":_shirtType ,
        "bling" :_bling
    }
    NFTs.push(NFT);
    console.log("Minted : "+_name);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(let i=0;i<NFTs.length;i++)
    {
        console.log("\nID : " + (i+1));
        console.log("Name : " + NFTs[i].name);
        console.log("Eye Colour: " + NFTs[i].eyeColour );
        console.log("Shirt Type:" + NFTs[i].shirtType ) ;
        console.log("Bling :" + NFTs[i].bling);
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("\nTotal Sypply : " + NFTs.length);
}

// call your functions below this line
mintNFT("Jhon","Red","Jacket","Platinum Chain");
mintNFT("Shawn","Black","Vest","Diamond Chain");
mintNFT("Mike","Blue","Tshirt","Gold Chain");
listNFTs();
getTotalSupply();