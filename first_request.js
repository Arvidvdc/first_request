const request=require("request");

request('https://jsonplaceholder.typicode.com/users/1', (error, response, body)=>{

    if(!error && response.statusCode==200) {
        const parseData=JSON.parse(body);
        // console.log(parseData.name);
        console.log(`${parseData.name} lives in ${parseData.address.city}`)
    }
})

// moderne methode:

const rp = require("request-promise");

rp('https://jsonplaceholder.typicode.com/users/1')
    .then((body) => {
        const parseData=JSON.parse(body);
        console.log(`${parseData.name} lives in ${parseData.address.city}`)
    })
    .catch((err) => {
        console.log("Error: ", err)
    });

// Based on course "The Web Developer Bootcamp | Udemy" from Colt Steele