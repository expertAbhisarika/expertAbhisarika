const express = require('express');
const app = express();
const cors = require('cors');
const logger = require('./utility/logger');
const morgan = require('morgan');
const bodyparser = require('body-parser');
app.use(bodyparser.json({limit: '50mb'}));
require('dotenv').config();
require('./db.config');
// require('./utility/redis');
app.use(cors({
    origin: '*',
    methods: ['Get','Post','Put']
}));
const port = process.env.PORT||3000;
const morganFormat = ':method :url :status :response-time ms';
app.use(morgan(morganFormat,{
    stream: {
        write: (message)=>{
            const logObject = {
                method: message.split(' ')[0],
                url: message.split(' ')[1],
                status: message.split(' ')[2],
                responseTime: message.split(' ')[3]
            }

            logger.info(JSON.stringify(logObject));
        }
    }
}));
app.use('/route',require('./routes/routes'));
app.listen(port,()=>{
    console.log(`server listening at ${port}`);
})