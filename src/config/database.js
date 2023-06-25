const { Client } = require('pg')
const { databaseCredentials } = require('./server')


module.exports = async function(){
    const client = new Client(databaseCredentials) 
    
    await client.connect() 

    return client;
}