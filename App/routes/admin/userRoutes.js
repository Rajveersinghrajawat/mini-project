const express = require('express');
const { userCreate, userView, SingleData } = require('../../controller/admin/adminController');

const userRoutes = express.Router();

userRoutes.post('/create', userCreate);

userRoutes.get('/view', userView);

userRoutes.get('/single/:slug', SingleData)

module.exports = {userRoutes};