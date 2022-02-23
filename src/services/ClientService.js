const mongoose = require('mongoose');
const client = require('../schemas/ClientSchema');


exports.AllClient = (req, res) => {
    client.find({}).exec(function (err, client) {
        if (err) {
            return res.send(err);
        }
        res.json(client);
    });
};

exports.CreateClient = (req, res) => {
    const newClient = new client(req.body);
    newClient.save(function (err, client) {
        if (err) {
            res.send(err);
        }
        res.json(client);
    });
};
