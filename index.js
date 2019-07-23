require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const helmet = require('helmet');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet());

mongoose.Promise = global.Promise;
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useFindAndModify: false })
    .then(() => console.log('[DB] Connection success'))
    .catch(err => { console.log('[!DB] Connection failed\n'+err); process.exit(); });

const PORT = process.env.PORT;
global.sendResponse = (error, data, request, response) => {
    if(error || data===null || data===undefined) response.status(500).json({ error: error });
    else response.status(200).json(data);
};
app.get('/', (request, response) => global.sendResponse(null, 'All requests should be directed to /api/v1 endpoint', request, response));

require('./app/routes/user.routes')(app);
require('./app/routes/store.routes')(app);
require('./app/routes/category.routes')(app);
app.listen(PORT, '0.0.0.0', () => console.log('[SERVER] Listening on port '+PORT));
