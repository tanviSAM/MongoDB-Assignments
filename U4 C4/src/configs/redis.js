const { createClient } = require("redis");

const client = createClient({ url : "redis://localhost:1234"});

client.on("error", function(err){
    console.log({message: err.message});
});

module.exports = client;