const express = require('express');
const router = express.Router();

const clientService = require('../services/ClientService');

module.exports = function (app) {
    app.route('/client')
        .get(clientService.AllClient)
        .post(clientService.CreateClient);
};
