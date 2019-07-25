require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const helmet = require('helmet');
//LOCAL
const {
    setupDatabase,
    sendResponse
} = require('./app/util');

setupDatabase();

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use(helmet());

app.get('/', (request, response) => sendResponse(null, 'All requests should be directed to /api/v1 endpoint', request, response));

require('./app/routes/user.routes')(app);
require('./app/routes/store.routes')(app);
require('./app/routes/product.routes')(app);
app.listen(PORT, '0.0.0.0', () => console.log('[SERVER] Listening on port '+PORT));
