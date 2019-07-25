function setupDatabase() {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useFindAndModify: false })
        .then(() => console.log('[DB] Connection success'))
        .catch(err => { console.log('[!DB] Connection failed\n'+err); process.exit(); });
};

function sendResponse(error, data, request, response) {
    if(error || data===null || data===undefined) response.status(500).json({ error: error });
    else response.status(200).json(data);
};

module.exports = {
    setupDatabase: setupDatabase,
    sendResponse: sendResponse
};