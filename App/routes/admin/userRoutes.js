const express = require('express');
const { userCreate } = require('../../controller/admin/adminContoller');

const userRoutes = express.Router();

userRoutes.post('/create', userCreate);

module.exports = {userRoutes};