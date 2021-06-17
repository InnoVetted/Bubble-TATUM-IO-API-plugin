function(properties, context) {
    var coreObj, error
    
    let paramsToSend = {
        account:properties.account
    }
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://api-eu1.tatum.io/v3/xrp/account/" + properties.account + "/balance",
      "method": "GET",
      "headers": {
        "content-type": "application/json",
        "x-quorum-endpoint": "SOME_STRING_VALUE",
        "x-api-key": "REPLACE_KEY_VALUE"
      },
      "processData": false,
      "data": paramsToSend,
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
            assets: coreObj.assets,
      		balance: coreObj.balance,
            error: null
    	}
        
    }
  


    

}
