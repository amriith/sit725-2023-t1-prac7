const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://Dream:Dream123@cluster916.nnechqk.mongodb.net/";
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});
client.connect();
module.exports = client;