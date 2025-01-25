const mongoose = require('mongoose');

const dbUri = 'mongodb://localhost:27017/demo';
mongoose.connect(dbUri,{family: 4}).then(() => {
    console.log('DB connection established to demo');
}).catch(error => {
    console.error(error,'Could not establish mongoose connection');
})
