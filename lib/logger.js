const mdb = require('./mongods')
const dbName = "local"
const collectionName = "sride_logs"
var mongoClient;

//function to set logger with MongoClient for saving logs to Mongodb local instance
function getLogger(){
return new Promise((resolve,reject)=>{
    mdb.getClient(dbName).then((client) => {
        mongoClient = client;
        resolve()
    }, (err) => {
        reject()
        console.log("error connecting mOngo for logging")
    })
})
}

//function to log info messages
function info(message) {
    const collection = mongoClient.db(dbName).collection(collectionName);
    var doc = getLogDoc(message, "info")
    collection.insertOne(doc)
}

//function to log warning messages
function warning(message) {
    const collection = mongoClient.db(dbName).collection(collectionName);
    var doc = getLogDoc(message, "warning")
    collection.insertOne(doc)
}

//function to log error messages
function error(message) {
    const collection = mongoClient.db(dbName).collection(collectionName);
    var doc = getLogDoc(message, "error")
    collection.insertOne(doc)
}

//function to read a common doc structure
function getLogDoc(message, logLevel) {
    var doc = { "message": message, "logLevel": logLevel, "logTs": new Date() }
    return doc
}

module.exports = {getLogger:getLogger, info: info, error: error, warning: warning }