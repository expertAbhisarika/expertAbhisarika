const { createClient } = require('redis');
const client = createClient(6379);
 
client.on("error", (error) => {
 console.error(error);
});
// client.connect()

function sum(a,b){
    return a+b;
}

module.exports = {client, sum};