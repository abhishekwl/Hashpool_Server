function setupDatabase() {
    const mongoose = require('mongoose');
    mongoose.Promise = global.Promise;
    const dbUri = 'mongodb+srv://'+process.env.DB_USER_NAME+':'+process.env.DB_USER_PASSWORD+'@'+process.env.DB_HOST+'?retryWrites=true&w=majority'
    mongoose.connect(dbUri, { useNewUrlParser: true, useFindAndModify: false })
        .then(() => console.log('[DB] Connection success'))
        .catch(err => { console.log('[!DB] Connection failed\n'+err); process.exit(); });
};

function sendResponse(error, data, request, response) {
    if(error || data===null || data===undefined) {
        response.status(500).json({ error: error });
        console.log('[ERROR]: '+request.path+' = '+error);
    }
    else response.status(200).json(data);
};

module.exports = {
    setupDatabase: setupDatabase,
    sendResponse: sendResponse
};