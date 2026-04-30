const express = require('express');
const { userCreate, userView } = require('../../controller/admin/adminContoller');

const userRoutes = express.Router();

userRoutes.post('/create', userCreate);
userRoutes.get('/view', userView);

module.exports = {userRoutes};