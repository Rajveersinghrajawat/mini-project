const express = require('express');
const { userRoutes } = require('./admin/userRoutes');

const adminRoutes = express.Router();

adminRoutes.use('/user', userRoutes);

module.exports = {adminRoutes};