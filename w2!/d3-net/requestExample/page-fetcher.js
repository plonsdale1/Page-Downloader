const request = require("request");
const fs = require("fs");


const url = process.argv[2];
const fileLocation = process.argv[3];

// error logs the error, response is the transaction response details, body is the data/ info
request(url, function (error, response, body) {
  if(!error) {
    // Save file ..
    fs.writeFile(fileLocation, body, function(err){
      if(err) {
        console.log("error at location!"); 
      }else {
        console.log("file saved gg");
      }
    }) 

    
  }
}) 


