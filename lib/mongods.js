const MongoClient = require('mongodb').MongoClient;

// pointing to local mongodb instance
const uri = "mongodb://localhost:27017/"

//function to get mongodb Client
function getClient(dbName) {
    return new Promise((resolve, reject) => {
        {
            MongoClient.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, client) {
                if (err) {
                    reject(err)
                    console.log('Error occurred while connecting to MongoDB Atlas...\n', err);
                }
                console.log('Connected...');
                resolve(client);
            });
        }
    })
}

module.exports = { getClient: getClient }
