function(properties, context) {
    var coreObj, error
    
    let paramsToSend = {
        name:properties.name
    }
    let settings = {
		  "async": true,
  		  "crossDomain": true,
          "url": "https://api-eu1.tatum.io/v3/ledger/virtualCurrency/" + properties.name,
          "method": "GET",
          "headers": {
            "x-api-key": context.keys["Testnet API key"]
          }
    };
    
    var sentRequest = context.request(settings)
    
    if (sentRequest.statusCode.toString().charAt(0) !== "2") {
        
        error = JSON.stringify(JSON.parse(sentRequest.body)) 
        console.log("ERROR START ◆◆◆◆◆◆◆")
		console.log(sentRequest.body)
        console.log("◆◆◆◆◆◆◆ ERROR END")
        
        return {
            error: error
        }
           
	} else {
        
        coreObj = JSON.parse(sentRequest.body) 
        
        return {
            name: coreObj.name,
      		supply: coreObj.supply,
            accountid: coreObj.accountid
            baserate: coreObj.baserate
            basepair: coreObj.basepair
            customerid: coreObj.customerid
            description: coreObj.description
            erc20address: coreObj.erc20address
            issueraccount: coreObj.issueraccount
            chain: coreObj.chain
            initialaddress: coreObj.initialaddress
    	}
        
    }

}
