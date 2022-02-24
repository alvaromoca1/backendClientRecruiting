require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routers = require('./src/api/routes');
const cors = require('cors');
const app = express();

mongoose.Promise = global.Promise;

mongoose.connect(process.env.URL_MONGODB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}).then(() => {
    console.log("successful conception in BD");
}).catch(err => {
    console.log("There is an error: " + err);
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

routers(app);

app.listen(process.env.PORT, (err) => {
    if (err) throw err;
        console.log(`Successful in http://127.0.0.1:${process.env.PORT}`)
})